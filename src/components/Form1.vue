<script>
export default {
  name: "Form1",
  data() {
    return {
      popup: false,
    };
  },
  methods: {
    check() {
      this.popup = !this.popup;
    },
  },
};
</script>

<template>
  <div
    class="pop-up"
    :class="{ popup_open: this.popup, popup_close: !this.popup }"
  >
    <div>
      <div><button @click="check()">x</button></div>

      <h1>개인(신용)정보수집,이용동의서</h1>
      <p>
        주식회사 상상대부중개 귀중 귀사와의 (금융)거래와 관련하여 귀사가 본인의
        개인(신용)정보를 수집ㆍ이용하고자 하는 경우에는 「개인정보 보호법」
        제15조, 제22조 및 제24조, 「정보통신망 이용촉진 및 정보보호 등에 관한
        법률」제22조 및 제26조의2, 「신용정보의 이용 및 보호에 관한 법률」
        제33조 및 제34조에 따라 동의를 얻어야 합니다. 이에 본인은 귀사가 아래의
        내용과 같이 본인의 개인(신용)정보를 수집ㆍ이용하는데 동의합니다.
      </p>
      <h2>1. 개인(신용)정보의 필수적인 수집/시용에 관한 사항</h2>
      <p>
        개인(신용)정보의 수집ㆍ이용 목적 - 대출상담 및 안내, 대출가능여부 및
        한도 확인을 위한 상담사무, 본인여부 확인 등
      </p>
      <h2>2. 수집ㆍ이용할 개인(신용)정보의 항목</h2>
      <p>
        - 개인식별정보[성명, 생년월일, 성별, (휴대)전화번호, 주소, 직업(직장명,
        주소, 전화번호, 사업자번호), 계좌번호, 거래은행]
      </p>
      <p>
        - 공공기관정보[개인회생,파산면책,채무불이행등재등 법원의 재판 결정정보]
      </p>
      <p>- 담보물권 정보 등 기타사항</p>
      <p>
        - 웹사이트 이용 생성정보 : 이용자의 브라우저 종류 및 OS, 검색어, 서비스
        이용기록 (접속IP정보,접속시간,접속로그)
      </p>

      <h2>3. 개인(신용)정보의 보유ㆍ처리 기간</h2>
      <p>- 수집ㆍ이용 동의일로부터 목적달성 시점까지 보유 이용됩니다.</p>
      <p>
        -단, 이용목적 달성 후에는 금융사고 조사, 분쟁 해결, 민원처리, 법령상
        의무이행을 위하여만 보유•이용됩니다.
      </p>
      <h2>4.영리 목적의 광고/정보 수신 동의</h2>
      <p>
        - 정보통신망 법에 따른 새로운 정보의 업데이트나 이벤트소식 광고성 내용
        등을 문자,이메일,전화 등의 방법으로 제공하기 위해 사용합니다.
      </p>
    </div>
  </div>
  <section>
    <form>
      <span>
        <h3 style="color: #08959f; margin-right: 6px">신용도 영향없는</h3>
        <h3 style="color: #f47500">한도확인</h3></span
      >
      <div>
        <span
          ><p>성함</p>
          <input type="text"
        /></span>
        <span
          ><p>연락처</p>
          <input type="text"
        /></span>
      </div>

      <section>
        <div>
          <h3 style="padding: 0; margin: 0" @click="check()">이용약관보기</h3>
        </div>

        <div>
          <span>
            <p>동의(광고성 정보동의 포함)</p>
            <input type="radio" />
          </span>
        </div>

        <div>
          <p>필수적 동의사항</p>
          <span>
            <input type="radio" />
            <p>동의</p>
          </span>
          <span>
            <input type="radio" />
            <p>미동의</p>
          </span>
        </div>
        <div>
          <p>선택적 동의사항</p>
          <span>
            <input type="radio" />
            <p>동의</p>
          </span>
          <span>
            <input type="radio" />
            <p>미동의</p>
          </span>
        </div>
        <div>
          <p>광고성정보동의사항</p>
          <span>
            <input type="radio" />
            <p>동의</p>
          </span>
          <span>
            <input type="radio" />
            <p>미동의</p>
          </span>
        </div>
      </section>
      <input type="button" value="상담신청하기" />
    </form>
  </section>
</template>

<style scoped lang="sass">




.pop-up
  background-color: white
  position: sticky
  top: 10%
  left: 1%
  width: 90%
  height: 70vh
  z-index: 800
  border: 5px solid #06777f
  padding-inline: 2%
  padding-block: 2%
  overflow: scroll
  justify-content: center
  padding-block: 1%
  button
    margin-top: 5%
    background: white
    color: #06777f
    border: 2px solid  #06777f
    cursor: pointer
  section
    background-color: white
    width: 80%
    border: 2px solid #06777f
    padding: 2%

    div
      width: 100%
      display: flex
      flex-direction: column
    h1
      font-size: 16px
    h2
      font-size: 14px
    p
      font-size: 12px

.popup_open
  display: flex
.popup_close
  display: none

section
    background-color: #e0eeed
    padding: 10%
form
    background-color: white
    display: flex
    flex-direction: column
    align-items: center
    padding-block: 5%
    padding-inline: 10%

    span
      display: flex
      h3
        font-size: 24px
        font-weight: 700
    div
      background: white

      span
        display: flex
        align-items: center
        justify-content: space-between
        p
          font-size: 14px
          margin-right: 5px

        input[type="text"]
          width: 120px
    section
        margin-top: 5%
        padding:0
        div
          display: flex
          align-items: center
          p
            font-size: 14px
            padding: 0
            margin:0

          h3
            font-size: 16px
            font-weight: 500
          span
            display: flex
            align-items: center
            justify-content: center
            padding-block: 1%
            p

              font-size: 14px
              padding: 0
              margin: 0

    input[type="button"]
        background-color: #08959f
        color: white
        border: none
        padding-block: 5%
        padding-inline: 20%
        margin-top: 10%
        margin-bottom: 5%
        font-size: 14px
        font-weight: 700
        cursor: pointer
        &:hover
          background-color: #f47500



@media (min-width: 1024px)
  form
      background-color: white
      display: flex
      flex-direction: column
      align-items: center
      padding-block: 5%
      padding-inline: 8%
      span
        display: flex
        h3
          font-size: 36px
          font-weight: 700
      div
        background: white

        span
          display: flex
          align-items: center
          justify-content: space-between
          p
            font-size: 20px
            color: #333
            margin-right: 15px
            font-weight: 700

          input[type="text"]
            width: 200px
            height: 20px
      section
          padding: 0
          div
            display: flex
            align-items: center
            p
              color: #333
              font-size: 18px
              font-weight: 700
              padding: 0
              margin:0

            h3
              font-size: 24px
              font-weight: 500
              cursor: pointer

            span
              display: flex
              align-items: center
              justify-content: center
              padding-block: 2%
              p
                color: #333
                font-weight: 700
                font-size: 18px
                padding: 0
                margin: 0
      input[type="button"]
          background-color: #08959f
          color: white
          border: none
          padding-block: 3%
          padding-inline: 20%
          margin-top: 5%
          margin-bottom: 1%
          font-size: 20px
</style>
