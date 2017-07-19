<template>
  <div id="layout">
    <div id="operate">
      <Buttons text="重新开始" @click.native="restart()"></buttons>
      <Buttons text="悔棋" @click.native="regret()"></buttons>
    </div>
    <Chessboard/>
    <div id="statistics">

    </div>
  </div>
</template>

<script>
import Chessboard from './Chessboard'
import Buttons from './Buttons'
import bus from '../store/bus.js'
import store from '../store/store.js'
let model = {

}
export default {
  name: 'layout',
  data() {
    return model;
  },
  components: {Chessboard,Buttons},
  methods: {
    restart: function(){
      store.commit('restart');
      // bus.$emit('restart');
    },
    regret: function(){
      store.commit('regret');
      // bus.$emit('regret');
    }
  }
}
</script>
<style>
#layout{
  display: flex;
}
#operate{
  flex: 1;
  margin-right: 25px;
}
#statistics{
  flex: 1;
  margin-left: 25px;
}
</style>
