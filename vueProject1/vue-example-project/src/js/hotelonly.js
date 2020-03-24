/**
 * price_hotelonly_calendar.php에서 객실요금 알림요청 까지 처리
 */
// include 'top.php';
// include_once "/home/hosting_users/tmembers/www/mobile/inc/lib.php";
// include_once "/home/hosting_users/tmembers/www/_function/function_affiliate.php";
// <!--      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>-->
//   <!--      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
//   <!--      <script src="./src/js/hotelonly.js" type="text/javascript"></script>-->
function created() {
  let ckeditor = document.createElement('script')
  ckeditor.setAttribute('src', './src/js/hotelonly.js')
  document.head.appendChild(ckeditor)
}

var clickCheckIn = function(){
  $("#checkin").datePicker();
}
var clickCheckOut = function(){
  $("#checkout").datePicker();
}

$array_week = array('(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)');
if (!$hotel) {
  lochref("장시간 자리를 비우셔서 초기화면에서 재시작합니다. 불편을 드려죄송합니다.","../");
}

// 2019-08-29 get, post checkin 받기 추가
// $checkin  = preg_replace("/\D/", "", $_POST['checkin']);
// $checkout = preg_replace("/\D/", "", $_POST['checkout']);

$checkin  = preg_replace("/\D/", "", $_REQUEST['checkin']);
$checkout = preg_replace("/\D/", "", $_REQUEST['checkout']);

// 요금정보
$HotelPrice = new HotelPrice($db);
$HotelPrice.sitecd = $_COOKIE['sitecd'];
$HotelPrice.hotel = $hotel;
$hotel_info = $HotelPrice.get_hotel_info();

if ( $hotel_info['code_local'] == "HNL" ) { // 하와이 시작일자는 +7 일부터
  $HotelPrice.add_day = 7;
}

if (!empty($checkin)) {
  $startday = $checkin;
  if ( $checkout ) {
    $endday = $checkout;
  }else{
    $startday = $startday < "20200205" ? "20200205" : $startday;
    $endday = date("Ymd",strtotime($startday + " +1 days"));
  }
} else {
  $startday = date("Ymd",strtotime("+15 days",time()));
  $startday = $startday < "20200205" ? "20200205" : $startday;
  $endday    = date("Ymd",strtotime($startday + " +1 days"));
}

// 제휴 호텔 - 미키 최소 숙박 설정
$aff_hotel_infos = getAffiliateInfoBy($hotel);
if (count($aff_hotel_infos) == 1) {
  $miki_hotel = getMikiHotel($hotel);
  if (!empty($miki_hotel)) {
    $minimum_stay = $miki_hotel['minimum_stay'];

    if (!empty($minimum_stay)) {
      $endday    = date('Ymd',strtotime($startday + $minimum_stay + ' days'));
    }
  }
}

$gaps      = date_diff(new DateTime($startday), new DateTime($endday));
$skd_night = $gaps.days;

$HotelPrice.init();
$calendar   = $HotelPrice.get_calendar(); // 일자별 호텔,룸별 프로모션 룸별리스트

// 2019-05-21 스테이엔모어 체크가 없으면 리스트 삭제
if ( $hotel_info['check_staynmore'] != "1" ) {
  $calendar = array();
}

$javascript_promo  = rawurlencode(json_encode($calendar)); // 달력용 인코딩
$array_price_range = array();

$fg_calendar = false;
if ( count($calendar) > 0 ) {
  $fg_calendar = true;
  // 3구간 요금 테스트
  $temp = array();
  $temp2 = array(); // test
  for ($value in $calendar) {
    // $temp[] = $value['p'];

    $temp2[$value['p']]++;
  }
  $min_price = min($temp);
  $max_price = max($temp);
  $test_ptice = round(($max_price - $min_price) / 3);

  // $array_price_range[] = array( $min_price , $min_price+$test_ptice );
  if ( $test_ptice > 0 ) {
    // $array_price_range[] = array( $min_price+$test_ptice +1 , $max_price-$test_ptice );
    // $array_price_range[] = array( $max_price-$test_ptice +1 , $max_price );
  }
}

$array_price_range = rawurlencode(json_encode($array_price_range)); // 달력용 구간요금

// 시작일이 요금없을때
if ( !$calendar[$startday] ) {
  for ($c_value in array_keys($calendar)){
    if ( $startday < $c_value ) {
      $startday = date("Ymd",strtotime($c_value));
      $endday   = date("Ymd",strtotime($startday + " +1 days"));

      // 최저숙박이 1보다 클때 [기본숙박을 최저숙박일로]
      if ( $calendar[$startday]['m'] > 1 ) {
        $endday   = date("Ymd",strtotime($startday + $calendar[$startday]['m'] + " days"));
      }

      $gaps     = date_diff(new DateTime($startday), new DateTime($endday));
      $skd_night = $gaps.days;
      break;
    }
  }
}else{
  // 최저숙박이 1보다 클때 [기본숙박을 최저숙박일로]
  if ( $calendar[$startday]['m'] > 1 ) {
    $endday   = date("Ymd",strtotime($startday + $calendar[$startday]['m'] + " days"));
    // $endday   = date("Ymd",strtotime($startday." +1 days"));
    $gaps     = date_diff(new DateTime($startday), new DateTime($endday));
    $skd_night = $gaps.days;
  }
}

// 첫시작 로드 스크립트
// 요금이 없어도 p_calendar 1회 로드 [js 에서 요금이 없을?? 1회 실행을 못하고 있습니다.]
$onloadScript = 'p_calendar(".$hotel.")';

// 요금 class and

// 타이틀 포토 기존에 사용중인 쿼리
$titlephoto = mysql_fetch_array(mysql_query("select file from info_hotel_photo where hotel='' order by type limit 1"));
// $titlephoto = mysql_fetch_array(mysql_query("select file from info_hotel_photo where hotel='".$hotel."' order by type limit 1"));
$titlephoto = str_replace("%2F", "/", urlencode($titlephoto[0]));


window.onload = function () {
  created()
}
