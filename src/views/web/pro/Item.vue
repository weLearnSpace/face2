<template>
  <div
    class="pt-tab"
    :class="[`page-pro-${num}`, {
      'pt-tab-active': active === num,
      'pt-tab-entered': tabEnter && isPageEntered,
      'pt-leafing': active === num && tabEnter && isPageEntered && leafing,
    }]"
  >
    <div
      class="page-pro-bg"
      :style="data.bg.style"
      v-if="data.bg.url"
    >
      <img :src="require(`./img/${data.bg.url}`)" />
    </div>
    <div
      class="page-pro-item"
      :style="data.item.style"
    >
      <div v-if="data.item.body && data.item.body.url" class="pt-leafing-item page-pro-item-body">
        <img :src="require(`./img/${data.item.body.url}`)" :style="data.item.body.style" />
      </div>
      <div v-if="data.item.bg && data.item.bg.url" class="pt-leafing-item page-pro-item-bg">
        <img :src="require(`./img/${data.item.bg.url}`)" :style="data.item.bg.style" />
      </div>
      <div v-if="data.item.light && data.item.light.url" class="pt-leafing-item-light page-pro-item-light">
        <img :src="require(`./img/${data.item.light.url}`)" :style="data.item.light.style" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class ItemsTab extends Vue {
  @Prop({ default: () => ({
    bg: {
      style: null,
      url: null
    },
    item: {
      style: null,
      body: { url: null, },
      bg: { url: null },
      light: { url: null}
    },
  }) }) data: any
  @Prop() active: number | undefined
  @Prop({ default: 0 }) index: number
  @Prop({ default: false, type: Boolean }) tabEnter: boolean
  @Prop({ default: false, type: Boolean }) isPageEntered: boolean
  @Prop({ default: false, type: Boolean }) leafing: boolean

  get num() {
    return this.index + 1
  }
}
</script>

<style lang="scss">
$in-ani: cubic-bezier(.22, .61, .36, 1);


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


.page-entered {
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

