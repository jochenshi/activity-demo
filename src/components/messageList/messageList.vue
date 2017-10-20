<template>
  <div class="wrapper">
    <div class="head_pic"></div>
    <div class="message_content">
      <div class="top_content">
        <span class="name">tom</span>
        <span class="star_judge">xxx</span>
        <span class="level">金牌活友</span>
      </div>
      <div class="bottom_content">
        <span class="label">报名了</span>
        <span class="quote">"</span>
        <span class="activity_name">{{info.activity_name}}</span>
        <span class="quote">"</span>
        <span class="suffix">活动</span>
      </div>
    </div>
    <div class="time">{{info.time}}</div>
  </div>
</template>
<script>
  const testData = {
    id: 1,
    headImg: '',
    name: 'namexxx',
    star_level: 4.5,
    level: 1800,
    activity_name: '10.18号，新街口春饼店开业，需要鼓手歌手各3名。',
    time: '两天前'
  }
  export default {
    name: 'SMessageList',
    data () {
      return {
        info: testData
      }
    },
    props: {}
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
