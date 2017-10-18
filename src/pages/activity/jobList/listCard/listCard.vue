<template>
  <div class="list_card">
    <div class="menu_header">
      <i class="iconfont s-arrowright" @click="handleVisible">职位{{index}}</i>
      <div class="job_num">
        <span>singer</span>
        (
        <span class="confirmed">1</span>
        /
        <span class="remain">3</span>
        )
      </div>
    </div>
    <transition>
      <ul class="sub_list" v-if="info" v-show="showChild">
        <li v-for="(item, index) in info" :key="index" class="sub_list_info">
          <div class="head_pic"></div>
          <div class="user_info">
            <p>asd</p>
            <p>金牌活友</p>
          </div>
          <span class="price">￥{{item}}</span>
        </li>
      </ul>
      <ul v-if="!info">暂无数据</ul>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'ListCard',
    data () {
      return {
        showChild: false
      }
    },
    methods: {
      handleVisible () {
        this.showChild = !this.showChild;
      }
    },
    props: ['info', 'index']
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
