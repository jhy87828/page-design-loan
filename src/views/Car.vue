<script>
import Image1 from "../static/images/sub-car-1.png";

import Form1 from "../components/Form1.vue";

export default {
  name: "Car",
  components: { Form1 },
  data: () => {
    return {
      image1: Image1,
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
    <Form1 />
  </section>
</template>

<style scoped lang="sass">

section
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    img
        width: 60%
</style>
