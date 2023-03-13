<script setup></script>

<template>
  <form>
    <span>
      <h2>대출 가능</h2>
      <h2>여부 문의</h2>
    </span>
    <div>
      <span class="info">
        <p>성함</p>
        <input type="text" name="Name" />
      </span>
      <span class="info">
        <p>연락처</p>
        <input type="text" name="Number" />
      </span>
    </div>

    <div>
      <div>
        <span
          ><p>전체동의(광고정보성 동의 포함)</p>
          <p>개인정보 이용약관</p>
          <input type="checkbox" name="AgreeAll"
        /></span>
      </div>
      <div>
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
    </div>
    <input type="button" value="상담신청" />
  </form>
  <div class="buttons">
    <button style="background-color: #c8edf3">전문가 무료상담</button>
    <button style="background-color: #fad223">카카오톡 상담신청</button>
  </div>
</template>

<style scoped lang="sass">
.buttons
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  padding-block: 1%
  button
    width: 320px
    height: 50px
    font-size: 16px
    text-align: center
    border-radius: 25px
    border: none
    margin-inline: 1%

form
    display: flex
    align-items: center
    justify-content: center
    padding-top: 5%
    padding-bottom: 3%
    h2

        line-height: 1.2em
        padding: 0
        margin-inline: 0
        margin-block: 3%
    input[type="text"]
        min-width: 150px
        height: 15px
        padding: 5px
    input[type="button"]
        background: #ebebeb
        width: 220px
        height: 40px
        margin-left: 3%
        border-radius: 20px
        border: none
        font-size: 16px
    input[type="checkbox"]
        margin-right: 15px
    .info
        display: flex
        align-items: center
        margin-block: 2%
        margin-inline: 15%
        p
            margin-right: 20px
            width: 180px
            text-align: start
    div
        min-width: 300px
        display: flex
        flex-direction: column
        div
            display: flex
            flex-direction: row
        span
            display: flex
            flex-direction: row
            margin-block: 2%
            p
                margin: 0
                padding: 0
</style>
