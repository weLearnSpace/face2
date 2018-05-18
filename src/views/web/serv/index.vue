<template>
  <div
    class="pt-page page-serv"
    :class="{
      'pt-page-current': visible
    }"
  >
    Serv
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
</style>
