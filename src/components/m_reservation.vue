<template>
  <div>
    <div id="booking">
      <div id="hotel-nav" class="txt-center">
        <a href="http://m.staynmore.com/hotel_list.php?local=LON">런던</a> &gt; <a href="http://m.staynmore.com/hotel.php?local=LON&amp;hotel=653">두바이</a>        </div>

      <div class="calendar_info_wrap">
        <ul>
          <li><span class="b"></span> 보너스나잇</li>
          <li><span class="s"></span> 특가할인 </li>
          <li><span class="c"></span> 연박할인</li>
          <li><span class="e"></span> 얼리버드할인 </li>
          <li><span class="w"></span> 대기</li>
        </ul>
      </div>
      <hr>

      <!-- search start -->
      <form id="affiliate_search_form"><input type="hidden" id="local" name="local" value="LON"><input type="hidden" id="hotel" name="hotel" value="653"><input type="hidden" name="check_in" value="2020-04-11"><input type="hidden" name="check_out" value="2020-04-12"><input type="hidden" name="booking_code"><input type="hidden" name="total_price"><input type="hidden" name="total_krw_price"><input type="hidden" name="deadline"><input type="hidden" name="room_type_code"><input type="hidden" name="room_type"><input type="hidden" name="affiliate_type"><input type="hidden" name="affiliate_hotel_id"><input type="hidden" name="rooms[0][room_count]" value="1"><input type="hidden" name="rooms[0][adult_count]" value="2"><input type="hidden" name="total_child_count" value="0"><input type="hidden" name="total_adult_count" value="2"></form>
      <form id="searchForm" name="searchForm" method="POST">
