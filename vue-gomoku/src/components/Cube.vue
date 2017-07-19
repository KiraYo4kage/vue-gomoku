<template>
  <div class="cube">
    <div class="top slide" :style="'background:'+ top +';'"></div>
    <div class="bottom slide" :style="'background:'+ bottom +';'"></div>
    <div class="left slide" :style="'background:'+ left +';'"></div>
    <div class="right slide" :style="'background:'+ right +';'"></div>
    <div class="front slide" :style="'background:'+ front +';'"></div>
    <div class="back slide" :style="'background:'+ back +';'"></div>
  </div>
</template>

<script>

export default {
  name: 'cube',
  props: ['top','front','left','bottom','back','right'],
  data(){
    return {};
  }
}
</script>
<style scoped>
.cube{
  /*margin: 2px;*/
  position: absolute;
  width: 200px;
  height: 200px;
  /*animation: rotate-frame 30s linear infinite;*/
  transform-style: preserve-3d;
  perspective: 60000;
  /*-webkit-transform: rotateX(-30deg) rotateY(-45deg);*/
}
.slide {
  position: absolute;
  width: 196px;
  height: 196px;
  background: #ddd;
  border: 2px solid #fff;
}
.top {
  top: -200px;
  transform: rotateX(-90deg);
  transform-origin: bottom;
}
.bottom {
  bottom: -200px;
  transform: rotateX(90deg);
  transform-origin: top;
}
.left {
  left: -200px;
  transform: rotateY(90deg);
  transform-origin: right;
}
.right {
  right: -200px;
  transform: rotateY(-90deg);
  transform-origin: left;
}
.front {
}
.back {
  transform: translateZ(200px);
}
@keyframes rotate-frame {
 0% {
 transform: rotateX(0deg);
 }
 /*10% {
 transform: rotateX(0deg) rotateY(180deg);
 }
 20% {
 transform: rotateX(-180deg) rotateY(180deg);
 }
 30% {
 transform: rotateX(-360deg) rotateY(180deg);
 }
 40% {
 transform: rotateX(-360deg) rotateY(360deg);
 }*/
 50% {
 transform: rotateX(-180deg);
 }
 /*60% {
 transform: rotateX(90deg) rotateY(180deg);
 }
 70% {
 transform: rotateX(0) rotateY(180deg);
 }
 80% {
 transform: rotateX(90deg) rotateY(90deg);
 }
 90% {
 transform: rotateX(90deg) rotateY(0);
 }*/
 100% {
 transform: rotateX(0);
 }
}
</style>
