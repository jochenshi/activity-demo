<template>
  <div class="s_carousel">
    <div
      @mouseenter = "handleMouseEnter"
      @mouseleave = "handleMouseLeave"
      class="s_carousel_container">
      <!--the switch arrow in the right and left areas-->
      <transition name="s_carousel_arrow_left">
        <button
          v-if="arrow !== 'never'"
          v-show="arrow === 'always' || hover"
          class="s_carousel_arrow s_carousel_arrow_left">
          <i class="s_icon_left"></i>
        </button>
      </transition>
      <transition name="s_carousel_arrow_right">
        <button
          v-if="arrow !== 'never'"
          v-show="arrow === 'always' || hover"
          class="s_carousel_arrow s_carousel_arrow_right">
          <i class="s_icon_right"></i>
        </button>
      </transition>
      <!--the area accept carousel content-->
      <slot></slot>
    </div>
    <!--the switch and indicator area in the bottom-->
    <ul class="s_carousel_indicators">
      <li
        class="s_carousel_indicator"
        v-for="(item, index) in items">
        <button class="s_carousel_button">
          <span></span>
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
      arrow: {
        type: String,
        default: 'hover'
      }
    },
    data () {
      return {
        items: [],
        hover: false,
        activeIndex: -1
      }
    },
    computed: {
      hasLabel () {
        return this.items.some((item) => item.label.toString().length > 0)
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
      }
    },
    methods: {
      handleMouseEnter () {
        this.hover = true
      },
      handleMouseLeave () {
        this.hover = false
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
        this.setActiveItem(this.activeIndex + 1);
      },
      next () {
        this.setActiveItem(this.activeIndex - 1);
      }
    },
    mounted () {
      this.updateItems();
    }
  }
</script>
<style lang="stylus" src="./style.styl"></style>
