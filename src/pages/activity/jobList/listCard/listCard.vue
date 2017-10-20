<template>
  <div class="list_card">
    <div class="menu_header" @click="handleVisible">
      <i class="iconfont s-arrowright" :class="{'clicked': isClicked}"></i>
      <span class="job_title">职位{{index}}</span>
      <div class="job_num">
        <span>singer</span>
        (
        <span class="confirmed">1</span>
        /
        <span class="remain">3</span>
        )
      </div>
    </div>
    <s-fold-transition>
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
    </s-fold-transition>
  </div>
</template>
<script>
  import SFoldTransition from '../../../../common/transition/foldTransition'
  export default {
    name: 'ListCard',
    data () {
      return {
        showChild: false,
        isClicked: false
      }
    },
    methods: {
      handleVisible () {
        this.showChild = !this.showChild;
        this.isClicked = !this.isClicked
      }
    },
    props: ['info', 'index'],
    components: {SFoldTransition}
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
