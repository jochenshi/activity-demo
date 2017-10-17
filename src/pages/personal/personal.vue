<template>
  <div>
    <mt-header fixed title="我">
      <i class="iconfont s-set" slot="right"></i>
    </mt-header>
    <div class="personal_content normal_content">
      <div class="self_info"></div>
      <ul class="other_info">
        <li></li>
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
