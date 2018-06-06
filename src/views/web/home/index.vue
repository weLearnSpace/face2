<template>
  <div
    class="pt-page page-home"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div id="ani-logo" class="page-main">
      <particle
        :imgUrl="require('./img/logo_all.png')"
        :visible="logoVisible"
        :start="logoStart"
        :width="428"
        :height="392"
        :canvasWidth="1200"
        :canvasHeight="800"
      />   
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Particle from '@/components/particle'

@Component({
  components: {
    Particle,
  }
})
export default class Home extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean

  logoVisible: boolean = false
  logoStart: boolean = false
  @Watch('isPageEntered')
  onChanged(entered) {
    if (entered) {
      this.logoVisible = true

      setTimeout(() => {
        this.logoStart = true
      }, 1000)
    }
  }

  mounted() {
    console.log('home')
  }
}
</script>

<style lang="scss">
@import './index.scss';

$w: 1200px;
$h: 800px;

#ani-logo {
  width: $w;
  height: $h;
  margin: 0 auto;
  position: relative;
  top: 50%;
  margin-top: ($h / 2) * -1;

  .particle-img {
    margin-top: ($h - 392px) / 2;
    margin-left: ($w - 428px) / 2;
  }
}
</style>
