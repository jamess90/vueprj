<template>
    <div slot="body">
      <link rel="stylesheet" href="./src/mobile/css/common.css">
<!--      <script type="text/css" src="mobile/css/common.css"></script>-->

      <!--      <div id="topwrap" style="height:88px; position: fixed">-->
<!--        <div style="position:relative;height:50px;width:100%;background-color:#b48664;border-bottom:3px solid #ce9972;">-->
<!--          <div class="div_banner" style="position:relative;height:50px;width:700px;margin:0px auto;overflow:hidden;text-align:center;">-->
<!--            <ul id="div_banner_list" style="margin:0px auto;padding:0px;width:8000px;">-->
<!--              <li><div class="div_banner_item">"인터컨티넨탈 다낭 선페닌슐라 리조트 " <span style="padding-left: 5px;">3월 할인</span></div></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="clear"></div>-->
<!--        <div id="navgation">-->
<!--&lt;!&ndash;          <div id="logo" onclick="location.href='/hotel/?hotel=306'"></div>&ndash;&gt;-->
<!--          <div id="menu">-->
<!--            <ul>-->
<!--              <li class="promo"><router-link to="/hotelonly" exact>호텔예약</router-link></li>-->
<!--&lt;!&ndash;              <li><a href="/hotel/mypage.php?hotel=306">예약확인</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;              <li><a href="/hotel/board.php?hotel=306&amp;ts=qna">온라인문의</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;              <li><a href="/hotel/board.php?hotel=306&amp;ts=qna_cop">기업/단체문의</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;              &lt;!&ndash; <li><a href="board.php?ts=faq&category=1&hotel=306">FAQ</a></li> &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;              <li style="cursor:pointer" onclick="window.open('https://admin8.kcp.co.kr/html/popup/thismonth/html/kcp_pop_up.html','','toolbars=no,scrollbars=yes,width=600,height=700')"><i class="fas fa-credit-card"></i> 신용카드 무이자할부</li>&ndash;&gt;-->
<!--&lt;!&ndash;              <li class="promo"><a href="board.php?hotel=306&amp;ts=event_list"><i class="fab fa-product-hunt"></i> 프로모션</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;              <li onclick="javascript:btnScroll.scrollControl.goTop();" id="morehotel" style="color:#fff; margin:0px 10px 0px 10px">다른호텔보기</li>&ndash;&gt;-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="clear"></div>-->
<!--        </div>-->
<!--      </div>-->
      <div id="wrap">
        <div id="gnb_head">
          <ul>
            <li><a href="../"><img src="./mobile/images/home.png"></a></li>
            <li onclick="gourl('https://m.staynmore.com')"><img src="./mobile/images/logo_new.png"></li>
            <li><img src="./mobile/images/menu.png" id="show_gnbmenu"></li>
          </ul>
        </div>
        <div class="clear"></div>
        <!-- <a href="./notice_info.php?no=64">
            <div style="height: 9vw;background: #b48664; color:#fff; border-bottom: 1vw solid #ce9972;text-align: center;font-size: 4vw;padding-top: 1.5vw;">
                4월 17일(수) 전화상담 업무 중지안내
            </div>
        </a> -->

        <div id="gnb_menu">
          <div id="gnb_inner">
            <div id="gnb_closebtn"><img src="/mobile/images/close.png"></div>
            <div id="title_area">로그인정보가 없습니다.</div>
            <div class="clear"></div>

            <div id="login_btn_area">
              <div class="white_solid_btn" onclick="gourl('/mypage.php');">예약확인</div>
              <div class="white_solid_btn" onclick="gourl('https://m.staynmore.com/login.php');">로그인</div>
            </div>

            <!-- 하위 카테고리 넘기는 페이지 -->
            <div id="category_main">
              <ul>
                <li><a href="javascript:void(0);" onclick="gourl('/category_sub.php');">여행지 전체보기</a></li>
                <li><a href="javascript:void(0);" onclick="gourl('/notice.php');">공지사항</a></li>
                <li><a href="javascript:void(0);" onclick="gourl('/customer.php');">고객센터</a></li>
                <!-- <li><a href="javascript:void(0);" onclick="gourl('https://m.staynmore.com/qna.php?str=aG90ZWw9NjUz');">질문과답변</a></li>-->
                <li><i class="fas fa-gift"></i><a href="#" data-toggle="modal" data-target="#myModal-top">신용카드 무이자할부</a></li>
                <li><a href="javascript:void(0);" onclick="gourl('/staynmore.php');">스테이앤모어 소개</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <router-view> </router-view>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn_setCount () {
      // eslint-disable-next-line no-return-assign
      return this.store.test = 'test'
    }
  }
}
</script>

<style>

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
