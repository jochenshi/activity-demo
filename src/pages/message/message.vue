<template>
  <div class="message_page">
    <mt-header fixed title="消息">
      <mt-button slot="right">推送设置</mt-button>
    </mt-header>
    <div class="message_content normal_content">
      <ul class="message_title">
        <li v-for="(item, index) in titles" :key="index">{{item.text}}<i class="iconfont s-more"></i></li>
      </ul>
      <s-message-list></s-message-list>
    </div>
  </div>
</template>
<script>
  import SMessageList from '../../components/messageList/messageList.vue'
  export default {
    name: 'Message',
    data () {
      return {
        titles: [
          {text: '新的报名', value: 'newSign'},
          {text: '新的活友确认', value: 'newConfirm'},
          {text: '新的评价', value: 'newJudge'},
          {text: '系统消息', value: 'systemInfo'}
        ]
      }
    },
    components: {
      SMessageList
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
