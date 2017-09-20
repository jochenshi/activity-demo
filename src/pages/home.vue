<template>
  <div class="home_page">
    <mt-header fixed title="固定在顶部">
      <mt-button slot="left">asd</mt-button>
      <mt-button slot="right" @click="handleClick">发布</mt-button>
    </mt-header>
    <div class="body_content"></div>
    <div class="bottom_foot"></div>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {}
    },
    methods: {
      handleClick () {
        alert(111)
      }
    }
  }
</script>
<style lang="stylus" src="./home.styl"></style>
