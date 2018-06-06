<template>
  <div
    class="pt-page page-serv"
    :class="{
      'pt-page-current': visible
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('./img/etc-title.png')" />
    </div>

    <div class="page-pro-main">
      <div class="servs" style="margin-top: 100px;">
        
        <div class="servs-item" style="margin: -20px 0 0 -300px">
          <img :src="require('./img/pic_tongxun_01.png')"  />
        </div>
        <div class="servs-item" style="margin: 100px 0 0 -65px">
          <img :src="require('./img/pic_tongxun_02.png')"  />
        </div>
        <div class="servs-item" style="margin: 70px 0 0 -380px">
          <img :src="require('./img/pic_tongxun_03.png')"  />
        </div>
        <div class="servs-item" style="margin: -80px 0 0 -370px">
          <img :src="require('./img/pic_tongxun_04.png')"  />
        </div>
        <div class="servs-item" style="margin: -60px 0 0 -70px">
          <img :src="require('./img/pic_tongxun_05.png')"  />
        </div>
        
        <div class="servs-item" style="margin: -160px 0 0 270px">
          <img :src="require('./img/pic_wulian_01.png')"  />
        </div>
        <div class="servs-item" style="margin: -180px 0 0 200px">
          <img :src="require('./img/pic_wulian_02.png')"  />
        </div>
        <div class="servs-item" style="margin: -20px 0 0 170px">
          <img :src="require('./img/pic_wulian_03.png')"  />
        </div>
        <div class="servs-item" style="margin: -150px 0 0 550px">
          <img :src="require('./img/pic_wulian_04.png')"  />
        </div>
        <!-- <div class="servs-item">
          <img :src="require('./img/pic_wulian_04.png')"  />
        </div> -->
        
        <div class="servs-item" style="margin: 160px 0 0 180px">
          <img :src="require('./img/pic_yidong_01.png')"  />
        </div>
        <div class="servs-item" style="margin: 350px 0 0 100px">
          <img :src="require('./img/pic_yidong_02.png')"  />
        </div>
        <div class="servs-item" style="margin: 150px 0 0 110px">
          <img :src="require('./img/pic_yidong_03.png')"  />
        </div>
        <div class="servs-item" style="margin: 250px 0 0 440px">
          <img :src="require('./img/pic_yidong_04.png')"  />
        </div>
        
        <div class="servs-item">
          <img :src="require('./img/pic_yidong_04.png')"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Serv extends Vue {
  @Prop({ default: false }) visible: boolean

  mounted() {
    console.log('serv')
  }
}
</script>

<style lang="scss">
@import './index.scss';

.servs {
  position: relative;

  .servs-item {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
