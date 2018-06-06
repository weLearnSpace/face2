<template>
  <div
    class="pt-page page-range"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('./img/title.png')" />
    </div>
    
    <div class="page-main">
      <div class="page-range__outer">
        <div class="page-range-ani page-range-ani__1">
          <img :src="require('./img/pic2_chezaizhineng.png')" />
        </div>
        <div class="page-range-ani page-range-ani__2">
          <img :src="require('./img/pic2_xiaofeileidianzi.png')" />
        </div>
        <div class="page-range-ani page-range-ani__3">
          <img :src="require('./img/pic2_zhinenggongye.png')" />
        </div>
        <div class="page-range-ani page-range-ani__4">
          <img :src="require('./img/pic2_zhinengjiaju.png')" />
        </div>
        <div class="page-range-ani page-range-ani__5">
          <img :src="require('./img/pic2_zhinengyixue.png')" />
        </div>
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
$house-ani: cubic-bezier(.22, .61, .36, 1);

.page-range__outer {
  position: relative;
}
.page-range-ani {
  position: absolute;
  opacity: 0;
  transition: opacity .2s ease;
  transform: translateY(100px);

  &__1 {
    left: 320px;
    top: 170px;
  }
  &__2 {
    left: 50px;
    top: 320px;
  }
  &__3 {
    left: 700px;
    top: 200px;
  }
  &__4 {
    left: 620px;
    top: 480px;
  }
  &__5 {
    left: 270px;
    top: 460px;
  }
}

.page-entered.pt-page-current {
  .page-range-ani {
    opacity: 1;
    transform: translateY(0);

    &__1 {
      transition: all 0.6s $house-ani;
    }
    &__2 {
      transition: all 0.6s $house-ani .2s;
    }
    &__3 {
      transition: all 0.6s $house-ani .4s;
    }
    &__4 {
      transition: all 0.6s $house-ani .6s;
    }
    &__5 {
      transition: all 0.6s $house-ani .8s;
    }
  }
}
</style>
