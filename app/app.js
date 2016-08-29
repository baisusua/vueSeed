import Vue from 'Vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import routerConfig from './router/router';

console.log("ssss");
Vue.use(VueRouter);
const router = new VueRouter();
routerConfig(router);
router.start(Vue.extend(App), '#app');