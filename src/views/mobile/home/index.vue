<template>
  <div class="mobile">
    <div class="loading" v-show="loading"></div>
    <div class="tabs-wrap" @scroll="handleScroll">
      <ul class="tabs">
        <li class="tab"  v-for="n in 7" :key="n" :class="[`tab-${n}`, {'current': current === n}]"  @click.stop="(e) => handleClick(e, n)">
        </li>
      </ul>
    </div>
    <ul class="list" ref="tip" v-show="show">
      <li class="item" v-for="(i, index) of childData" :key="i" :class="{'current': index === child}" @click="handleChildClick(index)">{{i}}</li>
    </ul>
    <div class="content content-1" :class="{'show': current === 1}">
      <div class="about-text">
      <p>深圳市壹云智能科技有限公司，由一群来自通信、物联网、互联网行业，都心怀万物互联的美好愿望，而汇聚在一起的年轻人。大家在一起以后碰撞出了“万物归一，云控天下”的豪言壮志，于2016年7月，位于中国深圳市南山区波顿科技园，成立公司。公司致力于通讯模块以及智能终端方案设计、研发、生产、销售；为客户提供针对性定行业化云服务管理后台；对于用户的互联网运营，帮助传统行业互联万+转型三个核心发展方向。公司秉承"汇聚人才，技术领先，质量稳定，客户第一"的经营理念。</p>
      <p>三个领域的精英人才汇聚在一起，组成了拥有10年+基于消费类电子产品，用户体验至上理念的技术开发团队。并且打造出了千万级用户，大接入高并发快速响应的服务平台。并且带来了传统消费来电子产品全国各省传统销售渠道以及上下游供应链资源。对于用户价值的挖掘也有自己深刻的理解。公司全体一致贯彻公司的经营理念及做事原则，从市场调研到售后服务过程中的每一个环节，快速响应客户的要求，提供客户满意的产品，极力协助客户商业的成功。公司成立以来先后在智慧交通、智慧家庭、智慧医疗、智慧工业等领域做出不错的成绩和行业口碑。</p>
      </div>
    </div>
    <div class="content content-no-padding content-2" :class="{'show': current === 2}">
      <img src="../assets/ywfw.png" width="100%" />
    </div>
    <div class="content content-no-padding content-3" :class="{'show': current === 3}">
      <img class="cpzs" src="../assets/cpzs_1.jpg" width="100%" :class="{'show': child === 0}" />
      <img class="cpzs" src="../assets/cpzs_2.jpg" width="100%" :class="{'show': child === 1}" />
      <img class="cpzs" src="../assets/cpzs_3.jpg" width="100%" :class="{'show': child === 2}" />
      <img class="cpzs" src="../assets/cpzs_4.jpg" width="100%" :class="{'show': child === 3}" />
      <img class="cpzs" src="../assets/cpzs_5.jpg" width="100%" :class="{'show': child === 4}" />
    </div>
    <div class="content content-4" :class="{'show': current === 4}">
      <img src="../assets/pic_jiagou@3x.png" width="100%" />
    </div>
    <div class="content content-5" :class="{'show': current === 5}">
      <img src="../assets/pic_fuwuyingyong@3x.png" width="100%" />
    </div>
    <div class="content content-no-padding content-6" :class="{'show': current === 6}">
      <img src="../assets/lxwm.png" width="100%" />
    </div>
    <div class="content content-no-padding content-7" :class="{'show': current === 7}">
      <img src="../assets/ptys.png" width="100%" />
    </div>
    
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  private current: number = 1;
  private childData: any = ['车载智能终端', '消费类电子', '智能家具', '智能医学', '智能工业'];
  private child: number = 0;
  private event: any = null;
  private show: boolean = false;
  private loading: boolean = true;
  private timer: any = null;

  private handleClick(e: any, n: any) {
    this.current = n;
    if (n === 3) {
      const tipEl: any = this.$refs['tip'];
      const rect: any = e.target.getBoundingClientRect();
      this.show = true;
      tipEl.style.left = `${rect.left}px`;
      tipEl.style.top = `${rect.top + rect.height}px`;
    } else {
      this.show = false;
      this.child = 0;
    }
  }

  private handleChildClick(index: any) {
    this.child = index;
    this.$nextTick(() => {
      this.show = false;
    })
  }

  private handleScroll() {
    this.show = false;
  }

  private mounted() {
    this.event = document.body.addEventListener('click', (e) => {
      this.show = false;
    })

    this.timer = setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  private beforeDestroy() {
    document.body.removeEventListener('click', this.event);
    clearTimeout(this.timer);
  }
}
</script>

