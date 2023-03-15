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
    <img :src="image1" />
    <div>
      <span>
        <h1>디자인론과 함께하는 현명한 나의</h1>
        <h1>채무통합대출</h1></span
      >

      <div class="sub-title">
        <p>이제부터 대출은 하나로 통합하자!</p>
        <span
          ><p>3건이상 사용자</p>
          <p style="color: #f47500; margin-inline: 5px">대환대출</p>
          <p>가능!!</p></span
        >
        <p>
          다른 곳에 대출이 있어도 한번에! 하나로! 통합 대환대출 및 추가대출이
          가능!!
        </p>
      </div>
      <div class="detail">
        <div>
          <p class="large">대출대상</p>
          <p class="small" style="color: #f47500">회생대출 전문 시스템 구축</p>
        </div>
        <div
          style="
            border-right: 1px solid #4cabb4;
            width: 1px;
            height: 10px;
            padding: 1px;
          "
        ></div>
        <div>
          <p class="large">대출금리</p>
          <p class="small" style="color: #e87518">연 20% 이내, 수수료 X</p>
        </div>
        <div
          style="
            border-right: 1px solid #4cabb4;
            width: 1px;
            height: 10px;
            padding: 1px;
          "
        ></div>
        <div>
          <p class="large">대출한도</p>
          <p class="small" style="color: #e87518">최고 8,000만원</p>
          <p class="small" style="color: #e87518">(개인별 차등)</p>
        </div>
        <div
          style="
            border-right: 1px solid #4cabb4;
            width: 1px;
            height: 10px;
            padding: 1px;
          "
        ></div>
        <div>
          <p class="large">상품특징</p>
          <p class="small" style="color: #e87518">현재 사용중인 대출</p>
          <p class="small" style="color: #e87518">통합 대환대출 및</p>
          <p class="small" style="color: #e87518">추가자금대출 가능</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
section
    width: 100%
    height: 600px
    display: flex
    justify-content: center
    border-bottom: 1px dashed #787878

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
        z-index: 10
        span
            display: flex
            flex-direction: row
            h1
                font-size: 40px
                font-weight: 800

                text-shadow: 2px 2px 1px #ffffff
                color: #08959f
                margin-right: 7px
                margin-block: 0
.sub-title
    display: flex
    flex-direction: column
    color: #08959f
    padding-bottom: 7%
    margin-block: 2%

.detail
    display: flex
    flex-direction: row
    div
        width: 200px
        height: 100%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: flex-start
        margin-top: -60px

.large
  font-size: 20px
.small
  font-size: 15px
</style>
