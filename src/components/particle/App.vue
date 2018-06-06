<template>
  <div class="particle-outer">
    <canvas
      class="particle-canvas"
      :class="{
        'particle-canvas-visible': visible && !animateEnd,
      }"
      ref="canvas"
      :width="canvasWidth"
      :height="canvasHeight"
    >
      No Canvas
    </canvas>
    <div
      class="particle-img"
      :class="{
        'particle-img-visible': animateEnd
      }"
    >
      <img :src="imgUrl" :height="height" />
    </div>
  </div>
</template>


<script lang="ts">
/**
 * @file App.jsx
 * @author denglingbo
 *
 *
 * 对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：

 R - 红色 (0-255)
 G - 绿色 (0-255)
 B - 蓝色 (0-255)
 A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)

 red = imgData.data[0];
 green = imgData.data[1];
 blue = imgData.data[2];
 alpha = imgData.data[3];

 TODO 容我慢慢优化吧

 */

import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
// import { setHiDPICanvas } from './dpi'
import classNames from 'classnames'
import Dot from './Dot'
import './app.scss'

function throttle(fn, delta, context) {
  return function() {
    var args = arguments
    var then = 0

    function repeat(now) {
      requestAnimationFrame(repeat)
      if (now - then >= delta) {
        then = now
        fn.call(context, args)
      }
    }

    requestAnimationFrame(repeat)
  }
}

/**
 * 动画函数
 * @param t 当前时间 startTime - currentTime
 * @param b 初始值
 * @param c 变化量
 * @param d 持续时间
 * @return {*}
 */
const cubicEaseIn = (t, b, c, d) => {
  return c * (t /= d) * t * t + b
}

function noop() {}

let pause = false
let derection = true
let lastTime
let timer = null

@Component
export default class Particle extends Vue {
  @Prop() width: undefined | number
  @Prop() height: undefined | number
  @Prop() canvasWidth: undefined | number
  @Prop() canvasHeight: undefined | number

  @Prop() imgUrl: any
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) start: boolean

  // canvasWidth: number = 900 // this.width
  // canvasHeight: number = 500 // this.height

  $refs: any
  canvas: any
  animateEnd: boolean = true
  dots: any
  dur: number = 200

//   constructor(props) {
//     super(props)

//     this.state = {
//       animateEnd: true
//     }
//   }

  getImgData() {
    const { width, height } = this
    const dots = []
    const context = this.$refs.canvas.getContext('2d')
    const imgData = context.getImageData(0, 0, width, height)

    const radius = 1
    const step = 3

    const pyx = (this.canvasWidth - this.width) / 2
    const pyy = (this.canvasHeight - this.height) / 2

    for (let x = 0; x < imgData.width; x += step) {
      for (let y = 0; y < imgData.height; y += step) {
        // imagedata 读取的像素数据存储在data属性里
        // 是从上到下，从左到右的，每个像素需要占用4位数据
        // 分别是 r, g, b, alpha 透明通道
        const i = (y * imgData.width + x) * 4

        // 将透明度大于 x 的像素点位置存入数组 dots
        if (imgData.data[i + 3] >= 100) {
          const dot = new Dot({
            canvas: this.$refs.canvas,
            data: context.getImageData(x, y, 1, 1),
            centerX: x + pyx,
            centerY: y + pyy,
            centerZ: 0,
            radius,
            width: this.canvasWidth,
            height: this.canvasHeight,
            color: {
              r: imgData.data[i],
              g: imgData.data[i + 1],
              b: imgData.data[i + 2],
              a: imgData.data[i + 3]
            }
          })

          dots.push(dot)
        }
      }
    }

    return dots
  }

  loadImage(cb) {
    const { imgUrl, width, height } = this

    const img = new Image()

    img.src = imgUrl
    img.onload = () => {
      const ys = img.height / height
      const xs = img.width / width
      const s = Math.max(xs, ys)

      this.$refs.canvas.getContext('2d').drawImage(img, 0, 0, width, height)

      this.dots = this.getImgData()

      cb()
    }
  }

  animate(dots, finishCallback = noop) {
    const canvas = this.$refs.canvas
    const context = canvas.getContext('2d')
    const { width, height, canvasWidth, canvasHeight } = this
    let lastTime = +new Date()
    let thisTime = +new Date()

    const start = +new Date()
    // const dur = 500

    function run() {
      // context.clearRect(0, 0, width, height)
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      let thisTime = +new Date()

      dots.forEach(dot => {
        // dot 动画到达终点
        if (
          Math.abs(dot.ex - dot.x) <= 0.1 &&
          Math.abs(dot.ey - dot.y) <= 0.1 &&
          Math.abs(dot.ez - dot.z) <= 0.1
        ) {
          pause = true

          // 在进行一次修正
          // if (thisTime - lastTime > 300) {
          //   dot.fix()
          //   pause = true
          // }
          // dot.fix();

          if (finishCallback) {
            finishCallback()
          }
        } else {
          dot.x = dot.x + (dot.ex - dot.x) * 0.1
          dot.y = dot.y + (dot.ey - dot.y) * 0.1
          dot.z = dot.z + (dot.ez - dot.z) * 0.1
          lastTime = +new Date()
        }

        dot.paint()
      })

      if (!pause && 'requestAnimationFrame' in window) {
        timer = requestAnimationFrame(run)
      }
    }

    // setTimeout(() => {
    //   pause = true
    //   cancelAnimationFrame(timer)
    // }, 5000)

    run()
  }

  handleEnter() {
    this.animateEnd = false
    pause = false
    window.cancelAnimationFrame(timer)
    const dots = this.dots

    dots.forEach(dot => {
      dot.disperseInit()
    })

    this.animate(dots)
    //   }
    // )
  }

  handleLeave() {
    pause = false
    window.cancelAnimationFrame(timer)
    const dots = this.dots
    dots.forEach(dot => {
      dot.polymerizeInit()
    })

    this.animate(dots, () => {
      this.animateEnd = true
    })
  }

  @Watch('start')
  onStartChanged(v) {
    setTimeout(() => {
      this.handleLeave()
    }, 200)
  }

  mounted() {
    this.loadImage(() => {
      this.handleEnter()
    });
  }
}
</script>
