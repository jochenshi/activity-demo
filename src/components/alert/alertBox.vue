<template>
  <div class="alert_wrapper" v-show="visible">
    <div class="alert_box">
      <div class="alert_header">
        <!--<slot name="header"></slot>-->
        <div class="header_title">{{header_text}}</div>
      </div>
      <div class="alert_content">
        <slot name="content"></slot>
        <div v-if="!is_content">{{message}}</div>
      </div>
      <div class="alert_bottom" v-show="showBottom">
        <button class="cancel"
                @click="handleAction('cancel')"
                v-if="showCancelBtn">
          {{cancelBtnText}}
        </button>
        <button class="confirm"
                @click="handleAction('confirm')"
                v-if="showConfirmBtn">
          {{confirmBtnText}}
        </button>
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
        showCancelBtn: true,
        showConfirmBtn: true,
        cancelBtnText: '取消',
        confirmBtnText: '确认',
        showHeader: false,
        visible: true,
        message: '',
        afterClose: null
      }
    },
    props: {
      header_text: {
        type: String,
        default: '提示'
      },
      show_alert: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleAction (type) {
        this.close();
        if (type === 'confirm') {
          if (typeof this.afterClose === 'function') {
            this.afterClose();
          }
        }
      },
      close () {
        this.visible = false;
      }
    },
    computed: {
      showBottom () {
        return this.showCancelBtn || this.showConfirmBtn
      },
      is_content () {
        return this.$slots.content;
      }
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
