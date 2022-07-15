import toast  from "@/components/toast/index";

const install = (Vue) => {
    if (install.installed) return
    install.installed = true
    Vue.prototype.$toast = toast
}
export default {
    install
}