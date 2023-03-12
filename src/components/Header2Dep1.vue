<script>
export default {
  name: "Header2Dep",
  data: () => {
    return {
      showMenu: false,
    };
  },
};
</script>

<template>
  <header>
    <div>
      <p>(주)오케이다이렉트대부중개 2016-서울강동-00074(대부중개업)</p>
      <p style="font-size: 24px; font-weight: 700; padding-right: 1%">
        1661-0670
      </p>
    </div>
    <div class="pc-menu">
      <img src="../static/images/logo.png" />
      <ul>
        <li><p>회사소개</p></li>
        <li>
          <p>대출상품</p>
          <ul class="sub-menu">
            <li><a>신용 대출</a></li>
            <li><a>개인회생 대출</a></li>
            <li><a>차담보 대출</a></li>
            <li><a>주택/전월세 담보 대출</a></li>
            <li><a>프리랜서/주부 대출</a></li>
          </ul>
        </li>
        <li><p>대출사례</p></li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="sass">
header
  background: #4cabb4
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding-bottom: 1%
  div
    width: 80%
    display: flex
    justify-content: space-between
    align-items: flex-end
    padding-block: 10px
    img
      height: 45px
      margin: 2px
    p
      font-size: 17px
      font-weight: 600
      color: white
      margin: 0
    // ul
    //   display: flex
    //   align-items: flex-end
    //   justify-content: space-between
    //   padding: 0
    //   margin: 0
    //   li
    //     color: white
    //     list-style: none
    //     width: 100px
    //     display: flex
    //     align-items: flex-end
    //     justify-content: center
    //     cursor: pointer

.pc-menu
  ul
    list-style: none
    li
      float: left
      position: relative
      ul
        display: none
        position: absolute
        overflow: auto
        width: 200em
        border: 1px solid black
        li
          float: none
      &:hover
        ul
          display: block
</style>
