import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let color = [],
    rows = 15;
for(let i = 0; i < rows; i++){
  color[i] = color[i] || [];
  for(let j = 0; j < rows; j++){
    color[i][j] = 'hide';
  }
}
let model = {
  rows: rows,
  step: true,//true为偶数，黑
  color: color,
  history: []//历史操作坐标
};

const vm = new Vue();
const store = new Vuex.Store({
  state: model,
  mutations: {
    restart() {
      for(let i = 0; i < rows; i++){//隐藏所有棋子
        for(let j = 0; j < rows; j++){
          vm.$set(model.color[i],j,'hide');
        }
      }
      vm.$set(model,'step',true);//重置棋子黑棋先行
      vm.$set(model,'history',[]);//重置上一步为空
    },
    regret() {
      let index = model.history.length-1;
      if(index >= 0){//无棋子不可悔棋
        vm.$set(model.color[model.history[index][0]],model.history[index][1],'hide');//置反先手
        vm.$set(model,'step',!model.step);//置反先手
        vm.$delete(model.history,index);//回退上一步
      }
    }
  }
});
export default store;
