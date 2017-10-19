<template>
  <div class="home_page">
    <mt-header fixed title="固定在顶部">
      <mt-button slot="left">南京</mt-button>
      <mt-button slot="right" @click="handleClick">发布</mt-button>
    </mt-header>
    <div
      @scroll="handleScroll"
      class="home_content normal_content">
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
          <section v-show="currentTitle === 'now' && !showLoading"
                   class="going_activity">
            <s-job-card v-for="item in 10"
                        @click.native="clickCard"
                        :key="item"
                        :info="testData"
                        :style="{'display':'inline-block','width':'100%','border':'1px solid #e3e3e3'}"></s-job-card>
          </section>
          <section v-show="currentTitle === 'history' && !showLoading"
                   class="history_activity">
            <s-job-card v-for="item in 10" :key="item" :info="testData" :style="{'display':'inline-block','width':'100%','border':'1px solid #e3e3e3'}"></s-job-card>
          </section>
          <section class="loading_class" v-show="showLoading">加载中</section>
        </div>
      </div>
    </div>
    <alert-card>
      <div slot="content">test content</div>
    </alert-card>
  </div>
</template>
<script>
  import SCarousel from '../../components/scarousel/scarousel.vue'
  import SCarouselItem from '../../components/scarousel/item.vue'
  import SJobCard from '../../components/jobCard/jobcard.vue'
  import AlertCard from '../../components/alert/alertBox.vue'
  import * as localData from '../../service/tempData/tempData'
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
        testData: {},
        showLoading: true
      }
    },
    methods: {
      handleClick () {
        alert(111)
      },
      clickCard () {
        this.$router.push('detailActivity');
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
      this.testData = localData.singleJob;
      this.showLoading = false;
      /*setTimeout(() => {
        this.testData = localData.singleJob;
        this.showLoading = false;
      }, 3000)*/
    },
    components: {
      SCarousel,
      SCarouselItem,
      SJobCard,
      AlertCard
    }
  }
</script>
<style lang="stylus" src="./home.styl"></style>
