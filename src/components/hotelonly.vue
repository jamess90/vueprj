<template>
  <div class="hello">
    <div>
<!--      <head>-->
<!--        <meta charset="utf-8">-->
<!--        <meta name="viewport" content="width=device-width, initial-scale=1">-->
<!--        <title>jQuery UI Datepicker - Default functionality</title>-->
<!--        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">-->
<!--        <link rel="stylesheet" href="/resources/demos/style.css">-->
<!--  &lt;!&ndash;      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>&ndash;&gt;-->
<!--  &lt;!&ndash;      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>&ndash;&gt;-->
<!--  &lt;!&ndash;      <script src="./src/js/hotelonly.js" type="text/javascript"></script>&ndash;&gt;-->
<!--      </head>-->
      <body>
      <div id="subvisual">
<!--        <div id="img" style="background:url('./src/assets/logo.png') center no-repeat;background-size:cover;">-->
          <div id="container2">
            <div id="lefttext">
              <div class="top">― ― InterContinental Danang Sun Peninsula Resort ― <!--<?=stripslashes($hotelname_e)?>--> ―</div>
              <div class="bottom"> 인터컨티넨탈 다낭 선페닌슐라 리조트 <!--<?=$hotelname?>--></div>
            </div>
            <div id="righttext">
            </div>
          </div>
<!--        </div>-->
      </div>
      <div class="clear"></div>
      <!--  <?include "_inc/middle_menu.php";?>-->
      <div id="infowrap">
        <input type="hidden" name="hotel" id="hotel" value="<?=$hotel?>" />
        <input type="hidden" name="local" id="local" value="<?=$local?>" />
        <input type="hidden" id="input_check_in" value="<?=$startday?>">
        <input type="hidden" id="input_check_out" value="<?=$endday?>">
        <form id="affiliate_search_form"></form>
        <div id="container">
  <!--      <div>-->
          <div id="info_left">
            <InfoLeft/>
            <!--        <?include "leftmenu.php";?>-->
          </div>
          <div id="info_right">
            <InfoRight/>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <br/><br/>
      <div id="div_info_hotel"></div>
      <div id="modal-info-hotel" class="modal"></div>
    </body>
    </div>
    <footer>
      <HotelFooter/>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue'
import InfoLeft from './infoLeft'
import InfoRight from './infoRight'
import HotelFooter from './hotelFooter'
import axios from 'axios'
// import $ from 'jquery'

Vue.prototype.$http = axios

export default {
  name: 'HotelOnly',
  components: {InfoLeft, InfoRight, HotelFooter, axios}
  // components: {InfoLeft, InfoRight, HotelFooter, $, axios}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#container #info_left {float:left;width:200px;margin:0 auto;margin-right:20px; padding:0;padding:15px 0 0 0;}
#container #info_right {float:right;width:760px;margin:0 auto;padding:0;}
#container #info_right #right_contents {width:760px;margin:0 auto;padding:0;}
#container #info_right .title {font-family:'Lora', 'Noto Sans Korean'}
#container #info_right #right_contents .right_contents_title {padding:30px 0 10px 0;}
#container #info_right .solidbox_white {width:760px; margin:0 auto; margin-top:10px; margin-bottom:20px; padding:15px; border:1px dashed #ccc; background:#fff; }
#container #info_right .photolab {width:760px; margin:0 auto; border:1px solid #f0f0f0; background:#ccc; }
#bottomwrap2 {width:100%; padding:0; margin:0 auto; background:#333; color:#fff;line-height:1.6;  position:absolute; bottom:0; }
#bottomwrap2 #copyright {width:1000px; height:30px; padding:0; margin:0 auto; color:#afafaf; border-top:1px solid #494949; border-bottom:1px solid #494949;}
#bottomwrap2 #copyright #left {float:left;width:900px; padding:5px; margin:0 auto;}
#bottomwrap2 #copyright #right {float:right;width:50px; padding:5px; margin:0;cursor:pointer;}
#bottomwrap2 #copyright a {color:#ccc;}
#bottomwrap2 #copyright .saibar {color:#ccc; margin-left:20px; margin-right:20px;}
#bottomwrap2 #bottom {width:1000px; padding:20px; margin:0 auto; padding-bottom:40px; color:#afafaf; }
#bottomwrap2 #bottom  a {color:#ccc;}

</style>
