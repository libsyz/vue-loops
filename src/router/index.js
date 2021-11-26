import { createRouter, createWebHistory } from 'vue-router'
import SegmentedControl from '../components/SegmentedControl.vue';
import ProgressNavigation from '../components/ProgressNavigation.vue';
import RandomSwitches from '../components/RandomSwitches.vue';

const routes = [
  {
    path: '/segmented_control',
    name: 'SegmentedControl',
    component: SegmentedControl
  },
  {
    path: '/progress_navigation',
    name: 'ProgressNavigation',
    component: ProgressNavigation
  },
  {
    path: '/random_switches',
    name: 'RandomSwiches',
    component: RandomSwitches
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
