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
      openSideMenu: false,
      scrolled: false,
      lastPosition: 0,
    };
  },

  methods: {
    handleSideMenu() {
      this.openSideMenu = !this.openSideMenu;
      // console.log(this.openSideMenu);
    },
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
  <ul :class="{ side_menu_open: openSideMenu }" class="mobile-side-menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      @click="handleSideMenu"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
    <router-link class="router-link" to="/gen"><p>일반신용대출</p></router-link>
    <router-link class="router-link" to="/per"><p>개인회생대출</p></router-link>
    <router-link class="router-link" to="/car"
      ><p>자동차 담보대출</p></router-link
    >
    <router-link class="router-link" to="/estate"
      ><p>부동산 담보대출</p></router-link
    >
    <router-link class="router-link" to="/rent"
      ><p>전월세 신용대출</p></router-link
    >
    <router-link class="router-link" to="/credit"
      ><p>저신용자대출</p></router-link
    >
  </ul>

  <header :class="{ 'headroom--unpinned': scrolled }" class="headroom header">
<<<<<<< Updated upstream
    <div>
      <p>(주)오케이다이렉트대부중개 2016-서울강동-00074(대부중개업)</p>
      <p style="font-size: 30px; font-weight: 600; margin-right: 25px">
        1661-0670
      </p>
=======
    <div class="mobile-menu">
      <div class="info">
        <p>(주)오케이다이렉트대부중개 2016-서울강동-00074(대부중개업)</p>
        <p style="font-weight: 600">1661-0670</p>
      </div>

      <div>
        <router-link to="/">
          <img src="../static/images/logo.png"
        /></router-link>

        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="handleSideMenu"
        >
          <rect y="4" width="24" height="3" rx="1.5" fill="#fff" />
          <rect y="11" width="24" height="3" rx="1.5" fill="#fff" />
          <rect y="18" width="24" height="3" rx="1.5" fill="#fff" />
        </svg>
      </div>
>>>>>>> Stashed changes
    </div>
    <div class="pc-menu">
      <router-link to="/"> <img src="../static/images/logo.png" /></router-link>

<<<<<<< Updated upstream
      <ul>
        <router-link class="router-link" to="/gen"
          ><p>일반신용대출</p></router-link
        >
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
        <router-link class="router-link" to="/per"
          ><p>개인회생대출</p></router-link
        >
        <router-link class="router-link" to="/car"
          ><p>자동차 담보대출</p></router-link
        >
        <router-link class="router-link" to="/"
          ><p>부동산 담보대출</p></router-link
        >
        <router-link class="router-link" to="/"
          ><p>전월세 신용대출</p></router-link
        >
        <router-link class="router-link" to="/"
          ><p>저신용자대출</p></router-link
        >
      </ul>
=======
      <div>
        <router-link to="/">
          <img src="../static/images/logo.png"
        /></router-link>

        <ul>
          <router-link class="router-link" to="/gen"
            ><p>일반신용대출</p></router-link
          >
          <router-link class="router-link" to="/per"
            ><p>개인회생대출</p></router-link
          >
          <router-link class="router-link" to="/car"
            ><p>자동차 담보대출</p></router-link
          >
          <router-link class="router-link" to="/estate"
            ><p>부동산 담보대출</p></router-link
          >
          <router-link class="router-link" to="/rent"
            ><p>전월세 신용대출</p></router-link
          >
          <router-link class="router-link" to="/credit"
            ><p>저신용자대출</p></router-link
          >
        </ul>
      </div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      ul
        margin: 0
        padding-inline: 0
=======
        padding: 0

    svg
      position: relative
      padding-right: 3%
      padding-top: 10px
      width: 25px
      z-index: 400



.mobile-side-menu
    height: 100vh
    background-color:  #08959f
    position: fixed
    right: 0
    display: none
    flex-direction: column
    align-items: flex-end
    padding-inline: 5%
    z-index: 300

    svg
      width: 30px
      margin-block: 10%

    .router-link
      // font-family: 'sans-serif'
      border: 1px
      text-decoration: none
      font-color: 700
      color: white
      &:hover
        color: #e0eeed

.side_menu_open
    display: flex


@media screen and (min-width: 1024px)
  .mobile-side-menu
    display: none

  header
    .mobile-menu
      display: none
    .pc-menu
      display: flex
      flex-direction: column
      img
        margin-top: 50px
        height: 45px

      .info
        width: 100%
>>>>>>> Stashed changes
        display: flex
        .router-link
          text-decoration: none
          display: flex
<<<<<<< Updated upstream
          align-items: center
          justify-content: center
          width: 120px
          list-style: none
          p
            font-size: 16px

  // .pc-menu
  //   ul
  //     display: flex
  //     list-style: none
  //     margin-bottom: 0

  //     li
  //       width: 120px
  //       float: left
  //       position: relative
  //       cursor: pointer
  //       padding-left: 1%
  //       color: white
  //       font-weight: 700
  //       font-size: 18px
  //       ul
  //         left: -45px
  //         display: none
  //         width: 200px
  //         position: absolute
  //         z-index: 30
  //         padding: 0
  //         li
  //           width: 250px
  //           background:  #4cabb4
  //           cursor: pointer
  //           font-size: 15px
  //           font-weight: 500
  //           text-align: center
  //           border-bottom: 1px solid #ebebeb
  //           padding-block: 10%
  //           &:hover
  //             color: #CCFBFF

  //       &:hover
  //         ul
  //           display: block




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
=======
          .router-link
            text-decoration: none
            display: flex
            align-items: center
            justify-content: center
            width: 120px
            list-style: none

            p
              font-size: 16px
>>>>>>> Stashed changes
</style>
