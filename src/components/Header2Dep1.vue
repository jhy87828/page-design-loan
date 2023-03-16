<script>
import DropDownMenu from "./DropDown.vue";

export default {
  name: "Header2Dep",
  components: {
    DropDownMenu,
  },
  data() {
    return {
      limitPosition: 100,
      scrolled: false,
      lastPosition: 0,
    };
  },

  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
        // move down
      }

      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <header :class="{ 'headroom--unpinned': scrolled }" class="headroom header">
    <div>
      <p>(주)오케이다이렉트대부중개 2016-서울강동-00074(대부중개업)</p>
      <p style="font-size: 30px; font-weight: 600; margin-right: 25px">
        1661-0670
      </p>
    </div>
    <div class="pc-menu">
      <img src="../static/images/logo.png" />
      <ul>
        <li><p>일반신용대출</p></li>
        <!-- <li>
          <p>대출상품</p>
          <ul class="sub-menu">
            <li>신용 대출</li>
            <li>개인회생 대출</li>
            <li>차담보 대출</li>
            <li>주택/전월세 담보 대출</li>
            <li>프리랜서/주부 대출</li>
            <li>카카오톡</li>
            <li>로고</li>
          </ul>
        </li> -->
        <li><p>개인회생대출</p></li>
        <li><p>자동차 담보대출</p></li>
        <li><p>부동산 담보대출</p></li>
        <li><p>전월세 신용대출</p></li>
        <li><p>저신용자대출</p></li>
      </ul>

      <!-- <DropDownMenu /> -->
    </div>
  </header>
</template>

<style scoped lang="sass">

.headroom
    will-change: transform
    transition: transform 200ms linear

.headroom--pinned
    transform: translateY(0%)

.headroom--unpinned
    transform: translateY(-40%)



@media screen and (min-width: 24px)
  header
    height: auto
    background: #08959f
    position: sticky
    top: 0px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding-block: 10px
    z-index: 200
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
        font-size: 24px
        font-weight: 600
        color: white
        margin: 0
      ul
        margin: 0
        padding-inline: 0
        li
          p
            font-size: 16px

  .pc-menu
    ul
      display: flex
      list-style: none
      margin-bottom: 0

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
