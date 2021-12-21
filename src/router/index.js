import { createRouter, createWebHistory } from 'vue-router'
import SegmentedControl from '../components/SegmentedControl.vue';
import ProgressNavigation from '../components/ProgressNavigation.vue';
import RandomSwitches from '../components/RandomSwitches.vue';
import PreviousNextNav from '../components/PreviousNextNav.vue';
import TypingCursor from '../components/TypingCursor.vue';

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
  },
  {
    path: '/previous_next_nav',
    name: 'PreviousNextNav',
    component: PreviousNextNav
  },
  {
    path: '/typing_cursor',
    name: 'TypingCursor',
    component: TypingCursor
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
