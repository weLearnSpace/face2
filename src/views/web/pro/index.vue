<template>
  <div
    class="pt-page page-pro"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('./img/biaoti_houshijing.png')" />
    </div>

    <div class="page-pro-menus">
      <div 
        class="page-pro-menu page-pro-menu-1"
        :class="{
          'active-menu': active === 1
        }"
        @click="switchTab(1)"
      >
        <img class="page-pro-menu-nor" :src="require('./img/chezaihoushijing_nor.png')" />
      </div>
      <div
        class="page-pro-menu page-pro-menu-2"
        :class="{
          'active-menu': active === 2
        }"
        @click="switchTab(2)"
      >
        <img class="page-pro-menu-nor" :src="require('./img/danchedingweiqi.png')" />
      </div>
      <div
        class="page-pro-menu page-pro-menu-3"
        :class="{
          'active-menu': active === 3
        }"
        @click="switchTab(3)"
      >
        <img class="page-pro-menu-nor" :src="require('./img/zhinengETC.png')" />
      </div>
    </div>

    <div class="page-pro-main">
      <!-- 后视镜 -->
      <transition-group
        :enter-active-class="`animated ${pageEnterAnimate}`"
        :leave-active-class="`animated ${pageLeaveAnimate}`"
        @before-enter="onBeforeEnter"
        @after-enter="onAfterEnter"
      >
        <div
          key="pro1"
          class="pt-tab page-pro-1"
          :class="{
            'pt-tab-active': active === 1,
            'pt-tab-entered': tabEnter && isPageEntered,
            'pt-leafing': active === 1 && tabEnter && isPageEntered && leafing,
          }"
          v-show="active === 1"
        >
          <div class="page-pro-bg" style="margin-left: -80px;">
            <img :src="require('./img/pro1-bg.png')" />
          </div>
          <div class="page-pro-item" style="margin-left: -80px;">
            <div class="pt-leafing-item page-pro-item-body"><img :src="require('./img/pro1.png')" /></div>
            <div class="pt-leafing-item page-pro-item-bg"><img :src="require('./img/pro1-guang.png')" /></div>
            <div class="pt-leafing-item-light page-pro-item-light"><img :src="require('./img/pro1-gaoguang.png')" /></div>
          </div>
        </div>

        <!-- 2 -->
        <div
          key="pro2"
          class="pt-tab page-pro-2"
          :class="{
            'pt-tab-active': active === 2,
            'pt-tab-entered': tabEnter && isPageEntered,
            'pt-leafing': active === 2 && tabEnter && isPageEntered && leafing,
          }"
          v-show="active === 2"
        >
          <div class="page-pro-bg">
            <img :src="require('./img/bg_chezaidingwei.png')" style="margin: 30px 0 0 20px" />
          </div>
          <div class="page-pro-item">
            <div class="pt-leafing-item page-pro-item-body">
              <img :src="require('./img/chanpin-che.png')" style="margin: -50px 0 0 0" />
            </div>
            <!-- <div class="pt-leafing-item page-pro-item-bg"><img :src="require('./img/pro1-guang.png')" /></div> -->
            <div class="pt-leafing-item-light page-pro-item-light">
              <img :src="require('./img/che_guang.png')" style="margin: 0 0 0 146px" />
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

const up = {
  enter: 'pt-page-scaleUpDown pt-page-delay300',
  leave: 'pt-page-scaleDown',
}
const down = {
  enter: 'pt-page-scaleUpDown pt-page-delay300',
  leave: 'pt-page-scaleDown',
}

