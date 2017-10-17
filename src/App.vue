<template>
  <div id="app" class="a">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
html, body{
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.normal_content{
  padding: 40px 0 50px 0;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
