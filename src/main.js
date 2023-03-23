import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import Router from './router';
import i18n from "./i18n/i18n"

const app = createApp(App)

app.use(Router);
app.use(i18n);

app.mount('#app')
