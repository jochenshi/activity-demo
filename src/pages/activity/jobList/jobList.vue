<template>
  <div class="job_list">
    <header class="title">
      已确认出活(
      <span>2</span>
      /
      <span>7</span>
      )
    </header>
    <div class="list_content">
      <list-card v-for="(item, index) in testData" :index="index + 1" :info="item" :key="index"></list-card>
      <!--<ul class="list_wrapper">
        <li v-for="item in 6"
            class="list_menu"
            :key="item">
          <div class="menu_header">
            <i class="iconfont s-arrowright">职位{{item}}</i>
            <div class="job_num">
              <span>singer</span>
              (
              <span class="confirmed">1</span>
              /
              <span class="remain">3</span>
              )
            </div>
          </div>
          <ul class="sub_list">
            <li v-for="item in 2"
                class="sub_list_li"
                :key="item">
              <div class="head_pic"></div>
              <div class="user_info">
                <p>asd</p>
                <p>金牌活友</p>
              </div>
              <span class="price">￥{{item}}</span>
            </li>
          </ul>
        </li>
      </ul>-->
    </div>
  </div>
</template>
<script>
  import ListCard from './listCard/listCard.vue'
  export default {
    name: 'JobList',
    data () {
      return {
        testData: [
          {
            text: 'asd',
            value: 'dd'
          },
          {
            text: 'asd',
            value: 'dd'
          },
          {
            text: 'asd',
            value: 'dd'
          }
        ]
      }
    },
    components: {
      ListCard
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
