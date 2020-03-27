<template>
  <div id='info_right'>
    <br><br>
    <!--<img src='/_image/info/titlebar.png' align='absmiddle' class='titlebar'>--><b class='font20'>날짜별 객실요금확인</b>
    <span style='font-size:14px; margin-left:10px'>스테이앤모어의 모든 요금은 별도의 <u style='color:#bd7a27'>카드수수료가 발생하지 않습니다</u></span><br><br>
    <!-- 달력 -->
    <div id='data-input-area-y'></div>
    <div class='data_input_area' style='top: 0px;'>
      <div class='check_date_box click-cal-open'>
        <span class='font12'>체크인</span><span id='txt_check_in'>2020.04.03 (금)</span>
      </div>

      <div class='check_date_box click-cal-open'>
        <span class='font12'>체크아웃</span><span id='txt_check_out'>2020.04.04 (토)</span>
      </div>
      <div class='check_date_box night click-cal-open' id='txt_check_night'>1박 2일</div>
      <div class='calendar_wrap' style='display: none;'><!-- 달력위치 --><div class='price_range_area'><i class='fas fa-exclamation-circle' onclick='alert("일자별 객실당 예상 최저가입니다.")'></i><label class='p_0'></label><span>￦720,000 ~</span><label class='p_1'></label><span>￦797,001 ~</span><label class='p_2'></label><span>￦874,001 ~</span><label class='p_x'></label><span>등록요금 없음</span></div><div class='calendar_box' style='padding-top: 40px;'><a href='#' class='arrow arrow-left' style='margin-top: 40px;'>◀</a><a href='#' class='arrow arrow-right' style='margin-top: 40px;'>▶</a><div class='calendar_block'><div class='margin_wrap'><table id='c_table_202004'><tbody><tr><th class='title' colspan='7'>2020년 4월</th></tr><tr><th class='week'><span class='w0'>일</span></th><th class='week'>월</th><th class='week'>화</th><th class='week'>수</th><th class='week'>목</th><th class='week'>금</th><th class='week'><span class='w6'>토</span></th></tr><tr><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell' data-date='20200401' data-open='true'><div class='panel'>1<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200402' data-open='true'><div class='panel'>2<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell checked_cell' data-date='20200403' data-open='true'><div class='panel'>3<div class='promos'><label class='p_0'></label></div><div class='check_text chin' style='display: block;'>체크인</div><div class='check_text chout' style='display: none;'>체크아웃</div></div></td><td class='cell checked_cell' data-date='20200404' data-open='true'><div class='panel'>4<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout' style='display: block;'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200405' data-open='true'><div class='panel'>5<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200406' data-open='true'><div class='panel'>6<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200407' data-open='true'><div class='panel'>7<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200408' data-open='true'><div class='panel'>8<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200409' data-open='true'><div class='panel'>9<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200410' data-open='true'><div class='panel'>10<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200411' data-open='true'><div class='panel'>11<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200412' data-open='true'><div class='panel'>12<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200413' data-open='true'><div class='panel'>13<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200414' data-open='true'><div class='panel'>14<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200415' data-open='true'><div class='panel'>15<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200416' data-open='true'><div class='panel'>16<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200417' data-open='true'><div class='panel'>17<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200418' data-open='true'><div class='panel'>18<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200419' data-open='true'><div class='panel'>19<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200420' data-open='true'><div class='panel'>20<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200421' data-open='true'><div class='panel'>21<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200422' data-open='true'><div class='panel'>22<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200423' data-open='true'><div class='panel'>23<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200424' data-open='true'><div class='panel'>24<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200425' data-open='true'><div class='panel'>25<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200426' data-open='true'><div class='panel'>26<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200427' data-open='true'><div class='panel'>27<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200428' data-open='true'><div class='panel'>28<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200429' data-open='true'><div class='panel'>29<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200430' data-open='true'><div class='panel'>30<div class='promos'><label class='p_1'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td></tr></tbody></table></div></div><div class='calendar_block'><div class='margin_wrap'><table id='c_table_202005'><tbody><tr><th class='title' colspan='7'>2020년 5월</th></tr><tr><th class='week'><span class='w0'>일</span></th><th class='week'>월</th><th class='week'>화</th><th class='week'>수</th><th class='week'>목</th><th class='week'>금</th><th class='week'><span class='w6'>토</span></th></tr><tr><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell' data-date='20200501' data-open='true'><div class='panel'>1<div class='promos'><label class='p_1'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200502' data-open='true'><div class='panel'>2<div class='promos'><label class='p_1'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200503' data-open='true'><div class='panel'>3<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200504' data-open='true'><div class='panel'>4<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200505' data-open='true'><div class='panel'>5<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200506' data-open='true'><div class='panel'>6<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200507' data-open='true'><div class='panel'>7<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200508' data-open='true'><div class='panel'>8<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200509' data-open='true'><div class='panel'>9<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200510' data-open='true'><div class='panel'>10<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200511' data-open='true'><div class='panel'>11<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200512' data-open='true'><div class='panel'>12<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200513' data-open='true'><div class='panel'>13<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200514' data-open='true'><div class='panel'>14<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200515' data-open='true'><div class='panel'>15<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200516' data-open='true'><div class='panel'>16<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200517' data-open='true'><div class='panel'>17<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200518' data-open='true'><div class='panel'>18<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200519' data-open='true'><div class='panel'>19<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200520' data-open='true'><div class='panel'>20<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200521' data-open='true'><div class='panel'>21<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200522' data-open='true'><div class='panel'>22<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200523' data-open='true'><div class='panel'>23<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200524' data-open='true'><div class='panel'>24<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200525' data-open='true'><div class='panel'>25<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200526' data-open='true'><div class='panel'>26<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200527' data-open='true'><div class='panel'>27<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200528' data-open='true'><div class='panel'>28<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200529' data-open='true'><div class='panel'>29<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell' data-date='20200530' data-open='true'><div class='panel'>30<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td></tr><tr><td class='cell' data-date='20200531' data-open='true'><div class='panel'>31<div class='promos'><label class='p_0'></label></div><div class='check_text chin'>체크인</div><div class='check_text chout'>체크아웃</div></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td><td class='cell'><div class='panel'></div></td></tr></tbody></table></div></div><div class='calendar_bottom'><span class='click-cal-close'>▲</span></div></div></div>
    </div>
    <div id='rcontainer'>
      <div id='price'>            <div style='padding:15px; background:#ffeeee; border:2px solid #ff6666; font-size: 12px; border-radius: 5px;'>
        <!-- <dl type='circle'>
            <li><b class='font16'>예약전 주의사항</b></li>
            <li>* 실시간 예약 확정이 아니며 예약 접수 후 영업일 기준 48시간 이내에 확정 유무를 안내해드립니다.</li>
            <li>* 결제요청서 발송 후 당일 17시까지 결제 완료시 호텔수배가 완료되며, 미결제 시 자동으로 예약이 취소됩니다.</li>
            <li>* 예약해주신 룸 타입이 아닌 상위/하위 카테고리의 객실이 가능한 경우 변경 제안서를 발송해드립니다.</li>
            <li>* 만실 등의 사유로 예약이 불가할 경우 예약은 자동 취소 및 환불 처리됩니다. (현금결제의 경우 3-7일 정도 소요됩니다.)</li>
            <li>* 취소수수료는 예약 시 안내된 취소 규정에 따르며, 투숙 기간 또는 프로모션 적용에 따라 상이하니 주의 부탁드립니다.</li>
            <li>* 호텔비 및 추가사항의 비용은 예약 확정 시 요금 기준으로 적용되며 확정 이후 프로모션, 환불 등으로 인한 차액은 환불이 불가합니다.</li>
            <li>* 진행사항 (확정/취소/환불/제안서 등..) 안내는 카카오톡,SMS,이메일의 방법으로 안내드립니다.</li>
        </dl> -->
        <b class='font16'>예약전 주의사항</b><br>
        예약전 주의사항            </div>
        <br>
        <div id='solidbox'>
          * 본 호텔요금에는 <b><u style='color:#bd7a27'>세금 및 서비스 요금(Taxes, Service Fees Included), 카드 수수료</u></b>가 모두 포함되어 있습니다.<br><hr>

          [호텔규정 및 안내사항]<br>
          * 호텔비에 기준인원별 조식이 포함되어 있습니다. <br>
          * 일반룸&amp;1베드룸=성인2인기준 , 2베드룸 = 성인4인기준, 3베드룸 = 성인6인기준<br>
          * 아동나이기준 6-11세, 만 12세 이상 아동은 성인으로 구분<br>
          * 기준인원외 추가동반 투숙인원은, 인원추가비용이 발생합니다.  <br>
          * 다낭 군내선 공항 라운지 이용서비스가 포함<br>
          * 침대타입은 랜덤이며, 요청시 가능할 경우만 반영됩니다. (사전확정불가)<br>
          * 클래식,손트라, 클래식 테라스 스위트, 손트라 테라스 스위트 제외 모든룸타입 클럽 라운지 이용가능<br>
          * 체크인 14:00 - 체크아웃 12:00<br>
          <br>
          # 최대투숙 가능인원 <br>
          - 일반룸&amp;1베드룸 : 최대 성인2인+아동1인 또는 성인3인<br>
          - 2베드룸 : 최대 성인4인+아동2인 또는 성인6인<br>
          - 3베드룸 : 최대 성인6인+아동3인 또는 성인8인<br>
          <br>
          # 클럽라운지 베네핏 세부사항 (만 11세 이하 아동은 입장이 불가합니다)<br>
          - 전용 라운지에서 체크인 진행<br>
          - 버틀러 서비스<br>
          - 프라이빗 비치 이용가능<br>
          - 공항-호텔간의 무료 리무진 서비스 이용가능 (왕복)<br>
          └ 바우처를 받아보신후, 바우처를 첨부하고 항공스케줄을 기재하여 호텔로 직접 예약 (72시간 이전까지만 예약가능)<br>
          └ 호이안 및 거리가 먼 호텔들은 추가비용이 발생합니다. (추가금 약40$)<br>
          └ 예약가능 이메일주소 : reservations.icdanang@ihg.com<br>
          - 다낭 국제공항의 국내선터미널 도착&amp;출발 라운지 이용가능<br>
          - 조식 선택이용가능 (Sun Peninsula Club Lounge OR Citron)<br>
          - 클럽 인터컨티넨탈 애프터눈티 (14:30~16:30)<br>
          - 라운지에서 칵테일 &amp; 카나페 제공 (17:30~19:30)<br>
          - 24시간 무알콜음료와 가벼운 다과 제공<br>
          - 무알콜 음료 및 맥주 미니바 제공 (스낵 제외)<br>
          - 객실내 시내전화 무료 제공            </div><br>

        <form id='searchForm' name='searchForm' method='POST'>
          <input type='hidden' id='hotel' name='hotel' value='306'>
          <input type='hidden' id='startday' name='startday' value='20200403'>
          <input type='hidden' id='endday' name='endday' value='20200404'>
          <input type='hidden' id='room' name='room' value=''>
          <input type='hidden' id='promo' name='promo' value=''>
          <input type='hidden' id='check_hotel' name='check_hotel' value=''>
          <input type='hidden' name='latecheckout' value=''>
          <div id='chkinout' style='border:0px;'>
            <table id='selectday' style='border-collapse:collapse;'>
              <tbody><tr>
                <td colspan='4' class='pricelate' style='display: none;'>
                  <span class='font13'>* 레이트 체크아웃 (Late Check Out) 규정</span> <br>
                  <span class='notice'>
                                1. 레이트 체크아웃 확정 여부는 객실 확정 시점과 다를 수 있으며 호텔 객실 상황에 따라 불가할 수 있습니다.<br>
                                2. 레이트 체크아웃의 확정 여부와 별도로 숙박기간에 대한 취소수수료는 호텔 취소 규정에 따라 부과됩니다.<br>
                                3. 호텔 객실사정에 따라 레이트 체크아웃 불가시 레이트 체크아웃 결제 금액분은 환불됩니다.<br>
                                4. 무료 레이트 체크아웃이 포함된 프로모션 적용 예약이나 레이트 체크아웃이 포함된 패키지상품은 추가하지 않으셔도 됩니다.<br>
                                5. 통상 할인 프로모션이 반영되지 않은 객실 1박 요금의 50%입니다.
                            </span>
                </td>
              </tr>
              </tbody></table>
          </div>
        </form>
        <table id='roomtable'>
          <tbody>
            <tr v-for="room in roomList" v-bind:key="room.id">
              <td colspan='4' class='content_area' style='border-top:3px solid #dedede'>
