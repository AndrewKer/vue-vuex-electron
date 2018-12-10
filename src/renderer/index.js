import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import router from './router';
import Store from '../store';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store(Store);

Vue.use(VueMaterial);

new Vue({
    el: '#app',
    store,
    render(h) {
        return h(App);
    },
    router
});