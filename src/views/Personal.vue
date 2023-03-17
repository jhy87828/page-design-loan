<script>
import Image1 from "../static/images/sub-people-1.png";

export default {
  name: "Personal",
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
    width: 70%
</style>
