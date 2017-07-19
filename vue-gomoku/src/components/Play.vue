<template>
  <div id="play">
    <div class="row" v-for="i in rows" :key="i">
      <Square v-for="j in rows" :key="j"
      :style="'border:none'"
      @click.native="click(i-1,j-1)"
      :color="color[i-1][j-1]"
      ></Square>
    </div>
  </div>
</template>

<script>
import Square from './Square'
import bus from '../store/bus.js'
import store from '../store/store.js'

// let color = [],
//     rows = 15;
// for(let i = 0; i < rows; i++){
//   color[i] = color[i] || [];
//   for(let j = 0; j < rows; j++){
//     color[i][j] = 'hide';
//   }
// }
// let model = {
//   rows: rows,
//   step: true,//true为偶数，黑
//   color: color,
//   history: []//历史操作坐标
// };
function checkForWin(){
  let result;
  result = leftToRight() || upToDown() || diagonal() || reverseDiagonal();
  result === 'black' && (result = '黑旗获胜=。=');
  result === 'white' && (result = '白旗获胜=。=');
  return result;
}
function leftToRight(){//横向检查
  let game = store.state.color,
      num = 0,
      thisColor,
      lastColor,
      i,j;
  for(i = 0; i < game.length; i++){
    for(j = 0; j < game[i].length; j++){
      if(game[i].length - j < 5) break;//右侧不足五空，跳出
      if(game[i][j] !== 'hide' && num === 0){//第一个棋子
        thisColor = game[i][j];
        num++;
      }else if(game[i][j] !== 'hide' && num !== 0){//第N个同色棋子
        lastColor = thisColor;
        thisColor = game[i][j];
        thisColor === lastColor ? num++ : (num = 0);
        if(num === 5)
          return thisColor;
      }else{
        thisColor = 'hide';
      }
    }
  }
  return false;
}
function upToDown(){//纵向检查
  let game = store.state.color,
      num = 0,
      thisColor,
      lastColor,
      i,j;
  for(j = 0; j < game.length; j++){
    for(i = 0; i < game[j].length; i++){
      if(game[i].length - j < 5) break;//下侧不足五空，跳出
      if(game[i][j] !== 'hide' && num === 0){//第一个棋子
        thisColor = game[i][j];
        num++;
      }else if(game[i][j] !== 'hide' && num !== 0){//第N个同色棋子
        lastColor = thisColor;
        thisColor = game[i][j];
        thisColor === lastColor ? num++ : (num = 0);
        if(num === 5)
          return thisColor;
      }else{
        thisColor = 'hide';
      }
    }
  }
  return false;
}
function diagonal(){//斜向检查
  let game = store.state.color,
      num = 0,
      thisColor,
      lastColor,
      i,j,k;
  for(i = 0; i < game.length; i++){
    for(j = 0; j < game[i].length; j++){
      for(k = 0; k < 5; k++){
        if(i + k > game.length || j + k > game[i].length) break;//右下侧不足五空，跳出
        if(game[i+k][j+k] !== 'hide' && num === 0){//第一个棋子
          thisColor = game[i+k][j+k];
          num++;
        }else if(game[i+k][j+k] === thisColor && num !== 0){//第N个同色棋子
          num++;
          if(num === 5)
            return thisColor;
        }else{
          num = 0;
          break;
        }
      }
    }
  }
  return false;
}
function reverseDiagonal(){//反斜向检查
  let game = store.state.color,
      num = 0,
      thisColor,
      lastColor,
      i,j,k;
  for(i = 0; i < game.length; i++){
    for(j = 0; j < game[i].length; j++){
      for(k = 0; k < 5; k++){
        if(i + k > game.length || j - k < 0) break;//左下侧不足五空，跳出
        if(game[i+k][j-k] !== 'hide' && num === 0){//第一个棋子
          thisColor = game[i+k][j-k];
          num++;
        }else if(game[i+k][j-k] === thisColor && num !== 0){//第N个同色棋子
          num++;
          if(num === 5)
            return thisColor;
        }else{
          num = 0;
          break;
        }
      }
    }
  }
  return false;
}
export default {
  name: 'play',
  data() {
    return store.state;//使用vuex
    // return model;
  },
  components: {Square},
  /* 使用global event bus */
  // mounted() {
  //   bus.$on('restart', function(){//重新开局
  //     for(let i = 0; i < rows; i++){//隐藏所有棋子
  //       for(let j = 0; j < rows; j++){
  //         this.$set(model.color[i],j,'hide');
  //       }
  //     }
  //     this.$set(model,'step',true);//重置棋子黑棋先行
  //     this.$set(model,'history',[])//重置上一步为空
  //   }).$on('regret',function(){//悔棋
  //     let index = model.history.length-1;
  //     if(index >= 0){//无棋子不可悔棋
  //       this.$set(model.color[model.history[index][0]],model.history[index][1],'hide');//置反先手
  //       this.$set(model,'step',!model.step);//置反先手
  //       this.$delete(model.history,index);//回退上一步
  //     }
  //   })
  // },
  methods: {
    click: function(i,j){
      if(this.finish) return;
      if(this.color[i][j] === 'hide'){
        let _color = (this.step ? 'black' : 'white');//改变棋子颜色
        this.$set(this.color[i], j, _color);
        this.step = !this.step;
        this.$set(this.history,this.history.length,[i,j]);
      }
    }
  },
  updated() {
    this.$nextTick( () => {
      let result = checkForWin();
      if(result){
        this.finish = true;
        this.showTip = true;
        this.tips = result;
      }
    });
  }
}
</script>
<style scoped>
#play{
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 750px;
  height:750px;
  z-index: 999;
  margin-top: -25px;
  margin-left: -25px;
}
.row{
  flex: 1;
  display: flex;
}
</style>
