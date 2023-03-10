<script>
import Image1 from "../static/images/image21.png";
import Image2 from "../static/images/image22.png";
import Image3 from "../static/images/image23.png";
import Image4 from "../static/images/image24.png";
import Image5 from "../static/images/image25.png";

export default {
  data: () => {
    return {
      image1: Image1,
      items1: [
        { image: Image2, step: "step 02", detail: "상담원 상담" },
        { image: Image3, step: "step 03", detail: "대출심사" },
        { image: Image4, step: "step 04", detail: "대출승인" },
        { image: Image5, step: "step 05", detail: "당일송금" },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="title">
      <h1>디자인론만의</h1>
      <h1 style="font-weight: 700">쉽고 특별한</h1>
      <h1>대출절차</h1>
    </div>
    <span class="process">
      <div class="content">
        <div><img style="margin-left: 13px" :src="image1" /></div>
        <span>
          <p class="step">step 01</p>
          <p class="detail">대출상담 신청</p>
        </span>
      </div>
      <div v-for="(item, index) in items1" :key="index" class="content">
        <div><img style="margin-left: 3px" :src="item.image" /></div>
        <span>
          <p class="step">{{ item.step }}</p>
          <p class="detail">{{ item.detail }}</p>
        </span>
      </div>
      <!-- <div>
        <div><img style="margin-left: 3px" :src="image3" /></div>
        <p></p>
      </div>
      <div>
        <div><img style="margin-left: 3px" :src="image4" /></div>
        <p></p>
      </div>
      <div>
        <div><img style="margin-left: 3px" :src="image5" /></div>
        <p></p>
      </div> -->
    </span>
  </section>
</template>

<style scoped lang="sass">
section
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    color: #333
    padding-block: 5%
    .title
        display: flex
        flex-direction: row
        align-items: center
        padding-inline: 2%
        h1
            margin-right: 5px
            font-weight: 400
            margin-block: 10px
    .process
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        .content
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            margin-inline: 3%
            div
                width: 90px
                height: 80px
                display: flex
                align-items: center
                justify-content: center
                border: 1px solid #949494
                border-radius: 70%
                padding: 10%
                img
                    width: 40px
                    height: 40px
            span
                display: flex
                flex-direction: column
                align-items: center
                p

                    padding: 0
                    line-height: 1.3em
                .step
                    margin-top: 15%
                    margin-bottom: 0
                    font-size: 15px
                    font-weight: 600
                .detail
                    margin-top: 1%
                    font-size: 20px
                    font-weight: 400
</style>
