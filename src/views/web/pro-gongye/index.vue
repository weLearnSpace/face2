<template>
  <div
    class="pt-page page-pro"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('../pro/img/gongye/title.png')" />
    </div>

    <ItemsTab
      :active="active"
      :items="menu"
      @switch="switchTab"
    />

    <div class="page-pro-main">
      <!-- 1 -->
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
          <div class="page-pro-bg" style="margin: 240px 0 0 40px;">
            <img :src="require('../pro/img/gongye/pic_chenjiangjiance.png')" />
          </div>
          <div class="page-pro-item" style="margin-left: -80px;">
            <div class="cj-points">
              <div class="cj-point cj-point__1">
                <img :src="require('../pro/img/gongye/bg_light_01.png')" />
              </div>
              <div class="cj-point cj-point__2">
                <img :src="require('../pro/img/gongye/bg_light_02.png')" />
              </div>
              <div class="cj-point cj-point__3">
                <img :src="require('../pro/img/gongye/bg_light_03.png')" />
              </div>
              <div class="cj-point cj-point__4">
                <img :src="require('../pro/img/gongye/bg_light_04.png')" />
              </div>
            </div>
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
            <img :src="require('../pro/img/gongye/bg_wajueji.png')" style="margin: 50px 0px 0px -50px" />
          </div>
          <div class="page-pro-item">
            <div class="pt-leafing-item page-pro-item-body">
              <img :src="require('../pro/img/gongye/pic_wajueji.png')" style="margin: -20px 0px 0px -140px" />
            </div>
          </div>
        </div>

        <!-- 3 -->
        <div
          key="pro3"
          class="pt-tab page-pro-3"
          :class="{
            'pt-tab-active': active === 3,
            'pt-tab-entered': tabEnter && isPageEntered,
            'pt-leafing': active === 3 && tabEnter && isPageEntered && leafing,
          }"
          v-show="active === 3"
        >
          <div class="page-pro-bg">
            <img :src="require('../pro/img/gongye/bg_zhinengkuaidigui.png')" style="margin: -20px 0px 0px 10px" />
          </div>
          <div class="page-pro-item">
            <div class="pt-leafing-item page-pro-item-body">
              <img :src="require('../pro/img/gongye/pic_zhinengkuaidigui.png')" style="margin: 160px 0 0 200px" />
            </div>
            <!-- <div class="pt-leafing-item page-pro-item-bg">
              <img :src="require('../pro/img/gongye/bg_light_zhinengkuaidigui.png')" />
            </div> -->
            <!-- <div class="pt-leafing-item-light page-pro-item-light">
              <img :src="require('../pro/img/gongye/bg_light_zhinengkuaidigui.png')" />
            </div> -->
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import ItemsTab from '../pro/ItemsTab.vue'

const up = {
  enter: 'pt-page-scaleUpDown pt-page-delay300',
  leave: 'pt-page-scaleDown',
}
const down = {
  enter: 'pt-page-scaleUpDown pt-page-delay300',
  leave: 'pt-page-scaleDown',
}

@Component({
  components: {
    ItemsTab,
  }
})
export default class Pro extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean

  active: number = 0

  pageEnterAnimate: string = up.enter
  pageLeaveAnimate: string = up.leave
  tabEnter: boolean = false
  leafing: boolean = false

  menu: any = [
    {
      def: 'gongye/btn_dizhichenjiang_nor.png',
      act: 'gongye/btn_chenjiangjiance_sel.png'
    },
    {
      def: 'gongye/btn_wajueji_nor.png',
      act: 'gongye/btn_wajueji_sel.png'
    },
    {
      def: 'gongye/btn_zhinengkuaidigui_nor.png',
      act: 'gongye/btn_zhinengkuaidigui_sel.png'
    }
  ]

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
      const $layer: any = document.querySelector('.pt-page-current')

      if ($layer && this.visible) {
        const $cont: any = document.querySelector('.pt-tab-active')
        const $cur: any = $cont.querySelector('.page-pro-item-light')
        $cur.removeEventListener('transitionend', () => this.toLeafing())
        $cur.addEventListener('transitionend', () => this.toLeafing())
      }
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
$in-ani: cubic-bezier(.22, .61, .36, 1);

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
