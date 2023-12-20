import { createApp } from "vue";
import router from '@/router/index'
import '@/styles/tailwind.css'
import App from "./app.vue";
// import "ui/styles.css"
// import store from './store/index'
// import 'virtual:uno.css'
// import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
// app.use(store)
app.mount('#app')
