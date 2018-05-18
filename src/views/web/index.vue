<template>
  <div
    class="page-outer"
  >
    <div
      class="bg"
      :class="[`bg-current-${page}`, {
        'bg-pros': isPro,
        'bg-earth': !isPro,
      }]"
    >
      <div class="earth"></div>
      <div class="pros">
        <div class="props-front-outer">
          <div class="props-front props-front-1"></div>
          <div class="props-front props-front-2"></div>
        </div>
      </div>
    </div>

    <!-- Page inner -->
    <div class="page-inner">

      <div class="pt-perspective">
        <div class="page-inner__menu">
          <div @click="handleSwitch(1)">home</div>
          <div @click="handleSwitch(2)">us</div>
          <div @click="handleSwitch(3)">serv</div>
          <div @click="handleSwitch(4)">pro</div>
        </div>

        <!-- Page 1 -->
        <transition-group
          :enter-active-class="`animated ${pageEnterAnimate}`"
          :leave-active-class="`animated ${pageLeaveAnimate}`"
          @before-enter="onBeforeEnter"
          @after-enter="onAfterEnter"
        >
          <page-home
            key="home"
            v-show="isHome"
            :visible="isHome"
            :isPageEntered="isHome && isPageEntered"
          />

          <page-us
            key="us"
            v-show="isUs"
            :visible="isUs"
            :isPageEntered="isUs && isPageEntered"
          />

          <page-serv
            key="serv"
            v-show="isServ"
            :visible="isServ"
            :isPageEntered="isServ && isPageEntered"
          />

          <page-pro
            key="pro"
            v-show="isPro"
            :visible="isPro"
            :isPageEntered="isPro && isPageEntered"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import PageHome from './home'
import PageUs from './us'
import PageServ from './serv'
import PagePro from './pro'

const up = {
  enter: 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop',
  leave: 'pt-page-rotateBottomSideFirst'
}
const down = {
  enter: 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop',
  leave: 'pt-page-rotateTopSideFirst',
}

@Component({
  components: {
    PageHome,
    PageUs,
    PageServ,
    PagePro,
  }
})
export default class App extends Vue {
  page: number = 0
  isPageEntered: boolean = false

  pageEnterAnimate: string = up.enter
  pageLeaveAnimate: string = up.leave

  @Watch('page')
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

  get isHome() {
    return this.page === 1
  }
  get isUs() {
    return this.page === 2
  }
  get isServ() {
    return this.page === 3
  }
  get isPro() {
    return this.page === 4
  }

  handleSwitch(currentPage) {
    this.page = currentPage
  }

  onBeforeEnter() {
    this.isPageEntered = false
  }

  onAfterEnter() {
    this.isPageEntered = true
  }

  mounted() {
    console.log('index')

    this.page = 2
  }
}
</script>

<style lang="scss">
@import './pt.scss';
@import './index.scss';
</style>
