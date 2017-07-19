<template>
  <div class="chess"></div>
</template>

<script>
let width = 50,
  Y = 200,
  X = 200;
let model = {

};
export default {
  name: 'chess',
  props: [],
  data () {
    return model;
  }
}
</script>
<style scoped>
  .chess{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .white{
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5) inset;
  }
  .black{
    background: #000;
    box-shadow: 0 0 20px rgba(240, 240, 240, .5) inset;
  }
</style>
