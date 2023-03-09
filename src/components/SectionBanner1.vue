<template>
  <section>
    <swiper
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div>
          <h3>개인 회생 대출</h3>
          <p>개인회생자라면 미납회차,</p>
          <p>기대출이 있어도 진행가능!</p>
          <p>파산면책자, 신용회복자도 대출 가능!</p>
        </div>
        <div class="content">
          <img src="../static/images/slide_01.png" />
          <p>대출을 디자인하다! 디자인론</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <h3>일반 신용 대출</h3>
          <p>복잡한 절차없는 상상론 일반신용대출!</p>
          <p>직장인, 사업자, 주부라면 복잡한 절차없이!</p>
        </div>
        <div class="content">
          <img src="../static/images/slide_01.png" />
          <p>대출을 디자인하다! 디자인론</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <h3>자동차 담보 대출</h3>
          <p>무입고 무방문!</p>
          <p>타던차 그대로 시세 100% 대출 가능!</p>
        </div>
        <div class="content">
          <img src="../static/images/slide_01.png" />
          <p>대출을 디자인하다! 디자인론</p>
        </div></swiper-slide
      >
      <swiper-slide>
        <div>
          <h3>부동산 담보 대출</h3>
          <p>본인명의의 부동산 소유자라면!</p>
          <p>전,월세 보증금 담보로도 대출가능!</p>
        </div>
        <div class="content">
          <img src="../static/images/slide_01.png" />
          <p>대출을 디자인하다! 디자인론</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="icons">
      <div>
        <img
          src="../static/images/디자인론_이미지-아이콘_09.png"
        />
        <p class="small">복잡한 절차없는</p>
        <p class="large">일반신용대출</p>
      </div>
      <div>
        <img
          src="../static/images/디자인론_이미지-아이콘_09.png"
        />
        <p class="small">복잡한 절차없는</p>
        <p class="large">일반신용대출</p>
      </div>
      <div>
        <img
          src="../static/images/디자인론_이미지-아이콘_09.png"
        />
        <p class="small">복잡한 절차없는</p>
        <p class="large">일반신용대출</p>
      </div>
      <div>
        <img
          src="../static/images/디자인론_이미지-아이콘_09.png"
        />
        <p class="small">복잡한 절차없는</p>
        <p class="large">일반신용대출</p>
      </div>
      <div>
        <img
          src="../static/images/디자인론_이미지-아이콘_09.png"
        />
        <p class="small">복잡한 절차없는</p>
        <p class="large">일반신용대출</p>
      </div>
      <div>
        <img
          src="../static/images/디자인론_이미지-아이콘_09.png"
        />
        <p class="small">복잡한 절차없는</p>
        <p class="large">일반신용대출</p>
      </div>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<style scoped lang="sass">
.swiper-slide
    height: 400px
    display: flex
    align-items: center
    justify-content: center
    .content
        position: relative
        p
            position: absolute
            top: 15px
            left: 55px
            font-size: 26px
            font-weight: 800
            color: black
        img
            width: 400px
.icons
    background: #E3F2F3
    display: flex
    align-items: center
    justify-content: center
    div
</style>
