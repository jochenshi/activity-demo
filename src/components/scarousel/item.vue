<template>
  <!--这是走马灯内部的切换元素,在点击切换的时候切换的是这部分内容-->
  <div
    :class = "{
      'is_active': active,
      'is_in_stage': inStage,
      'is_hover': hover,
      'is_animating': animating
    }"
    :style="{
      transform: `translateX(${ translate }px) scale(${ scale })`
    }"
    class="s_carousel_item">
    <!--<div
      v-show="!active"
      class="s_carousel_mask">
    </div>-->
    <slot></slot>
  </div>
</template>
<script>
  //const CARD_SCALE = 0.83;
  export default {
    name: 'SCarouselItem',
    data () {
      return {
        hover: false,
        active: false,
        inStage: false,
        ready: false,
        animating: false,
        scale: 1,
        translate: 0
      }
    },
    methods: {
      // 根据此时所处的不同的位置给各个item设置合适的偏移位置
      processIndex (index, activeIndex, length) {
        if (activeIndex === 0 && index === length - 1) {
          return -1;
        } else if (activeIndex === length - 1 && index === 0) {
          return length;
        } else if (activeIndex - index > 1 && activeIndex - index >= length / 2) {
          return length + 1;
        } else if (index - activeIndex > 1 && index - activeIndex >= length / 2) {
          return -2;
        }
        return index
      },
      calculateTranslate (index, activeIndex, parentWidth) {

      },
      // 计算合理的偏移位置
      translateItem (index, activeIndex, oldIndex) {
        const parentWidth = this.$parent.$el.offsetWidth;
        const length = this.$parent.items.length;
        if (this.$parent.type !== 'card' && oldIndex !== undefined) {
          this.animating = index === activeIndex || index === oldIndex
        }
        if (index !== activeIndex && length > 2) {
          index = this.processIndex(index, activeIndex, length);
        }
        if (this.$parent.type === 'card') {} else {
          this.active = index === activeIndex;
          this.translate = parentWidth * (index - activeIndex)
        }
        this.ready = true
      }
    },
    created () {
      this.$parent && this.$parent.updateItems()
    }
  }
</script>
<style lang="stylus" src="./style.styl"></style>
