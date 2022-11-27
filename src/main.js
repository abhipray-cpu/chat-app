import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVueIcons)
import router from './router/router'
import store from './store/index'
Vue.use(BootstrapVue)
import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)
import { EmojiPickerPlugin } from 'vue-emoji-picker'
Vue.use(EmojiPickerPlugin)
import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
    meta: [
        { 'content': "width=device-width" },
        { 'initial-scale': 1 },
        { 'shrink-to-fit': 'no' },
        { 'name': "viewport" }
    ]
})
Vue.config.productionTip = false
import drag from "v-drag"
Vue.use(drag);
// fireabase
new Vue({
    BootstrapVue,
    router,
    store,
    render: h => h(App)
}).$mount('#app')

/*
create custom select component
and form tags component
*/