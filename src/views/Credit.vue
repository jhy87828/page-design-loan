<script>
import Image1 from "../static/images/sub-6.png";
import SectionSubInfo2 from "../components/SectionSubInfo2.vue";
import Form1 from "../components/Form1.vue";

export default {
  name: "Credit",
  components: { SectionSubInfo2, Form1 },
  data: () => {
    return {
      image1: Image1,
      items1: [
        "만 20세 이상(소득증빙 확인서)",
        "신용등급 7~10등급 사이",
        "(신용불량자, 채무불이행자 불가)",
      ],
      items2: [
        "한도 : 최소 100만원 ~ 최대 3,000만원(개인별 차등)",
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
    <h2>본인 명의 부동산소유자라면!</h2>
    <h1>디자인론 부동산 담보대출</h1>
    <h3>전, 월세 보증금 담보로도 대출가능!</h3>
    <img :src="image1" />
    <span> <p style="color: #f47500">9등급, 10등급도</p></span>
    <span
      ><p style="color: #08959f; font-size: 22px">연체만 없으면</p>
      <p style="color: #f47500; font-size: 22px">진행가능!</p></span
    >
  </section>
  <SectionSubInfo2 :Items1="items1" :Items2="items2" :Items3="items3" />
  <Form1 />
</template>

<style scoped lang="sass">
section
  // background-image: url('../static/images/background-2.png')

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
    width: 60%
    margin-block: 5%
    // padding-bottom: 50px
  span
    margin-top: 1%
    display: flex
    p
      font-weight: 600
      font-size: 18px
      margin-right: 5px
      margin-block: 1%
</style>