<style lang="scss">
@import './home.scss';
$tabs_height:  46px;
.mobile {
  // background: url('../assets/bg@3x.png') no-repeat;
  // background-position: 0;
  // background-size: 100% auto;
  background-color: #04082b;
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling : touch;
  overflow-scrolling : touch;

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .loading {
    background: url('../assets/loading.jpg') no-repeat;
    background-size: 100% auto;
    background-color: #04082b;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  }

  .tabs-wrap {
    overflow: auto;
    -webkit-overflow-scrolling : touch;
    overflow-scrolling : touch;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  .tabs {
    height: $tabs_height;
    background: #040B2F;
    width: 659px;
  }

  .tab {
    float: left;
    width: 89px;
    height: 30px;
    background-size: contain;
    margin-left: 4px;
    margin-top: 8px;
  }

  .list {
    width: 89px;
    position: fixed;
    left: auto;
    top: 39px;
  }

  .item {
    display: block;
    background: #00366D;
    border: 1px solid #3D9AFF;
    height: 28px;
    line-height: 28px;
    width: 87px;
    margin-top: 2px;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;

    &.current {
      background: #1F88F2;
      border: 1px solid #9DCCFF;
    }
  }

  .cpzs {
    display: none;
    &.show {
      display: block;
    }
  }

  .tab-1 {
    background-image: url('../assets/btn_nor_guanwomen@3x.png');
    &.current {
      background-image: url('../assets/btn_sel_guanyuwomen@3x.png');
    }
  }
  .tab-2 {
    background-image: url('../assets/btn_nor_yewufanwei@3x.png');
    &.current {
      background-image: url('../assets/btn_sel_yewufanwei@3x.png');
    }
  }
  .tab-3 {
    background-image: url('../assets/btn_nor_chanpinzhanshi@3x.png');
    &.current {
      background-image: url('../assets/btn_sel_chanpinzhanshi@3x.png');
    }
  }
  .tab-4 {
    background-image: url('../assets/btn_pingtaijiagou@3x.png');
    &.current {
      background-image: url('../assets/ptjg_sle.png');
    }
  }
  .tab-5 {
    background-image: url('../assets/btn_fuwuyingyongjiagou@3x.png');
    &.current {
      background-image: url('../assets/fwkjlj_sle.png');
    }
  }
  .tab-6 {
    background-image: url('../assets/btn_lainxiwomen@3x.png');
    &.current {
      background-image: url('../assets/lxwm_sle.png');
    }
  }
  .tab-7 {
    background-image: url('../assets/btn_pingtaiyoushi@3x.png');
    &.current {
      background-image: url('../assets/btn_sel_pingtaijiagou@3x.png');
    }
  }

  .content {
    // padding: $tabs_height + 10px 10px 20px;
    display: none;
    &.show {
      display: block;
    }
  }

  .content-1 {
    background: url('../assets/bg_02@3x.png') no-repeat;
    background-size: contain;
    background-position: left bottom;
    width: 100%;
    height: 100%;
    padding-left: 0;
    padding-right: 0;

    .about-text {
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: justify;
      text-indent: 25px;
      margin: 0 10px;
      padding-top: 10px;
    }
  }
  .content-no-padding {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-top: -$tabs_height;
  } 
  // .content-2 {
    
  // }

  .content-5, .content-4 {
    margin: 10px 10px 0;
  }
}
</style>
