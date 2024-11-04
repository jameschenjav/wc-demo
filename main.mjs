import { createApp } from 'vue';
import MainApp from './components/MainApp.vue';
import WcDemoComponent from './components/wc-demo-component.js';

customElements.define('wc-demo-component', WcDemoComponent);

createApp(MainApp).mount(document.getElementById('root'));
