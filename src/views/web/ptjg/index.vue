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
      <img :src="require('./img/pic_neirong.png')" style="margin-left: -50px;" />
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