<!--                <a href='javascript:call_info("6935");'>-->
<!--                  <div class='fl-l mr-10' style='background: url("http://staynmore.com/photo/intro/notice_bg.jpg");background-size: cover; background-position: center center;width: 260px; height: 160px;position: relative;'>-->
<!--                    <div class='info-layer'>객실 정보</div>-->
<!--                  </div>-->
<!--                </a>-->
                <span style='font-size:13px; font-weight:normal'>
                    <p>
                      <a v-on:click="fn_clickHotelNm(room.id)"><span style='font-size:24px; '> {{room.employee_name}} 😂 </span></a><br>
                    <span class='font14 no-bold' style='background:#333333; color:#fff; padding:3px 10px; font-size:12px;;'>{{room.employee_name}}</span>
<!--                    <span class='font14 no-bold' style='background:#999; color:#fff; padding:3px 10px; font-size:12px;display:none;'><i class='fas fa-user fa-lg skyblue'></i> 성인 6명</span>-->
                    </p>
<!--<p style='line-height:120%; padding:20px; margin-left:20px'>-->
<!--                    <p style='padding-top:15px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2; /* 라인수 */-webkit-box-orient: vertical; word-wrap:break-word;  line-height: 1.2em; height: 2.4em;'>-->
<!--                        클래식룸은 기본객실임에도 제법 큰 사이즈를 자랑합니다. 현대적인 럭셔리 디자인과 베트남 전통 스타일의 실내 장식이 조화를 이루고 있습니다. 흑백의 컬러조합과 그안에 기하학적인 실루엣의 인테리어가 옛스러운 전통사원이나 귀족 저택의 향수를 느끼게도 합니다. 발코니에서 한눈에 들어오는 아름다운 해변의 전경을 만끽해보세요.                                 </p>-->
<!--                    <p class='mt-5'></p>-->
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="blog2_paginate">
          <strong class="blind" style="margin-left: 10px;">이전</strong>
          <span v-for="(page,index) in roomListsList" v-bind:key="index">
            <span v-if="index === currentPageNum">
              <strong class="page pcol3 _goPageTop _param(1)" style="margin-left: 10px;">{{index + 1}}<i class="aline pcol2"></i></strong>
            </span>
            <span v-else>
              <a href="#" class="page pcol2 _goPageTop _param(2)" v-on:click="fn_clickPageNum(index)" style="margin-left: 10px;">{{index + 1}}<i class="aline"></i></a>
            </span>
          </span>
          <a href="#" class="next pcol2 _goPageTop _param(11) aggregate_click_delegate" alt="11">다음<i class="icon"></i></a>
        </div>
