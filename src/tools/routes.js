import VueRouter from 'vue-router'
import RelationPage from '../components/relationPage/relationPage';
import MainPage from '../components/mainPage/mainPage';
const router = new VueRouter({
  routes: [
    { path: '/relation_page', component: RelationPage },
    { path: '/', component: MainPage }
  ]
});
export default router;