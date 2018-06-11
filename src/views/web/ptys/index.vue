<template>
  <div
    class="pt-page page-stay"
    :class="{
      'pt-page-current': visible
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('../assets/img/title/title_pingtaiyoushi.png')" />
    </div>

    <div class="page-main page-fwyy-view">
      <img :src="require('./img/pic_01.png')" />
      <img :src="require('./img/pic_02.png')" style="margin-left: 100px;" />
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
</style>