<!--        <div class="blog2_paginate">-->
<!--          <strong class="blind">페이지 이동하기</strong>-->
<!--          <strong class="page pcol3 _goPageTop _param(1)">1<i class="aline pcol2"></i></strong>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(2)">2<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(3)">3<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(4)">4<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(5)">5<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(6)">6<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(7)">7<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(8)">8<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(9)">9<i class="aline"></i></a>-->
<!--          <a href="#" class="page pcol2 _goPageTop _param(10)">10<i class="aline"></i></a>-->
<!--          <a href="#" class="next pcol2 _goPageTop _param(11) aggregate_click_delegate" alt="11">다음<span class="blind">페이지로 이동</span><i class="icon"></i></a>-->
<!--        </div>-->
        <!--<img src='/_image/info/titlebar.png' align='absmiddle' class='titlebar'>--><b class='font20'>취소수수료 안내</b><br>
        <div id='calnotice'><b>등록된 취소수수료가 없습니다. 결제전 취소 수수료에 대하여 문의 바랍니다.</b></div>
        <br>

<!--        <div id='solidbox'>-->
<!--          <b class='font14'>Extra Bed &amp; PickUp</b> <input type='button' value='View' onclick='view_optionlist();' class='cancelmini'><br>-->
<!--          <table id='rsvntable2' class='optionbox'>-->
<!--            <tbody><tr><th>항목</th><th>성인/대당요금</th><th>아동요금</th></tr>-->
<!--            </tbody></table>-->
<!--        </div>-->
        <br>
      </div>
    </div>
    <div class='clear'></div>
    <br>
  </div>
