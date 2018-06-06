<template>
  <div id="app">
    <transition name="fade-out">
      <div class="page-loading" v-show="loading">
        <div>loading...</div>
      </div>
    </transition>
    <transition name="fade-in">
      <router-view v-show="!loading" :loading="loading" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  loading: boolean = true

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style lang="scss">
.fade-out-enter-active {
  transition: all .3s ease;
}
.fade-out-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-out-enter, .fade-out-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}

.fade-in-enter-active {
  transition: all .3s ease;
}
.fade-in-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-in-enter, .fade-in-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(100px);
  opacity: 0;
}

.page-loading {
  color: #fff;
  background: rgb(5, 10, 42);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  background: rgb(5, 10, 42);
}
</style>

