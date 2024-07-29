import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Add SVG core
import { library } from "@fortawesome/fontawesome-svg-core";
// Free icon style
import { faS } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
//add icons styles to svg core
library.add(faS, fab, far);
createApp(App)
  .use(store)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
