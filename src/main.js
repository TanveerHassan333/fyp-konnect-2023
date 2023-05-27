import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import "bootstrap/dist/js/bootstrap.js"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('QuillEditor', QuillEditor)
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"
