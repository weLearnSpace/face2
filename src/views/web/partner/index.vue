<template>
  <div
    class="pt-page page-partner page-stay"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('../assets/img/title/title_hezuohuoban.png')" />
    </div>

    <div class="page-main">
      <div class="partner-content">
        <img :src="require('./img/pic_neirong.png')" />
      </div>
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
.page-main {
  position: relative;
}
.partner-content {
  text-align: center;
  margin: 360px auto 0 auto;
}
</style>
