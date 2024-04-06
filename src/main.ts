import { createApp } from 'vue';
import App from '@/App.vue';
import ElementPlus from 'element-plus';

import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'virtual:svg-icons-register';
import globalComponents from '@/components';
const app = createApp(App);


app.use(ElementPlus, {
  locale: zhCn,
});
app.use(globalComponents);

console.log(import.meta.env);
console.log(123);

app.mount('#app');
