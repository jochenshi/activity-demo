<template>
  <div class="s_tree_node">
    <div class="s_tree_node_content">
      <span class="s_tree_node_icon iconfont s-arrowright"></span>
      <input type="checkbox">
      <span class="tree_label">this is the tree title</span>
    </div>
    <div class="s_tree_node_children"
         v-if="childNode">
      <s-tree-node></s-tree-node>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'STreeNode',
    data () {
      return {
        childNode: false,
        expanded: false
      }
    },
    props: {
      node: {
        default () {
          return {}
        }
      }
    },
    watch: {
      'node.expanded' (val) {
        this.$nextTick(() => { this.expanded = val });
        if (val) {
          this.childNode = true;
        }
      }
    }
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
