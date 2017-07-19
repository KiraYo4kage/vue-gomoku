<template>
  <div class="buttons">{{text}}</div>
</template>

<script>

let model = {

};
export default {
  name: 'buttons',
  props: ['text'],
  data () {
    return model;
  }
}
</script>
<style scope>
.buttons{
  border-radius: 5px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  background: sandybrown;
  margin: 20px auto;
  cursor: pointer;
  user-select:none;
}
.buttons:hover{
  background: #fad309;
}
.buttons:active{
  background: #f78216;
}
</style>