<!--      <input type="hidden" id="local" name="local" value="LON">-->
<!--      <input type="hidden" id="hotel" name="hotel" value="653">-->
      <input type="hidden" id="startday" name="startday" value="20200411">
      <input type="hidden" id="endday" name="endday" value="20200412">

      <input type="hidden" id="room" name="room" value="">
      <input type="hidden" id="promo" name="promo" value="">

      <input type="hidden" id="check_hotel" name="check_hotel" value="">
      <input type="hidden" name="adult_count">

      <div class="search_wrap">
        <div class="click-cal-open">
          <div class="date_wrap">
            <b class="title">체크인</b>
            <span class="check-in-data">2020.04.11</span>
          </div>
          <div class="date_info">
            <div class="text check-range-data">1박2일</div>
          </div>
          <div class="date_wrap">
            <b class="title">체크아웃</b>
            <span class="check-out-data">2020.04.12</span>
          </div>
        </div>
        <div id="room_info">
          <div class="room" style="float: left; margin: 20px 0 10px 0; width: 100%;">
            <div style="display: inline-block">
              <span class="font12">성인</span>
              <button type="button" onsubmit="return false" id="adultMinus" class="personButton">-</button>
              <span class="adult_count" data-adult-count="2">2</span>
              <button type="button" onsubmit="return false" id="adultPlus" class="personButton">+</button>
            </div>
            <div style="display: inline-block;margin-left: 24px;" class="children_infos">
              <span class="font12">아동</span>
              <button type="button" onsubmit="return false" id="childMinus" class="personButton">-</button>
              <span class="child_count">0</span>
              <button type="button" onsubmit="return false" id="childPlus" class="personButton">+</button>
            </div>
            <div class="children_ages" style="margin-top: 10px"></div>
          </div>
        </div>

        <!-- <div class="input_wrap">
            <div class="input_item">
                <select name="room_c" id="room_c">
                                                    <option value="1" selected>1 객실</option>
                                                    <option value="2" >2 객실</option>
                                                    <option value="3" >3 객실</option>
                                                    <option value="4" >4 객실</option>
                                                    <option value="5" >5 객실</option>
                                                    <option value="6" >6 객실</option>
                                                    <option value="7" >7 객실</option>
                                                    <option value="8" >8 객실</option>
                                                    <option value="9" >9 객실</option>
                                                    <option value="10" >10 객실</option>
                                            </select>
            </div>
            <div class="input_item">
                <select name="adt_c" id="adt_c">
                                                    <option value="1" >1 성인</option>
                                                    <option value="2" selected>2 성인</option>
                                                    <option value="3" >3 성인</option>
                                                    <option value="4" >4 성인</option>
                                                    <option value="5" >5 성인</option>
                                                    <option value="6" >6 성인</option>
                                                    <option value="7" >7 성인</option>
                                                    <option value="8" >8 성인</option>
                                                    <option value="9" >9 성인</option>
                                                    <option value="10" >10 성인</option>
                                            </select>
            </div>
            <div class="input_item">
                <select name="chd_c" id="chd_c">
                                                    <option value="0" selected>0 아동</option>
                                                    <option value="1" >1 아동</option>
                                                    <option value="2" >2 아동</option>
                                                    <option value="3" >3 아동</option>
                                                    <option value="4" >4 아동</option>
                                                    <option value="5" >5 아동</option>
                                                    <option value="6" >6 아동</option>
                                                    <option value="7" >7 아동</option>
                                                    <option value="8" >8 아동</option>
                                                    <option value="9" >9 아동</option>
                                                    <option value="10" >10 아동</option>
                                            </select>
            </div>
        </div> -->

        <button type="button" class="search" onclick="form_submit()" style="border: 0px;
    background-color: #1d1d1d;
    color: #fff;
    width: 100%;
    margin-top: 5vw;
    padding: 2vw;
    font-size: 5vw;">요금검색</button>
      </div>

    </form>
    <hr>

    <div class="txt-center" style="width:100%;padding:3vw 5vw 3vw 5vw;">
      <button type="button" class="s-btn-white font-35vw mr-10" style="width:47%;" onclick="toggle_pop('agree_pop_1')">호텔규정 및 안내사항</button>

      <button type="button" class="s-btn-white font-35vw" style="width:47%;" onclick="toggle_pop('agree_pop_2')">예약 전 주의사항</button>
    </div>
    <hr>

    <!-- affiliate room list -->
    <div class="block_wrap" style="padding: 0 5.5vw;">
      <h3 class="title">
        제휴상품
        <span style="font-size: 11px; margin: 0 5px; color: #167ec4;">(세금/봉사료 포함)</span>
        <span>
                        <button type="button" class="s-btn-white font-25vw" style="width: 42%; padding: 0; margin: 6px; vertical-align: middle; letter-spacing: 0" onclick="toggle_pop('affiliate_agree_pop')">제휴상품 예약전 주의사항</button>
                    </span>
      </h3>
    </div>
    <div id="loading" style="display: none;">
      <img id="spinner" src="/mobile/images/spinner.gif">
    </div>
    </div>
    <div id="wrap">
