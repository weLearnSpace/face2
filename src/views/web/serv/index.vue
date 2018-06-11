<template>
  <div
    class="pt-page page-serv page-stay"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('../assets/img/title/title_fuwufanwei.png')" />
    </div>

    <div class="page-main">
      <div class="servs">
        <div class="servs-item">
          <div class="servs-item-img"><img :src="require('./img/icon_tongxun.png')" /></div>
          <div class="servs-item-title">通讯模块</div>
          <div class="servs-item-list">
            <p>Open CPU</p>
            <p>增强AT命令集</p>
            <p>NDIS&RIL驱动</p>
            <p>整套产品解决方案</p>
          </div>
        </div>
        <div class="servs-item">
          <div class="servs-item-img"><img :src="require('./img/icon_wulianwang.png')" /></div>
          <div class="servs-item-title">物联网</div>
          <div class="servs-item-list">
            <p>千万级连接数</p>
            <p>高并发</p>
            <p>快速响应</p>
            <p>可扩展</p>
          </div>
        </div>
        <div class="servs-item">
          <div class="servs-item-img"><img :src="require('./img/icon_yidong.png')" /></div>
          <div class="servs-item-title">移动物联网</div>
          <div class="servs-item-list">
            <p>物联网转化有效用户</p>
            <p>建立强链接</p>
            <p>运营和展示企业</p>
          </div>
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
  @Prop({ default: false }) isPageEntered: boolean

  mounted() {
    console.log('serv')
  }
}
</script>

<style lang="scss">
@import './index.scss';

.servs {
  display: flex;
  margin: 190px 0 0 0;

  &-item {
    width: 362px;
    padding: 0 70px 40px 70px;
    height: 540px;
    align-items: flex-start;
    background: url('./img/bg.png') no-repeat 0 0;

    &-title {
      text-align: center;
      margin: 0 0 60px 0;
    }

    &-list {
      p {
        margin: 0 0 10px 0;
        vertical-align: middle;

        &::before {
          display: inline-block;
          content: ' ';
          width: 10px;
          height: 10px;
          margin-right: 15px;
          background: url('./img/icon_yuan.png') no-repeat 0 0;
        }
      }
    }
  }

  &-item:not(:first-child) {
    margin-left: 45px;
  }
}
</style>
