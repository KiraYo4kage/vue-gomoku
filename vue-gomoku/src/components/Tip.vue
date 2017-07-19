<template>
  <div class="tip">
    <div :class="className">!</div>
    {{content}}
  </div>
</template>

<script>

export default {
  name: 'tip',
  props: ['content','level'],
  data() {
    return this.$store.state;
  },
  computed: {
    className() {
      return 'level' + ' ' + (this.level || 'done');
    }
  },
  mounted() {
    let count = 2;
    setInterval( () => {
      if(!count--){
        this.showTip = false;
        this.tips = '';
      }
    },1000);
  }
}
</script>
<style scoped>
  @keyframes move {
    from {top: 0;}
    to {top: 20%;}
  }
  .tip{
    line-height: 40px;
    background: #fff;
    min-width: 300px;
    min-height: 40px;
    text-align: center;
    color: #8391a5;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    border-radius: 20px;
    overflow: hidden;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    animation: move .3s;
    z-index: 1001;
  }
  .level{
    width: 40px;
    height: 40px;
    float: left;
    font-size: 1.5em;
    color: #fff;
    font-weight: bold;
    transform: rotate(180deg);
  }
  .done{
    background: #449d44;
  }
  .fail{
    background: red;
  }
  .hide{
    display: none;
  }
</style>
