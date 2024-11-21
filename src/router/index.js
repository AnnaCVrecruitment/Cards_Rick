import { createWebHistory, createRouter } from 'vue-router'
import IndexPage from "../pages/index.vue";
import Cards from "../pages/cards/index.vue";

const routes = [
  { path: '/', component: IndexPage },
  { path: '/cards', component: Cards },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;