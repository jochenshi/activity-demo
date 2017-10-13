<!--尚未对resize事件添加相应的处理函数以及事件-->
<template>
  <div class="s_carousel">
    <div
      @mouseenter.stop = "handleMouseEnter"
      @mouseleave.stop = "handleMouseLeave"
      class="s_carousel_container">
      <!--the switch arrow in the right and left areas-->
      <transition name="s_carousel_arrow_left">
        <button
          v-if="arrow !== 'never'"
          v-show="arrow === 'always' || hover"
          @mouseenter="handleMouseEnter"
          @click.stop="prev"
          class="s_carousel_arrow s_carousel_arrow_left">
          <i class="s_icon_left iconfont s-back"></i>
        </button>
      </transition>
      <transition name="s_carousel_arrow_right">
        <button
          v-if="arrow !== 'never'"
          v-show="arrow === 'always' || hover"
          @click.stop="next"
          class="s_carousel_arrow s_carousel_arrow_right">
          <i class="s_icon_right iconfont s-more"></i>
        </button>
      </transition>
      <!--the area accept carousel content-->
      <slot></slot>
    </div>
    <!--the switch and indicator area in the bottom-->
    <ul class="s_carousel_indicators"
        :class="{'s_carousel_indicators_outside' : indicatorPosition === 'outside' || type == 'card'}">
      <li
        v-for="(item, index) in items"
        class="s_carousel_indicator"
        :class="{'is_active': index === activeIndex}"
        @mouseenter="handleIndicatorEnter(index)"
        @mouseleave="handleIndicatorLeave"
        @click.stop="handleIndicatorClick(index)">
        <button class="s_carousel_button">
          <span v-if="hasLabel"></span>
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'SCarousel',
    props: {
      /*默认情况下显示的Carousel*/
      initialIndex: {
        type: Number,
        default: 0
      },
      indicator: {
        type: Boolean,
        default: true
      },
      indicatorPosition: String,
      trigger: {
        type: String,
        default: 'click'
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 5000
      },
      //控制是否显示切换的箭头
      arrow: {
        type: String,
        default: 'hover'
      },
      type: String
    },
    data () {
      return {
        items: [],
        hover: false,
        activeIndex: -1, //当前展示的部分
        timer: null //自动播放的轮播图的计时器
      }
    },
    computed: {
      hasLabel () {
        return false
        // return this.items.some((item) => item.label.toString().length > 0)
      }
    },
    watch: {
      activeIndex (val, oldVal) {
        this.resetItemPosition(oldVal);
        this.$emit('change', val, oldVal)
      },
      items (val) {
        if (val.length > 0) {
          this.setActiveItem(this.initialIndex)
        }
      },
      autoplay (val) {
        val ? this.startTimer() : this.pauseTimer();
      }
    },
    methods: {
      handleMouseEnter () {
        this.hover = true;
        this.pauseTimer();
      },
      handleMouseLeave () {
        this.hover = false;
        this.startTimer();
      },
      handleIndicatorClick (index) {
        this.activeIndex = index;
      },
      setActiveItem (index) {
        if (typeof index === 'string') {
          const filteredItem = this.items.filter(item => item.name === index);
          if (filteredItem.length > 0) {
            index = this.items.indexOf(filteredItem[0]);
          }
        }
        index = Number(index);
        if (isNaN(index) || index !== Math.floor(index)) {
          console.warn('[carousel] index must be integer');
          return;
        }
        let length = this.items.length;
        if (index < 0) {
          this.activeIndex = length - 1;
        } else if (index >= length) {
          this.activeIndex = 0;
        } else {
          this.activeIndex = index
        }
      },
      updateItems () {
        this.items = this.$children.filter(child => child.$options.name === 'SCarouselItem');
      },
      resetItemPosition (oldIndex) {
        this.items.forEach((item, index) => {
          item.translateItem(index, this.activeIndex, oldIndex)
        })
      },
      prev () {
        this.setActiveItem(this.activeIndex - 1);
      },
      next () {
        this.setActiveItem(this.activeIndex + 1);
      },
      playSildes () {
        if (this.activeIndex < this.items.length - 1) {
          this.activeIndex ++;
        } else {
          this.activeIndex = 0;
        }
      },
      startTimer () {
        if (this.interval <= 0 || !this.autoplay) return;
        this.timer = setInterval(this.playSildes, this.interval);
      },
      pauseTimer () {
        clearInterval(this.timer);
      },
      handleIndicatorEnter (index) {
        if (this.trigger === 'hover' && index !== this.activeIndex) {
          this.activeIndex = index
        }
        this.pauseTimer();
      },
      handleIndicatorLeave () {
        this.startTimer();
      }
    },
    created () {},
    mounted () {
      this.updateItems();
      this.$nextTick(() => {
        this.startTimer();
      })
    }
  }
</script>
<style lang="stylus" src="./style.styl"></style>
