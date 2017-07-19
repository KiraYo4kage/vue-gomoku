<template>
  <div id="chessboard">
    <!-- 棋盘区开始 -->
    <div id="boundary">
      <Coordinate v-for="(item,index) in cols" :key="index" :text="item" :style='"left:"+(15+50*index)+"px"'/>
      <Coordinate v-for="i in rows+1" :key="i" :text="i" :style='"top:"+(15+50*(i-1))+"px"'/>
    </div>
    <Point v-for="(item,index) in point" :key="index" :style="item"/>
    <div class="row" v-for="i in rows" :key="i">
      <Square v-for="i in rows" :key="i"/>
    </div>
    <!-- 棋盘区结束 -->

    <!-- 下棋区开始 -->
    <Play></Play>
    <!-- 下棋区结束 -->
  </div>
</template>

<script>
import Square from './Square'
import Coordinate from './Coordinate'
import Point from './Point'
import Play from './Play'

let model = {
  rows: 14,
  cols: ['A','B','C','D','E','F','G','H','i','j','K','L','M','N','O'],
  point: [
    {top:'145px',left:'145px'},
    {top:'145px',left:'545px'},
    {top:'545px',left:'145px'},
    {top:'545px',left:'545px'},
    {top:'345px',left:'345px'}
  ]
}
export default {
  name: 'chessboard',
  data() {
    return model;
  },
  components: {Square,Coordinate,Point,Play}
}
</script>
<style scoped>
  #chessboard{
    position: relative;
    margin: 20px auto;
    width: 700px;
    height:700px;
    display: flex;
    background: linear-gradient(-135deg, darkorange, sandybrown);
    border: 1px solid #000;
    flex-direction: column;
    align-items: stretch;
  }
  #boundary{
    position: absolute;
    width: 750px;
    height:750px;
    background: linear-gradient(-135deg, darkorange, sandybrown);
    z-index: -1;
    margin-top: -25px;
    margin-left: -25px;
  }
  .row{
    flex: 1;
    display: flex;
  }
</style>
