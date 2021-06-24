import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent';

const app = createApp(App);

// Registrar componente para usar em toda aplicacao
app.component('GlobalComponent', GlobalComponent);
app.mount('#app');
