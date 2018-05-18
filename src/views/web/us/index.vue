<template>
  <div
    class="pt-page page-us"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('./img/us_wenzi.png')" />
    </div>
    <div class="title-h1-content">
      <p>深圳市壹云智能科技有限公司，由一群来自通信、物联网、互联网行业，都心怀万物互联的美好愿望，而汇聚在一起的年轻人。大家在一起以后碰撞出了“万物归一，云控天下”的豪言壮志，于2016年7月，位于中国深圳市南山区波顿科技园，成立公司。公司致力于通讯模块以及智能终端方案设计、研发、生产、销售；为客户提供针对性定行业化云服务管理后台；对于用户的互联网运营，帮助传统行业互联万+转型三个核心发展方向。公司秉承"汇聚人才，技术领先，质量稳定，客户第一"的经营理念。</p>
      <p>三个领域的精英人才汇聚在一起，组成了拥有10年+基于消费类电子产品，用户体验至上理念的技术开发团队。并且打造出了千万级用户，大接入高并发快速响应的服务平台。并且带来了传统消费来电子产品全国各省传统销售渠道以及上下游供应链资源。对于用户价值的挖掘也有自己深刻的理解。公司全体一致贯彻公司的经营理念及做事原则，从市场调研到售后服务过程中的每一个环节，快速响应客户的要求，提供客户满意的产品，极力协助客户商业的成功。公司成立以来先后在智慧交通、智慧家庭、智慧医疗、智慧工业等领域做出不错的成绩和行业口碑。</p>
    </div>
    <div class="house-outer">
      <div class="house-light" />
      <div class="house-inner">
        <div class="house house__2" />
        <div class="house house__4" />
        <div class="house house__1" />
        <div class="house house__3" />
        <div class="house house__5" />
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

  mounted() {
    console.log('us')
  }
}
</script>

<style lang="scss">
@import './index.scss';

.title-h1-content {
  opacity: 0;
  position: relative;
  top: 216px;
  left: 140px;
  width: 530px;
  line-height: 22px;
  text-align:justify;
  text-justify:inter-ideograph;
}

.page-entered {
  .title-h1-content {
    opacity: 1;
    transition: all 1.2s ease-in 0.2s;
  }
}
</style>
