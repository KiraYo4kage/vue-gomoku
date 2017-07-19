<template>
  <div id="layout">
    <Tip v-if="showTip" :content="tips"></Tip>
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
import Tip from './Tip'
import bus from '../store/bus.js'
import store from '../store/store.js'

export default {
  name: 'layout',
  data() {
    return store.state;
  },
  components: {Chessboard,Buttons,Tip},
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
  margin-top: 50px;
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
