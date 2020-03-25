<template>
<!--  <div>-->
    <div slot="body">
      <div id="topwrap" style="height:88px;">
        <div style="position:relative;height:50px;width:100%;background-color:#b48664;border-bottom:3px solid #ce9972;">
          <div class="div_banner" style="position:relative;height:50px;width:700px;margin:0px auto;overflow:hidden;text-align:center;">
            <ul id="div_banner_list" style="margin:0px auto;padding:0px;width:8000px;">
              <li><div class="div_banner_item">"인터컨티넨탈 다낭 선페닌슐라 리조트 " <span style="padding-left: 5px;">3월 할인</span></div></li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
        <div id="navgation">
<!--          <div id="logo" onclick="location.href='/hotel/?hotel=306'"></div>-->
          <div id="menu">
            <ul>
              <li class="promo"><router-link to="/hotelonly">호텔예약</router-link></li>
<!--              <li><a href="/hotel/mypage.php?hotel=306">예약확인</a></li>-->
<!--              <li><a href="/hotel/board.php?hotel=306&amp;ts=qna">온라인문의</a></li>-->
<!--              <li><a href="/hotel/board.php?hotel=306&amp;ts=qna_cop">기업/단체문의</a></li>-->
<!--              &lt;!&ndash; <li><a href="board.php?ts=faq&category=1&hotel=306">FAQ</a></li> &ndash;&gt;-->
<!--              <li style="cursor:pointer" onclick="window.open('https://admin8.kcp.co.kr/html/popup/thismonth/html/kcp_pop_up.html','','toolbars=no,scrollbars=yes,width=600,height=700')"><i class="fas fa-credit-card"></i> 신용카드 무이자할부</li>-->
<!--              <li class="promo"><a href="board.php?hotel=306&amp;ts=event_list"><i class="fab fa-product-hunt"></i> 프로모션</a></li>-->
<!--              <li onclick="javascript:btnScroll.scrollControl.goTop();" id="morehotel" style="color:#fff; margin:0px 10px 0px 10px">다른호텔보기</li>-->
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div id="app" class="app">
        <router-view> </router-view>
      </div>
    </div>
<!--  </div>-->
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
