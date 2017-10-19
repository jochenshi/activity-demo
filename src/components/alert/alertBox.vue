<template>
  <div class="alert_wrapper">
    <div class="alert_box">
      <div class="alert_header">
        <slot name="header"></slot>
      </div>
      <div class="alert_content">
        <slot name="content"></slot>
      </div>
      <div class="alert_bottom">
        <button class="confirm">{{confirmBtn.text}}</button>
        <button class="cancel">{{cancelBtn.text}}</button>
        <!--<slot name="bottom"></slot>-->
      </div>
    </div>
    <div class="alert_model"></div>
  </div>
</template>
<script>
  export default {
    name: 'AlertBox',
    data () {
      return {
        cancelBtn: {
          text: '取消'
        },
        confirmBtn: {
          text: '确认'
        }
      }
    },
    props: {
      header: {

      }
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
