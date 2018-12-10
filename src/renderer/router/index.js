import Vue from 'vue';
import Router from 'vue-router';
import ComponentWindow_1 from '@/components/ComponentWindow_1';
import ComponentWindow_2 from '@/components/ComponentWindow_2';
import ComponentWindow_3 from '@/components/ComponentWindow_3';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(Router, VueMaterial);

export default new Router({
  routes: [
    {
      path: '/tab1',
      name: 'ComponentWindow_1',
      component: ComponentWindow_1
    },
    {
      path: '/tab2',
      name: 'ComponentWindow_2',
      component: ComponentWindow_2
    },
    {
      path: '/tab3',
      name: 'ComponentWindow_3',
      component: ComponentWindow_3
    }
  ]
});