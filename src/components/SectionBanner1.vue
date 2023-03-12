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
          <img :src="image1" />
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
          <img :src="image1" />
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
          <img :src="image1" />
          <p>대출을 디자인하다! 디자인론</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <h3>부동산 담보 대출</h3>
          <p>본인명의의 부동산 소유자라면!</p>
          <p>전,월세 보증금 담보로도 대출가능!</p>
        </div>
        <div class="content">
          <img :src="image1" />
          <p>대출을 디자인하다! 디자인론</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="icons">
      <div>
        <img :src="icon1" />
        <p class="small">복잡한 절차없는</p>
        <p class="large">일반신용대출</p>
      </div>
      <div>
        <img :src="icon2" />
        <p class="small">파산 회복자도 가능한</p>
        <p class="large">개인회생대출</p>
      </div>
      <div>
        <img :src="icon3" />
        <p class="small">무입고! 무방문!</p>
        <p class="large">자동차 담보대출</p>
      </div>
      <div>
        <img :src="icon4" />
        <p class="small">선순위부터 후순위까지!</p>
        <p class="large">부동산 담보대출</p>
      </div>
      <div>
        <img :src="icon5" />
        <p class="small">무설정,무담보로</p>
        <p class="large">전월세 신용대출</p>
      </div>
      <div>
        <img :src="icon6" />
        <p class="small">연체만 없다면</p>
        <p class="large">저신용자대출</p>
      </div>
    </div>
  </section>
</template>
<script>
import Image1 from "../static/images/slide_01.png";
import Icon1 from "../static/images/디자인론_이미지-아이콘_09.png";
import Icon2 from "../static/images/디자인론_이미지-아이콘_15.png";
import Icon3 from "../static/images/디자인론_이미지-아이콘_07.png";
import Icon4 from "../static/images/디자인론_이미지-아이콘_18.png";
import Icon5 from "../static/images/디자인론_이미지-아이콘_20.png";
import Icon6 from "../static/images/디자인론_이미지-아이콘_12.png";

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
  data: () => {
    return {
      image1: Image1,
      icon1: Icon1,
      icon2: Icon2,
      icon3: Icon3,
      icon4: Icon4,
      icon5: Icon5,
      icon6: Icon6,
    };
  },
};
</script>
<style scoped lang="sass">
.swiper-slide
    height: 300px
    display: flex
    align-items: flex-start
    justify-content: center
    margin-block: 5%
    div
      margin-right: 2%
      h3
        font-size: 32px
        font-weight: 900
        padding-top: 7%
        padding-bottom: 3%
        margin: 0
      p
        font-size: 16px
        line-height: 1.5em
        padding: 0
        margin: 0
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
    padding-block: 1%
    div
      display: flex
      flex-direction: column
      align-items: center
      margin-inline: 2%
      margin-block: 2%
      img
        width: 45px
        height: 50px
        margin-bottom: 20px
      p
        padding: 0
        margin: 0
        line-height: 1.2em
      .small
        font-size: 12px
      .large
        font-size: 15px
</style>
