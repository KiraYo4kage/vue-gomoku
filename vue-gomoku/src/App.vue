<template>
  <div id="app">
    <router-link v-for="item in menu" :key="item.name" :to="item.url">{{item.name}}</router-link>
    <!-- <router-link to="/Layout">路由二</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Buttons from './components/Buttons'

export default {
  name: 'app',
  components: {},
  data(){
    return { menu:{} };
  }
}
</script>
<style scoped>
div>a {
  color: #42b983;
  padding: 0 10px;
}
</style>
