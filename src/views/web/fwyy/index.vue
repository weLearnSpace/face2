<template>
  <div
    class="pt-page page-stay"
    :class="{
      'pt-page-current': visible
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('./img/title.png')" />
    </div>

    <div class="page-main page-fwyy-view">
      <img :src="require('./img/pic_neirong.png')" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Us extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean


}
</script>

<style lang="scss">
.page-fwyy-view {
  position: absolute;
  top: 180px;
  min-height: 600px;
  width: 100%;
  text-align: center;

  img {
    height: 600px;
  }
}
</style>
