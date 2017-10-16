<template>
  <div class="s_card">
    <div class="card_top">
      <span class="card_title" :title="info.title">{{info.title}}</span>
    </div>
    <div class="card_content">
      <div class="content_left">
        <div class="time_section">{{last_time}}</div>
        <div class="label_section">
          <span v-for="(item, key) in info.occupations"
                :class="{'is_active': item.remain_num > 0}"
                :key="key">{{item.occupation}}</span>
        </div>
      </div>
      <div class="content_right">
        <div class="list">
          <span class="sign_label label">火热报名中</span>
          <span class="text">{{info.sign_num}}</span>
        </div>
        <div class="confirm_info list">
          <span class="confirm_label label">确认已完成</span>
          <span class="text">{{confirmed_info}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SJobCard',
    props: {
      info: Object, //单条信息
      id: Number,
      jobs: Array,
      sign: Number,
      confirmed: Object, //{needed: '', confirmed: ''}
      title: String
    },
    //props: ['info'],
    data () {
      return {}
    },
    computed: {
      last_time () {
        return this.info.start_time + '-' + this.info.end_time;
      },
      confirmed_info () {
        let total = 0;
        let confirmed = 0;
        this.info.occupations.forEach((val) => {
          total += val.total_num;
          confirmed += val.signed_num;
        })
        return confirmed + '/' + total;
      }
    },
    mounted () {
      this.$nextTick(() => {
        //console.log(this.info)
      })
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
