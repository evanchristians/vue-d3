import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import "./styles/main.scss";

const app = createApp(
  defineAsyncComponent(() => import("./App.vue"))
);

app.mount("#app");
