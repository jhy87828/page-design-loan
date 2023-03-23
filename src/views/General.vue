<script>
import Image2 from "../static/images/sub-people-5.png";

import SectionSubInfo2 from "../components/SectionSubInfo2.vue";
import Form1 from "../components/Form1.vue";

export default {
  name: "General",
  components: { Form1, SectionSubInfo2 },
  data: () => {
    return {
      image2: Image2,
      items1: [
        "만 20세 이상(소득증빙 확인서)",
        "직장인, 사업자, 프리랜서, 주부 등",
      ],
      items2: [
        "한도 : 최소 100만원 ~ 최대 8,000만원(개인별 차등)",
        "금리 : 최대 연 20% 이내",
        "기간 : 최소 1개월 ~ 최대 60개월",
      ],
      items3: [
        "원금일시상환 또는",
        "원리금균등분할상환 등 (상품별 상이)",
        "취급수수료 : X",
      ],
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
  </section>
  <SectionSubInfo2 :Items1="items1" :Items2="items2" :Items3="items3" />
  <Form1 />
</template>

<style scoped lang="sass">

section

  background-size: cover
  background-repeat: no-repeat
  background-position: center
  height: inherit

  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  margin-top: 5%
  padding-block: 5%
  h1
    color: #08959f
    font-weight: 700
    font-size: 32px
    margin-block: 2%
  h2
    color: #f47500
    font-weight: 600
    font-size: 18px
    margin-block: 0
  h3
    color: #80b5b8
    font-weight: 600
    font-size: 18px
    margin-block: 0


  img
    width: 100%
    margin-bottom: 15%
  span
    display: flex
    p
      color: #08959f
      font-weight: 600
      font-size: 18px
      margin-right: 5px
      margin-block: 1%

@media (min-width: 1024px)
  section
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    height: inherit

    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    margin-top: 5%
    padding-block: 5%
    h1
      color: #08959f
      font-weight: 700
      font-size: 67px
      margin-block: 2%
    h2
      color: #f47500
      font-weight: 700
      font-size: 32px
      margin-block: 0
    h3
      color: #80b5b8
      font-weight: 700
      font-size: 32px
      margin-block: 0


    img
      width: 60%
      margin-bottom: 5%
    span
      display: flex
      p
        color: #08959f
        font-weight: 700
        font-size: 32px
        margin-right: 5px
        margin-block: 0
</style>