<!--      <style>-->
<!--        #wrap p  { !important margin-bottom:0px; }-->
<!--      </style>-->
      <div id="bottom_wrap">
        <div id="bottom">
          <div class="full-btn-bottom mb-10">
            <p style="color: #fff !important; font-size: 3vw !important; ">모든 문의는 온라인 예약접수 후 상담이 가능합니다.</p>
            <p style="color: #fff !important; font-size: 3vw !important; ">상담시간 : 오전:10:00~12:30, 오후:14:00~16:00 <br>(토,일,공휴일 휴무)</p>
          </div>

          <div class="white_solid_box" onclick="location.href='tel:1544-8241';"><i class="fa fa-phone fa-lg"></i> 1544-8241 </div><div class="white_solid_box2" onclick="location.href='privacy.php'">개인정보보호방침</div><br>
          <div class="mb-10">
            <p>상호명 : (주)트래블멤버스 | 대표 : 임 진욱</p>
            <p>주소 : 서울시 중구 서소문로11길 50 신아빌딩 704호</p>
            <p>사업자등록번호 : 529-87-00026</p>
            <p>통신판매업신고번호 :  2017-서울중구-1429</p>
            <p>관광사업등록 : 제2017-000116호 </p>
            <p>제 100-000-2019 0398 7819호 (서울보증보험</p>
            <p>고객센터 : 1544-8241</p>

            <p>개인정보관리 : 안병열</p>
          </div>
          <span class="copyright">CopyRights(c)2015 Staynmore All Rights Reserved.</span>
          <div class="mt-5">
            <button onclick="location.href='http://staynmore.com/index.php?pccheck=topc&amp;hotel='" class="s-btn" style="border:1px solid #fff;">PC 버전</button>
          </div>
        </div>
      </div>
    </div>
    <div id="bottom_btn">
      <ul>
        <li><a href="javascript:history.back();"><img src="../mobile/images/bottom_left.png"></a></li>
        <li><div class="bookbtn_hide">예약하기</div></li>
        <li id="top-btn"><a href="javascript:;"><img src="../mobile/images/bottom_top.png"></a></li>
      </ul>
      <div id="bookbox">
        <div class="mb-10">호텔을 먼저 선택해 주세요.</div>
        <select id="footer_local" name="footer_local">
          <option value="">지역선택</option>
          <option value="HNL">하와이</option>
          <option value="PQC">푸꾸옥</option>
          <option value="CXR">나트랑</option>
          <option value="DAD">다낭</option>
          <option value="AX3">호이안</option>
          <option value="MUI">무이네</option>
          <option value="HAN">하노이</option>
          <option value="SGN">호치민</option>
          <option value="SPN">사이판</option>
          <option value="GUM">괌</option>
          <option value="DPS">발리</option>
          <option value="BKK">방콕</option>
          <option value="KHL">카오락</option>
          <option value="HKT">푸켓</option>
          <option value="USM">코사무이</option>
          <option value="KBV">끄라비</option>
          <option value="CNX">치앙마이</option>
          <option value="PTY">파타야</option>
          <option value="HUA">후아힌</option>
          <option value="BKI">코타키나발루</option>
          <option value="KUL">쿠알라룸프루</option>
          <option value="CCN">칸쿤2</option>
          <option value="CUN">칸쿤</option>
          <option value="LON" selected="">런던</option>
          <option value="BER">베를린</option>
          <option value="ROR">팔라우</option>
          <option value="HLT">해밀턴 아일랜드</option>
          <option value="SYD">시드니</option>
          <option value="HKG">홍콩</option>
          <option value="MFM">마카오</option>
          <option value="TAO">칭다오</option>
          <option value="SHA">상해</option>
          <option value="SYX">하이난</option>
          <option value="OKA">오키나와</option>
          <option value="UKY">교토</option>
          <option value="NRT">도쿄</option>
          <option value="KMI">미야자키</option>
          <option value="CEB">세부</option>
          <option value="KLO">보라카이</option>
          <option value="TAG">보홀</option>
          <option value="MNL">마닐라</option>
          <option value="ELD">엘니도</option>
          <option value="REP">시엠립</option>
          <option value="PAR">파리</option>
          <option value="EVI">에비앙 레 뱅</option>
          <option value="IBZ">이비자</option>
          <option value="BRU">브루나이</option>
          <option value="TPE">타이페이</option>
          <option value="SIN">싱가포르</option>
          <option value="MAL">몰디브</option>
          <option value="DXB">두바이</option>
        </select>
        <br><br>

        <select id="footer_hotel" name="footer_hotel"><option value="">호텔선택</option><option value="652">베스트 웨스턴</option><option value="653">두바이</option></select>
      </div>
    </div>
  </div>
</template>

<script>
// $(document).ready(function () {
//   $('#show_gnbmenu').click(function () {
//     $('#gnb_menu').toggle('slide', {direction: 'right'}, 400)
//   })
//   $('#gnb_closebtn').click(function () {
//     $('#gnb_menu').toggle('slide', {direction: 'right'}, 400)
//   })
//   $(document).on('focus', 'input, textarea', function () {
//     $('#bottom_btn').hide()
//   }) // 가상키보드 올라오면 버튼 숨기기
//   $(document).on('blur', 'input, textarea', function () {
//     $('#bottom_btn').show()
//   })
//   $('.bookbtn').click(function () { // 호텔값 없으면 셀렉트 박스 올리기
//     var hotel = '653'
//     if (hotel != '') {
//       document.location.href = 'https://m.staynmore.com/hotel_fare.php?hotel=' + hotel
//     } else {
//       $('#bookbox').toggle('slide', {direction: 'down'}, 400)
//     }
//   })
// })
export default{

}
</script>

<style>

</style>
