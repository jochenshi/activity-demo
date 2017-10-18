<template>
  <div class="list_card">
    <div class="menu_header">
      <i class="iconfont s-arrowright">职位{{index}}</i>
      <div class="job_num">
        <span>singer</span>
        (
        <span class="confirmed">1</span>
        /
        <span class="remain">3</span>
        )
      </div>
    </div>
    <ul class="sub_list" v-if="info">
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
  </div>
</template>
<script>
  export default {
    name: 'ListCard',
    data () {
      return {}
    },
    props: ['info', 'index']
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
