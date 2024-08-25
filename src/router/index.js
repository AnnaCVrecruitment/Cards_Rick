import { createWebHistory, createRouter } from 'vue-router'
import IndexPage from "../pages";
import Cards from "../pages/cards";

const routes = [
  { path: '/', component: IndexPage },
  { path: '/cards', component: Cards },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;