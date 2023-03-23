<script>
// import Image1 from "../static/images/image17.png";
// import Image2 from "../static/images/image18.png";
// import Image3 from "../static/images/image19.png";
// import Image4 from "../static/images/image20.png";

import Image1 from "../static/images/info-icon-1.png";
import Image2 from "../static/images/info-icon-2.png";
import Image3 from "../static/images/info-icon-3.png";
import Image4 from "../static/images/info-icon-4.png";

export default {
  data: () => {
    return {
      image1: Image1,
      image2: Image2,
      image3: Image3,
      image4: Image4,
    };
  },
};
</script>

<template>
  <section>
    <span>
      <h2>디자인론이 고객님들께</h2>
      <h2 style="color: #f47500">특별한 행복으로</h2>
      <h2>함께 합니다.</h2></span
    >

    <h1>디자인론 채무통합서비스</h1>
    <div>
      <div>
        <img :src="image1" />
        <p class="small">고객별 최고 한도로</p>
        <p class="large">대출한도는 더 높게</p>
      </div>
      <div>
        <img :src="image2" />
        <p class="small">당일심사 당일송금</p>
        <p class="large">빠른심사로 부담없게</p>
      </div>
      <div>
        <img :src="image3" />
        <p class="small">회차, 실행별</p>
        <p class="large">금융 맞춤컨설팅</p>
      </div>
      <div>
        <img :src="image4" />
        <p class="small">고객정보도 철저하게</p>
        <p class="large">퍼펙트 관리</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
section
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    color: #08959f
    padding-block: 5%
    span
      display: flex
      h2
        padding: 0
        margin-block: 0
        margin-right: 3px
        font-size: 16px
    h1
      font-size: 28px
      padding: 0
      margin: 0
    div
      display: flex
      flex-direction: column
      div
        display: flex
        flex-direction: column
        align-items: center
        p
          font-weight: 600
          padding: 0
          margin: 0
        img
          width: 30px
          height: 30px

@media (min-width: 1024px)
    span
        display: flex
        h2
            margin-right: 5px
            font-size: 24px
            margin-bottom: 1%
    h1
        font-size: 46px
        font-weight: 800
        margin-top: 0
        margin-bottom: 3%
        text-shadow: 2px 2px 1px #b6dde0

    div
        display: flex
        flex-direction: row
        div
            width: 230px
            padding-block: 2%
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            // border: 1px dashed #ebebeb
            margin-inline: 10px
            img
              width: 30%
            p
                padding-inline: 3%
                padding-block: 0

            .small
                line-height: 1em
                margin-top: 10%
                margin-bottom: 0
                font-size: 18px
                font-weight: 600

                color: #47a9b3
            .large
                margin-top: 0
                margin-bottom: 5%
                font-weight: 700
                font-size: 24px

                // color:
</style>
