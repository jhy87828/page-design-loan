<script setup></script>

<template>
  <form>
    <span>
      <h2>대출 가능</h2>
      <h2>여부 문의</h2>
    </span>
    <div style="margin-left: 3%">
      <span>
        <p>성함</p>
        <input type="text" name="Name" />
      </span>

      <span>
        <p>연락처</p>
        <input type="text" name="Number" />
      </span>
    </div>

    <div>
      <span
        ><span>
          <p>전체동의(광고정보성 동의 포함)</p>
          <p style="font-size: 12px">개인정보 이용약관</p>
        </span>
        <input type="checkbox" name="AgreeAll"
      /></span>

      <span
        ><p>필수동의</p>

        <input type="checkbox" name="AgreeRequired"
      /></span>

      <span
        ><p>선택적 동의</p>

        <input type="checkbox" name="AgreeOptional"
      /></span>

      <span
        ><p>광고정보성 동의</p>

        <input type="checkbox" name="AgreeAd"
      /></span>
    </div>

    <input type="button" value="상담신청" />
  </form>
</template>

<style scoped lang="sass">
form
  background-color: #06777f
  color: #fff
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding-block: 10%
  span
    margin-bottom: 7%
  h2
      line-height: 1.2em
      padding: 0
      margin-inline: 0
      margin-block: 5%
  input[type="text"]
      min-width: 150px
      height: 15px
      padding: 3px
      margin-left: 10px
  input[type="button"]
      background: #fff
      width: 220px
      height: 40px
      margin-left: 1%
      border-radius: 15px
      border: none
      color: #06777f
      font-size: 16px
      font-weight: 700
      margin: 10% 0 0 0
      &:hover
        background-color: #b6dde0
  input[type="checkbox"]
      margin-top: 10px
      margin-left: 15px
  div
      display: flex
      flex-direction: column
      margin: 0 2% 0 1%
      span
        width: 100%
        display: flex
        flex-direction: row
        align-items: flex-start
        justify-content: space-between
        margin-block: 1%
        border-radius: 10px
        span
          display: flex
          flex-direction: column
          align-items: flex-start

        p
          font-size: 15px
          font-weight: 600
          margin-block: 0
          padding: 0


@media (min-width: 1024px)
  form
    background-color: #06777f
    color: #fff
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    padding-block: 1%
    span
        margin-bottom: 0
    h2

        line-height: 1.2em
        padding: 0
        margin-inline: 0
        margin-block: 3%
    input[type="text"]
        min-width: 150px
        height: 15px
        padding: 3px
        margin-left: 10px
    input[type="button"]
        background: #fff
        width: 220px
        height: 40px
        margin-left: 1%
        border-radius: 15px
        border: none
        color: #06777f
        font-size: 16px
        font-weight: 700
        margin: 0
    input[type="checkbox"]
        margin-top: 10px
        margin-left: 15px
    div

        display: flex
        flex-direction: column
        margin: 0 2% 0 1%
        span
          width: 100%
          display: flex
          flex-direction: row
          align-items: flex-start
          justify-content: space-between
          margin-block: 1%
          border-radius: 10px
          span
            display: flex
            flex-direction: column
            align-items: flex-start

          p
            font-size: 15px
            font-weight: 600
            margin-block: 0
            padding: 0
</style>
