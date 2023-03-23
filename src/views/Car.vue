<script>
import Image1 from "../static/images/sub-car-1.png";

import SectionSubInfo2 from "../components/SectionSubInfo2.vue";
import Form1 from "../components/Form1.vue";

export default {
  name: "Car",
  components: { SectionSubInfo2, Form1 },
  data: () => {
    return {
      image1: Image1,
      items1: [
        "만 20세 이상",
        "본인 명의 자동차소유고객",
        "(차종, 연식 관계 X)",
      ],
      items2: [
        "한도 : 최소 100만원 ~ 최대 5,000만원(개인별 차등)",
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
    <h2>무입고! 무방문!</h2>
    <h1>상상론 자동차 담보대출</h1>
    <h3>차종관계없이 타던차 그대로 상상론 자동차담보대출!</h3>
    <img :src="image1" />
    <span
      ><p style="color: #08959f">본인 명의</p>
      <p style="color: #f47500">자동차 소유자라면!</p></span
    >
    <span
      ><p style="color: #08959f">타던 차 그대로</p>
      <p style="color: #f47500">시세 100% 대출가능!</p></span
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
