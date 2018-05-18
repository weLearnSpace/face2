<template>
  <div
    class="pt-page page-home"
    :class="{
      'pt-page-current': visible
    }"
  >
    Home
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  @Prop({ default: false }) visible: boolean

  mounted() {
    console.log('home')
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
