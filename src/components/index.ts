//全局组件注册
import SvgIcon from './SvgIcon/index.vue';


const allGlobalComponents = {SvgIcon};
export default {
    install(app){
        Object.keys(allGlobalComponents).forEach(item=>{
            app.component(item,allGlobalComponents[item]);//全局组件注册
        })
    }
}