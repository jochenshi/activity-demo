<template>
  <div
    :class = "{
      'is_active': active,
      'is_in_stage': inStage,
      'is_hover': hover
    }"
    class="s_carousel_item">
    <div
      v-show="!active"
      class="s_carousel_mask"></div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'SCarouselItem',
    data () {
      return {
        hover: false,
        active: false,
        inStage: false
      }
    }
  }
</script>
