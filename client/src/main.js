import {createApp} from 'vue'
import App from './App.vue'
import routes from './routes'
import store from './store'
import {createStore} from 'vuex'
import {createRouter, createWebHashHistory} from 'vue-router'
import './assets/tailwind.css'

createApp(App).use(createStore(store)).use(createRouter({
    history: createWebHashHistory(),
    routes
})).mount('#app')
