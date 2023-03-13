<script>
import DropDownMenu from "./DropDown.vue";

export default {
  name: "Header2Dep",
  components: {
    DropDownMenu,
  },
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
      <!-- <div id="button_wrapper">
        <button id="e_button">E</button>
        <ul id="zul_menu">
          <li class="test"><a class="active" href="mainPage.php">Home</a></li>
          <li class="test"><a href="Cats.php"> Cats</a></li>
          <li class="test"><a href="Dogs.php">Dogs</a></li>
          <li class="test"><a href="#contact">Contact</a></li>
        </ul>
      </div> -->
      <ul>
        <li><p>회사소개</p></li>
        <li>
          <p>대출상품</p>
          <ul class="sub-menu">
            <li>신용 대출</li>
            <li>개인회생 대출</li>
            <li>차담보 대출</li>
            <li>주택/전월세 담보 대출</li>
            <li>프리랜서/주부 대출</li>
          </ul>
        </li>
        <li><p>대출사례</p></li>
      </ul>

      <!-- <DropDownMenu /> -->
    </div>
  </header>
</template>

<style scoped lang="sass">
header
  background: #4cabb4
  postiion: fixed
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding-block: 1%
  div
    width: 80%
    display: flex
    justify-content: space-between
    align-items: flex-end
    padding-bottom: 10px
    img
      height: 45px
      margin: 2px
    p
      font-size: 17px
      font-weight: 600
      color: white
      margin: 0


@media screen and (min-width: 1024px)
  header
    background: #4cabb4
    postiion: fixed
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding-block: 10px
    z-index: 10
    div
      width: 80%
      display: flex
      justify-content: space-between
      align-items: flex-end
      padding-bottom: 1%
      img
        height: 45px
        margin: 2px
      p
        font-size: 17px
        font-weight: 600
        color: white
        margin: 0

  .pc-menu
    ul
      list-style: none
      margin-bottom: 0
      display: flex

      li
        width: 120px
        float: left
        position: relative
        cursor: pointer
        padding-left: 1%
        color: white
        font-weight: 700
        font-size: 18px
        ul
          left: -45px
          display: none
          width: 200px
          position: absolute
          z-index: 30
          padding: 0
          li
            width: 150px
            background:  #4cabb4
            cursor: pointer
            font-size: 15px
            font-weight: 500
            text-align: center
            border-bottom: 1px solid #ebebeb
            padding-block: 10%
            &:hover
              color: #CCFBFF

        &:hover
          ul
            display: block




// #topbar
//   padding: 0px
//   background: black
//   height: 10%


// #e_button
//   width: 40px
//   height: 100%


// #zul_menu
//   border: 1px black solid
//   display: none
//   position: absolute
//   top: 2px
//   //margin: 0;
//   //padding: 0px;
//   //overflow: hidden;
//   z-index: 1


// #button_wrapper
//   position: relative
//   display: inline-block


// #button_wrapper:hover #zul_menu
//   display: block
</style>
