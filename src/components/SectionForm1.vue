<script setup></script>

<template>
  <p>form</p>
  <form>
    <span>
      <h2>대출 가능</h2>
      <h2>여부 문의</h2>
    </span>
    <div>
      <p>성함</p>
      <input type="text" name="Name" />
    </div>
    <div>
      <p>연락처</p>
      <input type="text" name="Number" />
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
</template>

<style scoped lang="sass">
form
    display: flex
    align-items: center
    justify-content: center
    h2

        line-height: 1.2em
        padding: 0
        margin-inline: 0
        margin-block: 3%
</style>
