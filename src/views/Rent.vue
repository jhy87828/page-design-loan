<script>
import Image1 from "../static/images/sub-5.png";

import SectionSubInfo2 from "../components/SectionSubInfo2.vue";
import Form1 from "../components/Form1.vue";

export default {
  name: "Rent",
  components: { SectionSubInfo2, Form1 },
  data: () => {
    return {
      image1: Image1,
      items1: [
        "만 20세 이상",
        "전, 월세 거주자",
        "(회생, 파산, 회복자, 소득이 없어도 가능)",
      ],
      items2: [
        "한도 : 최소 100만원 ~ 최대 8,000원(개인별 차등)",
        "금리 : 최대 연 20% 이내",
        "기간 : 최소 1개월 ~ 최대 60개월",
      ],
      items3: ["리볼빙방식", "중도상환 수수료 및 취급수수료 X"],
    };
  },
};
</script>

<template>
  <section>
    <h2>전월세 거주자라면!</h2>
    <h1>디자인론 전월세 신용대출</h1>
    <h3>아파트, 빌라, 다가구주택, 임대아파트 등</h3>
    <h3>주거 및 사업장 보증금 500만원 이상이면</h3>
    <h3>최대 95%까지 대출가능!</h3>
    <h3>상상론 전월세 신용대출</h3>
    <img :src="image1" />
    <span style="display: flex; flex-direction: column; align-items: center"
      ><p style="color: #08959f">1. 신규 입주자금 신청</p>

      <p style="color: #08959f">2. 보증금대출 (주거 및 사업장)</p>
      <p style="color: #f47500">모두 대출가능!</p></span
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
      font-size: 24px
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
