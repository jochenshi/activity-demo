<template>
  <div>
    <mt-header fixed title="发布">
      <mt-button slot="left" @click="goBack">返回</mt-button>
      <mt-button slot="right">草稿箱</mt-button>
    </mt-header>
    <s-header>
      <div slot="left" @click="goBack">返回</div>
      <div slot="right">分享</div>
    </s-header>
    <div class="add_body"></div>
    <div class="add_bottom"></div>
  </div>
</template>
<script>
  export default {
    name: 'AddActivity',
    data () {
      return {}
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
