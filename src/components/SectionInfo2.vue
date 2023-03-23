<script>
import Image1 from "../static/images/green-leaves-3.png";

export default {
  data: () => {
    return {
      image1: Image1,
    };
  },
};
</script>

<template>
  <section>
    <div style="background-color: #fff; padding-block: 2%">
      <h1>디자인론과 함께하는</h1>
      <h1>채무통합대출</h1>
    </div>

    <div class="sub-title">
      <p>이제부터 대출은 하나로 통합하자!</p>
      <span
        ><p>3건이상 사용자</p>
        <p style="color: #f47500; margin-inline: 5px">대환대출</p>
        <p>가능!!</p></span
      >
      <p>다른 곳에 대출이 있어도 한번에! 하나로!</p>
      <p>통합 대환대출 및 추가대출이 가능!!</p>
    </div>
    <div class="detail">
      <div>
        <p class="large">대출대상</p>
        <p class="small" style="color: #f47500">회생대출 전문 시스템 구축</p>
      </div>

      <div>
        <p class="large">대출금리</p>
        <p class="small" style="color: #e87518">연 20% 이내, 수수료 X</p>
      </div>

      <div>
        <p class="large">대출한도</p>
        <p class="small" style="color: #e87518">최고 8,000만원</p>
        <p class="small" style="color: #e87518">(개인별 차등)</p>
      </div>

      <div>
        <p class="large">상품특징</p>
        <p class="small" style="color: #e87518">현재 사용중인 대출</p>
        <p class="small" style="color: #e87518">통합 대환대출 및</p>
        <p class="small" style="color: #e87518">추가자금대출 가능</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">

section
      background-color: #b6dde0
      width: inherit
      height: auto
      display: flex
      flex-direction: column
      justify-content: center
      border-bottom: none
      padding-block: 20%
      p
        color: #4CABB4
        font-weight: 700
        padding: 0
        margin: 0
      img
          width: 100%
          position: absolute
          z-index: 0

      div
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          h1
              font-size: 36px
              font-weight: 800
              line-height: 1.2em
              // text-shadow: 2px 2px 1px #08959f
              color: #08959f
              margin-right: 7px
              margin-block: 0
.sub-title
    display: flex
    flex-direction: column
    margin-block: 5%
    p
      font-size: 18px
      font-weight: 700
      color: #148c92
      // text-shadow: 1px 1px 1px #597678
    span
      display: flex
      flex-direction: row


.detail
    display: flex
    flex-direction: column

    div
        background-color: #fff
        width: 80%
        height: 100%
        display: flex
        flex-direction: column

        align-items: center
        justify-content: center

        border: 2px dashed #e4eff0
        border-radius: 15px

        margin-block: 3%
        padding-block: 5%

    .large
      font-size: 18px
      padding-bottom: 2%
      color: #208186
    .small
      font-size: 14px


@media (min-width: 1024px)
  section
      background-color: #b6dde0
      width: inherit
      height: auto
      display: flex
      flex-direction: column
      justify-content: center
      border-bottom: none
      padding-block: 20%
      p
        color: #4CABB4
        font-weight: 700
        padding: 0
        margin: 0
      img
          width: 100%
          position: absolute
          z-index: 0

      div
          display: flex
          flex-direction: row
          align-items: center
          justify-content: center
          h1
              font-size: 63px
              font-weight: 800
              line-height: 1.2em
              // text-shadow: 2px 2px 1px #08959f
              color: #08959f
              margin-right: 7px
              margin-block: 0
  .sub-title
      display: flex
      flex-direction: column
      margin-block: 5%
      p
        font-size: 28px
        font-weight: 700
        color: #148c92
        // text-shadow: 1px 1px 1px #597678
      span
        display: flex
        flex-direction: row


  .detail
      display: flex
      flex-direction: row
      justify-content: space-evenly

      div
          background-color: #fff
          width: 20%
          height: 100px
          display: flex
          flex-direction: column

          align-items: center
          justify-content: center

          border: 2px dashed #e4eff0
          border-radius: 15px

          margin-block: 3%
          padding-block: 5%

      .large
        font-size: 28px
        padding-bottom: 2%
        color: #208186
      .small
        font-size: 20px
</style>
