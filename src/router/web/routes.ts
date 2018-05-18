import Index from '@/views/web/index.vue'

const constantRoutes = [
  {
    path: '/index-web.html',
    component: Index,
    // meta: { text: '首页' },
  }
]

export default constantRoutes

const asyncRoutes = []

export {
  asyncRoutes,
  constantRoutes,
}
