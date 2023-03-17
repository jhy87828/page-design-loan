<script>
// import Header2Dep1 from "./components/Header2Dep1.vue";
import SectionBanner1 from "../components/SectionBanner1.vue";
import SectionForm1 from "../components/SectionForm1.vue";
import SectionInfo1 from "../components/SectionInfo1.vue";
import SectionInfo2 from "../components/SectionInfo2.vue";
import SectionInfo3 from "../components/SectionInfo3.vue";
// import Footer from "./components/Footer.vue";

// import Sample from "../components/Sample.vue";

export default {
  name: "Main",
  components: {
    SectionBanner1,
    SectionForm1,
    SectionInfo1,
    SectionInfo2,
    SectionInfo3,
  },
};
</script>

<template>
  <!-- <Sample /> -->
  <!-- <Header2Dep1 /> -->
  <SectionBanner1 />
  <SectionForm1 />
  <SectionInfo1 />
  <SectionInfo2 />
  <SectionInfo3 />
  <!-- <Footer /> -->
</template>

<style scoped></style>
