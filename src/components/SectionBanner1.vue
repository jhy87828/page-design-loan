<template>
  <section>
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="detail">
          <p class="detail-title">일반 신용 대출</p>
          <p>복잡한 절차없는 상상론 일반신용대출!</p>
          <p>직장인, 사업자, 주부라면 복잡한 절차없이!</p>
        </div>
        <img
          :src="image1"
          style="
            width: 520px;
            height: auto;
            margin-left: 1%;
            margin-bottom: 20px;
          "
        />
      </swiper-slide>
      <swiper-slide>
        <div class="detail">
          <p class="detail-title">개인 회생 대출</p>
          <p>개인회생자라면 미납회차,</p>
          <p>기대출이 있어도 진행가능!</p>
          <p>파산면책자, 신용회복자도 대출 가능!</p>
        </div>
        <img
          :src="image2"
          style="
            width: 450px;
            height: auto;
            margin-left: 5%;
            margin-bottom: 0px;
          "
        />
      </swiper-slide>

      <swiper-slide>
        <div class="detail">
          <p class="detail-title">자동차 담보 대출</p>
          <p>무입고 무방문!</p>
          <p>타던차 그대로 시세 100% 대출 가능!</p>
        </div>
        <img
          :src="image3"
          style="
            width: 400px;
            height: auto;
            margin-left: 5%;
            margin-bottom: 50px;
          "
        />
      </swiper-slide>
      <swiper-slide>
        <div class="detail">
          <p class="detail-title">부동산 담보 대출</p>
          <p>본인명의의 부동산 소유자라면!</p>
          <p>전,월세 보증금 담보로도 대출가능!</p>
        </div>
        <img
          :src="image4"
          style="
            width: 520px;
            height: auto;
            margin-left: 5%;
            margin-block: 30px;
          "
        />
      </swiper-slide>
      <swiper-slide>
        <div class="detail">
          <p class="detail-title">전월세 신용 대출</p>
          <p>본인명의의 부동산 소유자라면!</p>
          <p>전,월세 보증금 담보로도 대출가능!</p>
        </div>
        <img :src="image5" />
      </swiper-slide>
      <swiper-slide>
        <div class="detail">
          <p class="detail-title">저신용자 대출</p>
          <p>본인명의의 부동산 소유자라면!</p>
          <p>전,월세 보증금 담보로도 대출가능!</p>
        </div>
        <img :src="image6" style="width: 400px" />
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
import Image1 from "../static/images/de-ref-1.png";
import Image2 from "../static/images/de-ref-2.png";
import Image3 from "../static/images/de-ref-3.png";
import Image4 from "../static/images/de-ref-4.png";
import image5 from "../static/images/de-ref-5.png";
import Image6 from "../static/images/de-ref-6.png";
// import Icon1 from "../static/images/디자인론_이미지-아이콘_09.png";
// import Icon2 from "../static/images/디자인론_이미지-아이콘_15.png";
// import Icon3 from "../static/images/디자인론_이미지-아이콘_07.png";
// import Icon4 from "../static/images/디자인론_이미지-아이콘_18.png";
// import Icon5 from "../static/images/디자인론_이미지-아이콘_20.png";
// import Icon6 from "../static/images/디자인론_이미지-아이콘_12.png";
import Icon1 from "../static/images/아이콘-3.png";
import Icon2 from "../static/images/아이콘-2.png";
import Icon3 from "../static/images/아이콘-4.png";
import Icon4 from "../static/images/아이콘-1.png";
import Icon5 from "../static/images/아이콘-5.png";
import Icon6 from "../static/images/아이콘-6-1.png";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { Navigation, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, EffectFade],
    };
  },
  data: () => {
    return {
      image1: Image1,
      image2: Image2,
      image3: Image3,
      image4: Image4,
      image5: image5,
      image6: Image6,
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

@font-face
    font-family: 'GyeonggiTitleM'
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiTitleM.woff') format('woff')
    font-weight: normal
    font-style: normal

.tab
  div
    display: flex
    div
      width: 100px


section
  display: flex
  flex-direction: column
  align-items: center


p
  margin-block: 0
  padding: 0
  line-height: 1.5em
  font-size: 16px
  color: #4f4f4f

.swiper
    width: 100%
    .swiper-slide
      background-color: white
      height: 430px !important
      display: flex
      flex-direction: column
      align-items: center
      // padding-top: 60px
      .detail-title
        font-size: 32px
        font-weight: 700
        margin-top: 10%
      p
        color: #08959f
      img
          width: 100%
          height: auto
          margin-left: 0
          margin-right: 0
          margin-block: 0

.icons
    width: 100%
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    padding-block: 10%
    div
      width: 34%
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

@media screen and (min-width: 1024px)

  p
    margin-block: 0
    padding: 0
    line-height: 1.5em
    font-size: 16px
    color: #4f4f4f
  .swiper
      margin-inline: 0
      .swiper-slide
        height: auto
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        // margin-block: 1%
        .detail-title
          font-size: 32px
          font-weight: 700
        p
          color: #08959f
        img
            width: 520px
            height: 400px
            margin-left: 1%


  .icons
      width: 100%
      display: flex
      align-items: center
      justify-content: center
      padding-block: 1%

      div
        width: 10%
        display: flex
        flex-direction: column
        align-items: center
        margin-inline: 2%
        margin-top: 1%
        margin-bottom: 3%
        p
          padding: 0
          margin: 0
          line-height: 1.2em
        .small
          font-size: 12px
        .large
          font-size: 15px
</style>
