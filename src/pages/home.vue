<template>
  <div class="home_page">
    <mt-header fixed title="固定在顶部">
      <mt-button slot="left">南京</mt-button>
      <mt-button slot="right" @click="handleClick">发布</mt-button>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar class="modified_tabbar" >
      <mt-tab-item>首页</mt-tab-item>
      <mt-tab-item>消息</mt-tab-item>
      <mt-tab-item>我</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import SCarousel from '../components/scarousel/scarousel.vue'
  import SCarouselItem from '../components/scarousel/item.vue'
  import SJobCard from '../components/jobCard/jobcard.vue'
  import * as localData from '../service/tempData/tempData'
  export default {
    name: 'home',
    data () {
      return {
        title: [
          {text: '出活记录', value: 'history'},
          {text: '正在出活', value: 'now'}
        ],
        currentTitle: 'now',
        headerFixed: false,
        testData: {}
      }
    },
    methods: {
      handleClick () {
        alert(111)
      },
      handleTitleClick (item) {
        this.currentTitle = item.value;
      },
      handleScroll () {
        const containerScroll = document.getElementsByClassName('home_content')[0].scrollTop;
        if (containerScroll >= 180) {
          this.headerFixed = true;
        } else {
          this.headerFixed = false;
        }
      }
    },
    mounted () {
      console.log(localData.singleJob)
      this.testData = localData.singleJob;
    },
    components: {SCarousel, SCarouselItem, SJobCard}
  }
</script>
<style lang="stylus" src="./home.styl"></style>
