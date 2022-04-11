import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import hljs from "highlight.js/lib/common";
import javascript from "highlight.js/lib/languages/javascript"
import hljsVuePlugin from "@highlightjs/vue-plugin"
import "./assets/tailwind.css";
hljs.registerLanguage('javascript', javascript);

createApp(App).use(store).use(hljsVuePlugin).use(router).mount("#app");
