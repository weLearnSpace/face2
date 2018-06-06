<template>
  <div
    class="page-outer"
  >
    <div class="page-top__outer">
      <div class="page-top">
        <div class="page-top__logo"
          :class="{'active': page === 1}"
          @click="handleSwitch(1)"
        >
          <img :src="require('./assets/img/logo.png')" height="48" />
        </div>
        <div class="page-top__menus">
          <div class="page-top__menus_item" :class="{'active': page === 2}" @click="handleSwitch(2)">关于我们</div>
          <div class="page-top__menus_item" :class="{'active': page === 3}" @click="handleSwitch(3)">服务范围</div>
          <div class="page-top__menus_item"
            :class="{'active': page === 4 || page === 41 || page === 42 || page === 43}"
          >
            <span>产品展示</span>
            <div class="dropmenu">
              <div class="dropmenu__item" @click="handleSwitch(4)">车载智能终端</div>
              <div class="dropmenu__item" @click="handleSwitch(41)">消费类电子</div>
              <div class="dropmenu__item" @click="handleSwitch(42)">智能家具</div>
              <div class="dropmenu__item" @click="handleSwitch(43)">智能医学</div>
              <div class="dropmenu__item" @click="handleSwitch(44)">智能工业</div>
            </div>
          </div>
          <div class="page-top__menus_item" :class="{'active': page === 5}" @click="handleSwitch(5)">覆盖领域</div>
          <div
            class="page-top__menus_item"
            :class="{'active': page === 6 || page === 61 || page === 62}"
          >
            <span>特色展示</span>
            <div class="dropmenu" style="height: 130px !important;">
              <div class="dropmenu__item" @click="handleSwitch(6)">平台优势</div>
              <div class="dropmenu__item" @click="handleSwitch(61)">平台架构</div>
              <div class="dropmenu__item" @click="handleSwitch(62)">服务应用架构</div>
            </div>
          </div>
          <div class="page-top__menus_item" :class="{'active': page === 7}" @click="handleSwitch(7)">合作伙伴</div>
          <div class="page-top__menus_item" :class="{'active': page === 8}" @click="handleSwitch(8)">联系我们</div>
        </div>
      </div>
    </div>
    <div
      class="bg"
      :class="[`bg-current-${page}`, {
        'bg-pros': isProBg,
        'bg-earth': isEarthBg,
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
        <!-- <div class="page-inner__menu">
          <div @click="handleSwitch(1)">home</div>
          <div @click="handleSwitch(2)">us</div>
          <div @click="handleSwitch(3)">serv</div>
          <div @click="handleSwitch(4)">pro</div>
        </div> -->

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
          <PageProDz
            key="pro-dianzi"
            v-show="isProDZ"
            :visible="isProDZ"
            :isPageEntered="isProDZ && isPageEntered"
          />
          <PageProJj
            key="pro-jiaju"
            v-show="isProJJ"
            :visible="isProJJ"
            :isPageEntered="isProJJ && isPageEntered"
          />
          <PageProYx
            key="pro-yixve"
            v-show="isProYX"
            :visible="isProYX"
            :isPageEntered="isProYX && isPageEntered"
          />
          <PageProGy
            key="pro-gongye"
            v-show="isProGY"
            :visible="isProGY"
            :isPageEntered="isProGY && isPageEntered"
          />

          <page-range
            key="range"
            v-show="isRange"
            :visible="isRange"
            :isPageEntered="isRange && isPageEntered"
          />

          <Ptys
            key="pro-Ptys"
            v-show="isPtys"
            :visible="isPtys"
            :isPageEntered="isPtys && isPageEntered"
          />

          <Ptjg
            key="pro-Ptjg"
            v-show="isPtjg"
            :visible="isPtjg"
            :isPageEntered="isPtjg && isPageEntered"
          />

          <Fwyy
            key="pro-Fwyy"
            v-show="isFwyy"
            :visible="isFwyy"
            :isPageEntered="isFwyy && isPageEntered"
          />

          <page-partner
            key="partner"
            v-show="isPartner"
            :visible="isPartner"
            :isPageEntered="isPartner && isPageEntered"
          />

          <page-contact
            key="contact"
            v-show="isContact"
            :visible="isContact"
            :isPageEntered="isContact && isPageEntered"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import PageHome from './home/index.vue'
import PageUs from './us/index.vue'
import PageServ from './serv/index.vue'
// start projects
import PagePro from './pro/index.vue'
import PageProDz from './pro-dianzi/index.vue'
import PageProJj from './pro-jiaju/index.vue'
import PageProYx from './pro-yixve/index.vue'
import PageProGy from './pro-gongye/index.vue'
// end projects
import PageRange from './range/index.vue'
import PagePartner from './partner/index.vue'
import PageContact from './contact/index.vue'

import Ptys from './ptys/index.vue'
import Ptjg from './ptjg/index.vue'
import Fwyy from './fwyy/index.vue'

const up = {
  enter: 'pt-page-moveFromBottom',
  leave: 'pt-page-moveToTopEasing pt-page-onto'
}
const down = {
  enter: 'pt-page-moveFromTop',
  leave: 'pt-page-moveToBottomEasing pt-page-ontop',
}

@Component({
  components: {
    PageHome,
    PageUs,
    PageServ,
    PagePro,
    PageRange,
    PagePartner,
    PageContact,
    PageProDz,
    PageProJj,
    PageProYx,
    PageProGy,
    Ptys,
    Ptjg,
    Fwyy,
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

  get isProBg() {
    // return this.isPartner || this.isPro || this.isContact || this.isRange
    return !this.isEarthBg
  }

  get isEarthBg() {
    return this.isHome || this.isUs || this.isServ
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
  get isProDZ() {
    return this.page === 41
  }
  get isProJJ() {
    return this.page === 42
  }
  get isProYX() {
    return this.page === 43
  }
  get isProGY() {
    return this.page === 44
  }
  get isRange() {
    return this.page === 5
  }
  get isPartner() {
    return this.page === 7
  }
  get isContact() {
    return this.page === 8
  }
  get isPtys() {
    return this.page === 6
  }
  get isPtjg() {
    return this.page === 61
  }
  get isFwyy() {
    return this.page === 62
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
    this.page = 1
  }
}
</script>

<style lang="scss">
@import './pt.scss';
@import './index.scss';

.dropmenu {
  position: absolute !important;
  width: 130px;
	height: 210px !important;
	background-color: rgba(18, 72, 146, 0.2);
	border-radius: 2px;
  border: solid 1px rgba(0, 198, 255, 0.2);
  padding: 50px 0 0 0;
  margin: -40px 0 0 -40px;

  &__item {
    text-align: center;
    color: #fff;
    height: 40px;
    line-height: 40px;
    cursor: pointer;

    &:hover {
      color: #35c1f0;
    }
  }
}
</style>
