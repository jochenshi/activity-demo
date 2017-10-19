<template>
  <div class="detail_activity">
    <mt-header fixed title="正在出活">
      <mt-button icon="back" slot="left" @click="goBack"></mt-button>
      <i class="iconfont s-share" slot="right"></i>
    </mt-header>
    <div class="detail_body normal_content">
      <activity-header></activity-header>
      <div class="filter_area">
        <span>已有100名活友报名活动，等待您的筛选</span>
        <button>筛选</button>
      </div>
      <job-list></job-list>
    </div>
  </div>
</template>
<script>
  import ActivityHeader from './activityHeader/activityHeader.vue'
  import JobList from './jobList/jobList.vue'
  export default {
    name: 'DetailActivity',
    data () {
      return {}
    },
    methods: {
      goBack () {
        this.$router.go('-1')
      }
    },
    components: {
      ActivityHeader,
      JobList
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
