<template>
  <div class="personal_page">
    <mt-header fixed title="我">
      <i class="iconfont s-set" slot="right"></i>
    </mt-header>
    <div class="personal_content normal_content">
      <div class="self_info">
        <div class="head_pic"></div>
        <div class="text_area">
          <ul>
            <li class="nickname">nickname</li>
            <li class="star_level">
              <span class="star"></span>
              <span class="text_label">金牌老板</span>
            </li>
          </ul>
        </div>
        <span class="label">个人资料</span>
        <i class="iconfont s-more"></i>
      </div>
      <ul class="other_info">
        <li v-for="(item, index) in titles" :key="index">
          {{item.text}}
          <i class="iconfont s-more" v-if="item.value !== 'inviteCode'"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Personal',
    data () {
      return {
        titles: [
          {text: '我的钱包', value: 'wallet'},
          {text: '我的活券', value: 'ticket'},
          {text: '我的等级', value: 'level'},
          {text: '黄马褂', value: 'behalf'},
          {text: '我的评价', value: 'evaluation'},
          {text: '我的关注', value: 'focus'},
          {text: '我的邀请码', value: 'inviteCode'}
        ]
      }
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
