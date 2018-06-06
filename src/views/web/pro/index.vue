<template>
  <PropComp
    :visible="visible"
    :isPageEntered="isPageEntered"
    :menu="menu"
    :content="content"
  >
    <template slot="title">
      <img :src="require('./img/chezai/biaoti_houshijing.png')" />
    </template>
  </PropComp>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import PropComp from './comp.vue'
import chezai from './conf-chezai'

@Component({
  components: {
    PropComp
  }
})
export default class Pro extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean
  
  menu: any = chezai.menu
  content: any = chezai.content
}
</script>
