<script>
import Image1 from "../static/images/green-leaf.png";

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
          <p style="color: #f47500">대환대출</p>
          <p>가능!!</p></span
        >
      </div>
      <div class="detail">
        <div>
          <p>대출대상</p>
          <p>현재</p>
        </div>
        <div>
          <p>대출금리</p>
          <p>현재</p>
        </div>
        <div>
          <p>대출한도</p>
          <p>현재</p>
        </div>
        <div>
          <p>상품특징</p>
          <p>현재</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
section
    height: 600px
    display: flex
    justify-content: center
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
                font-size: 36px
                color: #4CABB4
                margin-right: 7px
                margin-block: 0
            .sub-title
                display: flex
                flex-direction: column
                span
                    margin: 0
                    padding: 0
        p
            padding: 0
            margin: 0
    .detail
        display: flex
        flex-direction: row
        div
            width: 120px
            padding-block: 5%
            padding-inline: 5%
</style>
