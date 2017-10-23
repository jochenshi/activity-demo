<template>
  <div>
    <s-tree-node></s-tree-node>
  </div>
</template>
<script>
  /*const testData = {
    id: '1',
    label: '一级1',
    children: [

    ]
  };*/
  import STreeNode from './treenode.vue'
  export default {
    name: 'STree',
    data () {
      return {}
    },
    components: {STreeNode}
  }
</script>
<style lang="stylus" src="./style.styl" scoped></style>
