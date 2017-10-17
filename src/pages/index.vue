<template>
  <div class="index_page">
    <router-view></router-view>
    <mt-tabbar class="modified_tabbar" v-model="selectNav">
      <mt-tab-item id="home">首页</mt-tab-item>
      <mt-tab-item id="message">消息</mt-tab-item>
      <mt-tab-item id="personal">我</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
        headerFixed: false,
        testData: {},
        selectNav: 'home'
      }
    },
    watch: {
      selectNav (val) {
        this.$router.push(val);
      }
    },
    methods: {
      handleClick () {
        alert(111)
      },
      changeRouter (route) {
        console.log(route);
        this.$router.push(route);
      }
    },
    mounted () {
      this.selectNav = this.$route.name;
    }
  }
</script>
<style lang="stylus" src="./index.styl"></style>
