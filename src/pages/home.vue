<template>
  <div class="home_page">
    <mt-header fixed title="固定在顶部">
      <mt-button slot="left">asd</mt-button>
      <mt-button slot="right" @click="handleClick">发布</mt-button>
    </mt-header>
    <div
      @scroll="handleScroll"
      class="home_content">
      <s-carousel class="top_slide">
        <s-carousel-item v-for="item in 6" :key="item">
          <img :src="'../../static/' + item + '.jpg'" alt="">
        </s-carousel-item>
      </s-carousel>
      <div class="body_content">
        <header :class="{'header_fixed': headerFixed}">
          <div v-for="(item, index) in title">
            <span
              @click="handleTitleClick(item)"
              :class="{'is_active': currentTitle === item.value}"
              :key="index">{{item.text}}</span>
          </div>
        </header>
        <div class="list_content">
          <div v-for="item in 10" :key="item" :style="{'display':'inline-block','width':'100%','height':'100px','border':'1px solid #e3e3e3'}"></div>
        </div>
      </div>
    </div>
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
  export default {
    name: 'home',
    data () {
      return {
        title: [
          {text: '出活记录', value: 'history'},
          {text: '正在出活', value: 'now'}
        ],
        currentTitle: 'now',
        headerFixed: false
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
        console.log(111);
        var containerScroll = document.getElementsByClassName('home_content')[0].scrollTop;
        if (containerScroll >= 180) {
          this.headerFixed = true;
        } else {
          this.headerFixed = false;
        }
      }
    },
    mounted () {},
    components: {SCarousel, SCarouselItem}
  }
</script>
<style lang="stylus" src="./home.styl"></style>
