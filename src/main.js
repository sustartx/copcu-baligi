import { createApp } from "vue";
import Layout from "./views/layout/Layout";
import router from "./router";
import store from "./store";

import "./assets/scss/main.scss";

// // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#electron-serve-freezes-on-launching-electron
// process.on("unhandledRejection", (error) => {
//     console.error("Hata Konumu : Main.js");
//     console.error(error);
// });

// ----------------------------------------------------------------------------------------------------
// Diğer
// ----------------------------------------------------------------------------------------------------
import FlagIcon from "vue-flag-icon";
// import i18n from "./i18n";
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// Bootstrap
// ----------------------------------------------------------------------------------------------------
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// Font Awesome
// ----------------------------------------------------------------------------------------------------
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
// ----------------------------------------------------------------------------------------------------

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp({
    extends: Layout,
});

app.use(store);
app.use(router);
app.use(FlagIcon);
// app.use(i18n);
app.use(VueSweetalert2);

app.component("font-awesome-icon", FontAwesomeIcon);

app.config.productionTip = true;

app.mount("#app");