@Component
export default class Pro extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean

  active: number = 0

  pageEnterAnimate: string = up.enter
  pageLeaveAnimate: string = up.leave
  tabEnter: boolean = false
  leafing: boolean = false

  @Watch('isPageEntered')
  onPageEntered(enter) {
    if (enter) {
      this.active = 1
    }
    else {
      this.active = 0
      this.tabEnter = false
    }
  }

  @Watch('active')
  onPageChanged(cur, old) {
    console.log(cur, old)
    // 往后面滚动
    if (cur >= old) {
      // 从下往上入场
      this.pageEnterAnimate = up.enter
      // 往上出场
      this.pageLeaveAnimate = up.leave
    } else {
      // 整体往下入场or出场
      this.pageEnterAnimate = down.enter
      this.pageLeaveAnimate = down.leave
    }
  }

  toLeafing() {
    this.leafing = true
  }

  switchTab(num) {
    this.leafing = false
    this.active = num

    setTimeout(() => {
      const $cont: any = document.querySelector('.pt-tab-active')
      const $cur: any = $cont.querySelector('.page-pro-item-light')
      $cur.removeEventListener('transitionend', () => this.toLeafing())
      $cur.addEventListener('transitionend', () => this.toLeafing())
    }, 0)
  }

  onBeforeEnter() {
    this.tabEnter = false
  }

  onAfterEnter() {
    this.tabEnter = true
  }

  mounted() {
    this.switchTab(1)
  }

  beforeDestroy() {}
}
</script>

<style lang="scss">
@import './index.scss';

$in-ani: cubic-bezier(.22, .61, .36, 1);

.page-pro-menus {
  position: absolute;
  left: 136px;
  height: 264px;
  top: 50%;
  margin-top: -132px;
  z-index: 99999;

  .page-pro-menu {
    width: 282px;
    height: 68px;
    margin-bottom: 30px;
    text-align: center;
    background: url('./img/btn_nor.png') no-repeat 0 0;
    opacity: 0;
    transform: translateY(40px);

    &-nor {
      margin-top: 20px;
    }
  }

  .active-menu, .page-pro-menu:hover {
    background: url('./img/btn_sel.png') no-repeat 0 0;
  }
}

.page-pro-main {
  position: absolute;
  width: 1078px;
  height: 633px;
  top: 50%;
  left: 350px;
  margin-top: -345px;
}

.page-pro-bg {
  position: absolute;
  width: 1078px;
  height: 633px;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.5s $in-ani;
}

.page-pro-item {
  position: absolute;
  width: 500px;
  height: 500px;

  &-body, &-bg, &-light {
    position: absolute;
    width: 500px;
    height: 500px;
    opacity: 0;
    // transition: all 0.3s ease;
  }

  &-body {
    z-index: 10;
    transform: translateY(80px);
  }
  &-bg {
    z-index: 9;
  }
  &-light {
    transform: translateY(80px);
    z-index: 20;
  }
}


/* 动画列表 */
.page-entered {
  .page-pro-menu-1 {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s $in-ani 0.1s;
  }
  .page-pro-menu-2 {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s $in-ani;
  }
  .page-pro-menu-3 {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s $in-ani 0.2s;
  }

  .pt-tab-entered.pt-tab-active {
    .page-pro-item-body {
      opacity: 1;
      transition: all 1s $in-ani;
    }
    .page-pro-bg {
      opacity: 1;
      transform: scale(1);
      transition: all 1s $in-ani;
    }
    .page-pro-item {
      &-body {
        opacity: 1;
        transform: translateY(0);
        transition: all 1.2s $in-ani;
      }
      &-bg {
        opacity: 1;
        transition: all 1.5s ease 1.2s;
      }
      &-light {
        transform: translateY(0);
        transition: transform 1.2s $in-ani;
      }
      &-light {
        opacity: 1;
        transition: opacity 1s $in-ani 0.8s;
      }
    }
  }
}



@keyframes leafing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(12px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes leafing-light {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.6;
    transform: translateY(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

$leafing-ani: cubic-bezier(.65,.05,.36,1);

.pt-leafing {
  .pt-leafing-item {
    animation: leafing 4s $leafing-ani infinite;
  }
  .pt-leafing-item-light {
    animation: leafing-light 4s $leafing-ani infinite;
  }
}
</style>
