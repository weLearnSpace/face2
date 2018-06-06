<template>
  <div class="page-pro-menus">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="page-pro-menu"
      :class="[`page-pro-menu-${index + 1}`, {
        'active-menu': active === (index + 1)
      }]"
      @click="switchTab(index + 1)"
    >
      <img
        v-if="active === (index + 1)"
        class="page-pro-menu-nor"
        :src="require(`./img/${item.act}`)"
      />
      <img
        v-else
        class="page-pro-menu-nor"
        :src="require(`./img/${item.def}`)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class ItemsTab extends Vue {
  @Prop({ default: () => ({}) }) items: any
  @Prop() active: number | undefined

  switchTab(num) {
    this.$emit('switch', num)
  }
}
</script>

<style lang="scss">
$in-ani: cubic-bezier(.22, .61, .36, 1);
.page-pro-menus {
  position: absolute;
  left: 136px;
  height: 264px;
  top: 50%;
  margin-top: -132px;
  z-index: 99999;

  .page-pro-menu {
    width: 284px;
    height: 68px;
    margin-bottom: 30px;
    text-align: center;
    // background: url('./img/btn_nor.png') no-repeat 0 0;
    opacity: 0;
    transform: translateY(40px);
    display: flex;
    -webkit-align-items: center;  
    align-items: center;  
    justify-content: center;  

    &-nor {
      // margin-top: 20px;
    }
  }

  .active-menu, .page-pro-menu:hover {
    // background: url('./img/btn_sel.png') no-repeat 0 0;
  }
}

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
}
</style>

