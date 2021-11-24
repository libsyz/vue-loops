import { createRouter, createWebHistory } from 'vue-router'
import SegmentedControl from '../components/SegmentedControl.vue'

const routes = [
  {
    path: '/segmented_control',
    name: 'SegmentedControl',
    component: SegmentedControl
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
