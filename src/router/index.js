import { createWebHistory, createRouter } from 'vue-router'
import HomePage from "../components/HomePage.vue";
import Cards from "../components/Cards.vue";

const routes = [
  { path: '/', component: HomePage },
  { path: '/cards', component: Cards },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
