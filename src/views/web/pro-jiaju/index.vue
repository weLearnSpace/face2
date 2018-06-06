<template>
  <PropComp
    :visible="visible"
    :isPageEntered="isPageEntered"
    :menu="menu"
    :content="content"
    :ani="ani"
  >
    <template slot="title">
      <img :src="require('../pro/img/jiaju/title.png')" />
    </template>
  </PropComp>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import PropComp from '../pro/comp.vue'
import conf from './conf'

@Component({
  components: {
    PropComp
  }
})
export default class Pro extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean
  
  ani: string = 'bg'
  menu: any = conf.menu
  content: any = conf.content
}
</script>
