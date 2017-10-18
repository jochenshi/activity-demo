<template>
  <div>
    <header v-if="header"></header>
    <div></div>
  </div>
</template>
<script>
  export default {
    name: 'FoldCard',
    data () {
      return {}
    },
    props: {
      header: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
