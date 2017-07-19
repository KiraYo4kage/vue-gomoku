<template>
  <div class="coordinate">
    {{this.text}}
  </div>
</template>

<script>
let model = {

}
export default {
  name: 'coordinate',
  props: ['text'],
  data() {
    return model;
  }
}
</script>
<style scope>
  .coordinate{
    position: absolute;
    text-align: center;
    width: 20px;
    height: 20px;
  }
</style>
