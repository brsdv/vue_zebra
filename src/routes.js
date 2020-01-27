import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import List from './components/List.vue'
import Scheme from "./components/Scheme.vue";

export default new VueRouter ({
  routes: [
    {path: '', name: 'Pages', component: Index},
    {path: '/list', name: 'Пресс-релизы и новости', component: List},
    {path: '/scheme', name: 'Структура', component: Scheme}
  ],
  mode: 'history'
})
