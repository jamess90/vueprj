<template>
  <div>
    <div>hotelDetail Page</div>
    <table id='roomtable'>
      <tbody>
        <tr>
          <td colspan='4' class='content_area' style='border-top:3px solid #dedede'>
            <a href='javascript:call_info("6935");'>
<!--              <div class='fl-l mr-10' style='background: url("http://staynmore.com/photo/intro/notice_bg.jpg");background-size: cover; background-position: center center;width: 260px; height: 160px;position: relative;'>-->
              <div class='fl-l mr-10' >
                <div class='info-layer'>객실 정보</div>
              </div>
            </a>
            <span style='font-size:13px; font-weight:normal'>
              <p>
                <span style='font-size:24px; '> {{roomDetail.employee_name}} 😂 </span><br>
                <span class='font14 no-bold' style='background:#333333; color:#fff; padding:3px 10px; font-size:12px;;'>{{roomDetail.employee_name}}</span>
                <span class='font14 no-bold' style='background:#999; color:#fff; padding:3px 10px; font-size:12px;display:none;'><i class='fas fa-user fa-lg skyblue'></i> 성인 6명</span>
              </p>
    <!--<p style='line-height:120%; padding:20px; margin-left:20px'>-->
              <p style='padding-top:15px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2; /* 라인수 */-webkit-box-orient: vertical; word-wrap:break-word;  line-height: 1.2em; height: 2.4em;'>
                  클래식룸은 기본객실임에도 제법 큰 사이즈를 자랑합니다. 현대적인 럭셔리 디자인과 베트남 전통 스타일의 실내 장식이 조화를 이루고 있습니다. 흑백의 컬러조합과 그안에 기하학적인 실루엣의 인테리어가 옛스러운 전통사원이나 귀족 저택의 향수를 느끼게도 합니다. 발코니에서 한눈에 들어오는 아름다운 해변의 전경을 만끽해보세요.                                 </p>
              <p class='mt-5'></p>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InfoRight',
  // props: ['roomList', 'roomListsList'],
  data: function () {
    return {
      roomDetail: []
    }
  },
  created () {
    const id = this.$route.params.hotelNum
    console.log("hotel's ID = " + id)

    const baseURI = 'http://dummy.restapiexample.com/api/v1/employees'
    this.fn_callApi(baseURI, id)
  },
  methods: {
    fn_callApi (baseURI, id) {
      console.log('fn_callApi')
      this.$http.get(`${baseURI}`).then(result => {
        this.fn_callbackCallApi(result, id)
      })
    },
    fn_callbackCallApi (result, id) {
      this.roomList = result.data.data
      for (let room in this.roomList) {
        if (this.roomList[room].id === id) {
          this.roomDetail = this.roomList[room]
        }
      }
      console.log(this.roomDetail)
      console.log(this.$store.state.count)
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      console.log(this.$store.getters.doneTodos)
    }
  }
}

</script>
<style>

</style>