</template>
<script>
export default {
  name: 'InfoRight',
  // props: ['roomList', 'roomListsList'],
  data: function () {
    return {
      roomListsList: [],
      roomList: [],
      pageCnt: 0,
      currentPageNum: 0,
      currentPagesRoomCnt: 0,
      roomCnt: 0,
      PAGE_SIZE: 10
    }
  },
  created () {
    const baseURI = 'http://dummy.restapiexample.com/api/v1/employees'
    this.fn_callApi(baseURI)
  },
  methods: {
    fn_callApi (baseURI) {
      console.log('fn_callApi')
      this.$http.get(`${baseURI}`).then(result => {
        this.fn_callbackCallApi(result)
      })
    },
    fn_callbackCallApi (result) {
      this.roomList = result.data.data
      this.roomCnt = this.roomList.length
      this.pageCnt = parseInt(this.roomCnt / this.PAGE_SIZE) + 1

      for (let i = 1; i < this.pageCnt; i++) {
        let tempArr = this.roomList.splice(0, 10)
        this.roomListsList.push(tempArr)
      }
      this.roomListsList.push(this.roomList)
      this.currentPagesRoomCnt = this.roomListsList[this.currentPageNum].length
      this.roomList = this.roomListsList[0]

      console.log(this.roomList)
    },
    jAlert (data) {
      console.log(data)
      alert(data)
    },
    fn_clickPageNum (num) {
      this.roomList = this.roomListsList[num]
      this.currentPageNum = num
      // console.log('=== Vuex - store 사용 테스트 ===')
      // console.log('store.state.count = ' + this.$store.state.count)
      // console.log('call increment')
      // this.$store.commit('increment')
      // console.log('store.state.count = ' + this.$store.state.count)
      console.log(this.$store.getters.doneTodos)
    },
    fn_clickHotelNm (id) {
      this.$router.push('hotelDetail/hotelNum/' + id)
      // this.$router.push({name: 'hotelNum', params: {'hotelNum': id}})
    }
  }
}

</script>
<style>
</style>
