import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/axios.config'
//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//particles粒子库
import Particles from 'particles.vue3'

createApp(App).use(Particles).use(ElementPlus).use(router).use(store).mount('#app')
