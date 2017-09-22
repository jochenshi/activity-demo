<template>
  <div class="home_page">
    <mt-header fixed title="固定在顶部">
      <mt-button slot="left">asd</mt-button>
      <mt-button slot="right" @click="handleClick">发布</mt-button>
    </mt-header>
    <div class="home_content">
      <div class=""></div>
    </div>
    <mt-tabbar class="modified_tabbar" >
      <mt-tab-item>首页</mt-tab-item>
      <mt-tab-item>消息</mt-tab-item>
      <mt-tab-item>我</mt-tab-item>
    </mt-tabbar>
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
