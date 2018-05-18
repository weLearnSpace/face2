import NotFound from '@/components/layout/NotFound.vue'
import Home from '@/views/mobile/home/index.vue'

const constantRoutes = [
  {
    path: '/index-mobile.html',
    component: Home,
    // meta: { text: '首页' },
  }
]

export default constantRoutes

const asyncRoutes = []

export {
  asyncRoutes,
  constantRoutes,
}
