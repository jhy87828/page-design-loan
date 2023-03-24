<script>
export default {
  name: "Form1",
  data() {
    return {
      popUP: false,
    };
  },
  methods: {
    check(e) {
      this.popUP = !this.popUP;
      console.log("checked");
    },
  },
};
</script>

<template>
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
          <h3>이용약관보기</h3>
          <span>
            <input />
            <p>동의(광고성 정보동의 포함)</p>
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
section
    background-color: #e0eeed
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
          width: 200px
    section
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
              font-size: 18px
              font-weight: 500

            span
              display: flex
              align-items: center
              justify-content: center
              padding-block: 1%
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
          padding-block: 5%
          padding-inline: 20%
          margin-top: 10%
          margin-bottom: 5%
          font-size: 20px
</style>
