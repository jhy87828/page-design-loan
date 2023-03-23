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
  <ul
    :class="{ side_menu_open: openSideMenu, side_menu_close: !openSideMenu }"
    class="mobile-side-menu"
  >
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

  <div class="headroom mobile" :class="{ 'headroom--unpinned': scrolled }">
    <div>
      <p>(주)오케이다이렉트대부중개 2016-서울강동-00074(대부중개업)</p>
      <p style="font-weight: 600">1661-0670</p>
    </div>

    <div>
      <router-link to="/"> <img src="../static/images/logo.png" /></router-link>

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
  </div>

  <header :class="{ 'headroom--unpinned': scrolled }" class="headroom header">
    <div>
      <div style="display: flex; align-items: center; margin-top: 1%">
        <p>(주)오케이다이렉트대부중개 2016-서울강동-00074(대부중개업)</p>
        <p style="font-size: 36px">1661-0670</p>
      </div>

      <div style="padding-top: 20px; padding-bottom: 20px">
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
    transform: translateY(-50%)

header
    display: none
.mobile
    width: 100%
    height: auto
    background: #08959f
    position: sticky
    top: 0px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    z-index: 200
    img
      width: auto
      height: 35px
    div
      width: 90%
      display: flex
      align-items: center
      justify-content: space-between
      padding-block: 1%
      p
        color: white
        font-weight: 600
        padding: 0
        margin: 0

      svg
        width: 25px
        height: 25px

.mobile-side-menu
    width: 30%
    position: fixed
    background-color: #08959f
    display: flex
    flex-direction: column
    align-items: flex-end
    top: 0
    height: 100vh
    z-index: 400
    padding-top: 10%
    padding-inline: 5%
    margin: 0
    animation: sliding 1s ease-out
    svg
      width: 30px
      height: 30px
    a
      text-decoration: none
      color: white
      font-weight: 700
      padding-inline: 2%
      &:hover
        color: #b6dde0

.side_menu_close
    animation: disappear 1s ease-out
    right: -100%

.side_menu_open
    animation: sliding 1s ease-out
    right: 0


@keyframes sliding
  from
    right: -100%
    opacity: 0
  to
    right: 0
    opacity: 1


@keyframes disappear
  from
    right: 0
    opacity: 1
  to
    right: -100%
    opacity: 0


@media screen and (min-width: 1024px)

  .mobile
      display: none

  header
      position: sticky
      top: 0
      background-color: #08959f
      display: flex
      flex-direction: column
      width: 100%
      z-index: 300
      div
        width: 95%
        display: flex
        flex-direction: column
        align-items: flex-end
        justify-content: space-between
        div
          display: flex
          flex-direction: row
          align-items: flex-end
          justify-content: space-between
          p
            font-size: 28px
            font-weight: 700
            color: #fff
            margin: 0
          img
            height: 45px

          ul
            display: flex
            align-items: flex-end
            padding: 0
            margin: 0
            a
              text-decoration: none
              display: flex
              align-items: center
              justify-content: flex-start
              list-style: none
              padding: 0
              &::after
                content:"|"
                font-size: 10px
                margin-inline: 20px
                float: right
                color: white
              &:last-child
                &::after
                  display: none
              p
                color: white
                font-weight: 700
                font-size: 15px
                padding: 0
                margin: 0
                &:hover
                  color: #add8e6
</style>
