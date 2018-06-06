<template>
  <div
    class="pt-page"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title" style="left: 100px;">
      <slot name="title" />
    </div>

    <items-tab
      :active="active"
      :items="menu"
      @switch="switchTab"
    />

    <div class="page-pro-main">
      <transition-group
        :enter-active-class="`animated ${pageEnterAnimate}`"
        :leave-active-class="`animated ${pageLeaveAnimate}`"
        @before-enter="onBeforeEnter"
        @after-enter="onAfterEnter"
      >
        <item
          v-for="(item, index) in content"
          v-show="active === (index + 1)"
          :key="index"
          :data="item"
          :index="index"
          :active="active"
          :tabEnter="tabEnter"
          :isPageEntered="isPageEntered"
          :leafing="leafing"
        />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import ItemsTab from './ItemsTab.vue'
import Item from './Item.vue'

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
    Item,
  }
})
export default class Pro extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean
  @Prop({ default: () => ([]) }) menu: any
  @Prop({ default: () => ([]) }) content: any
  @Prop({ default: 'light' }) ani: any

  active: number = 0

  pageEnterAnimate: string = up.enter
  pageLeaveAnimate: string = up.leave
  tabEnter: boolean = false
  leafing: boolean = false

  @Watch('isPageEntered')
  onPageEntered(enter) {
    if (enter) {
      this.active = 1
      this.addAni()
    }
    else {
      this.active = 0
      this.tabEnter = false
    }
  }

  @Watch('active')
  onPageChanged(cur, old) {
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

    this.addAni()
  }

  addAni() {
    this.$nextTick(() => {
      const $layer: any = document.querySelector('.pt-page-current')

      if ($layer && this.visible) {
        const $cont: any = $layer.querySelector('.pt-tab-active')
        const $cur: any = $cont.querySelector(`.page-pro-item-${this.ani}`)
        $cur && $cur.removeEventListener('transitionend', () => this.toLeafing())
        $cur && $cur.addEventListener('transitionend', () => this.toLeafing())
      }
    })
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

  beforeDestroy() {
    const $layer: any = document.querySelector('.pt-page-current')
    const $cont: any = $layer.querySelector('.pt-tab-active')
    const $cur: any = $cont.querySelector(`.page-pro-item-${this.ani}`)
    $cur && $cur.removeEventListener('transitionend', () => this.toLeafing())
  }
}
</script>

<style lang="scss">
@import './index.scss';

.page-pro-main {
  position: absolute;
  width: 1078px;
  height: 633px;
  top: 50%;
  left: 350px;
  margin-top: -345px;
}
</style>
