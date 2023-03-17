<script>
import Image1 from "../static/images/sub-2.png";
import Image2 from "../static/images/sub-people-5.png";

import Form1 from "../components/Form1.vue";

export default {
  name: "General",
  components: { Form1 },
  data: () => {
    return {
      image1: Image1,
      image2: Image2,
    };
  },
};
</script>

<template>
  <section>
    <h2>복잡한 절차 없는</h2>
    <h1>디자인론 신용대출</h1>
    <h3>직장인, 사업자, 주부라면 간편하게!</h3>
    <img :src="image2" />
    <span
      ><p>신규고객</p>
      <p>한도우대!</p></span
    >
    <span
      ><p>전화 한통화로 무방문</p>
      <p>당일송금!</p></span
    >
    <div>
      <div>
        <p>대상</p>
      </div>
      <div>
        <p>대출내용</p>
      </div>
      <div>
        <p>상환방식</p>
      </div>
    </div>
    <Form1 />
  </section>
</template>

<style scoped lang="sass">

section
  background-image: url('../static/images/background-2.png')
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: inherit

  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  padding-block: 10%
  img
    width: 60%
    // padding-bottom: 50px
  span
    display: flex
</style>
