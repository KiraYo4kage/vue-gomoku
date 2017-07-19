<template>
  <div class="square">
    <Chess :class="color"></Chess>
  </div>
</template>

<script>
import Chess from './Chess'

export default {
  name: 'square',
  props: ['color'],
  components: {Chess}
}
</script>
<style scoped>
  .square{
    flex: 1;
    padding: 1px;
    border: 1px solid #000;
    /*background: darkorange;*/
  }
  .hide{
    display: none;
  }
</style>
