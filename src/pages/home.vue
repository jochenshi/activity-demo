<template>
  <div class="home_page">
    <mt-header fixed title="固定在顶部">
      <mt-button slot="left">asd</mt-button>
      <mt-button slot="right" @click="handleClick">发布</mt-button>
    </mt-header>
    <div class="home_content">
      <s-carousel class="top_slide">
        <s-carousel-item v-for="item in 6" :key="item">
          <img :src="'../../static/' + item + '.jpg'" alt="">
        </s-carousel-item>
      </s-carousel>
      <div class="body_content">
        <header>
          <div v-for="(item, index) in title">
            <span
              @click="handleTitleClick(item)"
              :class="{'is_active': currentTitle === item.value}"
              :key="index">{{item.text}}</span>
          </div>
        </header>
        <div class="list_content"></div>
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
        currentTitle: 'now'
      }
    },
    methods: {
      handleClick () {
        alert(111)
      },
      handleTitleClick (item) {
        this.currentTitle = item.value;
      }
    },
    components: {SCarousel, SCarouselItem}
  }
</script>
<style lang="stylus" src="./home.styl"></style>
