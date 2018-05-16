import VueRouter from 'vue-router'
import Page from '../components/page1/page1';
import PageTow from '../components/mainPage/mainPage';
const router = new VueRouter({
  routes: [
    { path: '/stepfirst', component: Page },
    { path: '/', component: PageTow }
  ]
});
export default router;