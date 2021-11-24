
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

// const SegmentedControlLink = { template: '<div> Segmented Control </div>'}

// const routes = [
//   { path: '/segmented_control', component: SegmentedControlLink },
// ]

// console.log(VueRouter);


const app = createApp(App).use(router)
app.mount('#app')
