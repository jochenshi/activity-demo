<template>
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
        <s-job-card v-for="item in 10" :key="item" :info="testData" :style="{'display':'inline-block','width':'100%','border':'1px solid #e3e3e3'}"></s-job-card>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {}
    }
  }
</script>
