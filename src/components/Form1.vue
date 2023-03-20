<script>
export default {
  name: "Form1",
};
</script>

<template>
<<<<<<< Updated upstream
  <form>
    <span>
      <h3>신용도 영향없는</h3>
      <h3>한도확인</h3></span
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
  </form>
=======
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
            <input type="checkbox" />
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
>>>>>>> Stashed changes
</template>

<style scoped lang="sass">
section
    background-color: #e0eeed
form
<<<<<<< Updated upstream
    border: 1px solid black
=======
    background-color: white
    display: flex
    flex-direction: column
    align-items: center
    padding-block: 5%
    padding-inline: 10%
    span
      display: flex
    div
      background: white

      span
        display: flex
        align-items: center
        justify-content: space-between
        p
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
>>>>>>> Stashed changes
</style>
