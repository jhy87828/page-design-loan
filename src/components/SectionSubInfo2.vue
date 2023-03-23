<script>
export default {
  name: "SectionSubInfo2",
  props: {
    Items1: { type: Array, default: () => [] },
    Items2: { type: Array, default: () => [] },
    Items3: { type: Array, default: () => [] },
  },
  data() {
    return {
      items1: this.Items1,
      items2: this.Items2,
      items3: this.Items3,
    };
  },
};
</script>

<template>
  <section>
    <div>
      <h2>+</h2>
      <h3>대상</h3>
      <div v-for="(item, index) in items1" :key="index">
        <p>{{ item }}</p>
      </div>
    </div>
    <div>
      <h2>+</h2>
      <h3>대출내용</h3>
      <div>
        <p v-for="(item, index) in items2" :key="index">{{ item }}</p>
      </div>
    </div>
    <div>
      <h2>+</h2>
      <h3>상환방식</h3>
      <div>
        <p v-for="(item, index) in items3" :key="index">{{ item }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
section
    margin-block: 0
    padding-top: 0 !important
    display: flex
    flex-direction: column
    div
        width: 80%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        color: #208085
        border: 1px dashed #c8c8c8
        padding-inline: 5%
        padding-block: 5%
        margin-block: 3%
        h2
            color: #aaccc8
            font-size: 36px
            line-height: 0.2em
            margin: 0
            padding: 0
        h3
            font-size: 20px
            font-weight: 700
            margin-bottom: 1%
        div
            border: none
            padding: 0
            margin: 0
            p
                font-size: 14px
                font-weight: 600
                padding: 0
                margin: 0

@media (min-width: 1024px)
  section
      margin-block: 0
      padding-top: 0 !important
      display: flex
      flex-direction: column
      div
          width: 70%
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          color: #208085
          border: 1px dashed #c8c8c8
          padding-inline: 5%
          padding-block: 2%
          margin-block: 3%
          h2
              color: #aaccc8
              font-size: 42px
              line-height: 0.1em
              margin: 0
              padding: 0
          h3
              font-size: 36px
              font-weight: 700
              margin-bottom: 1%
          div
              border: none
              padding: 0
              margin: 0
              p
                  font-size: 20px
                  font-weight: 600
                  padding: 0
                  margin: 0
</style>
