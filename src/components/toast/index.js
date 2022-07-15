import Vue from 'vue'
import Toast from './src/index.vue'

const ToastConstructor  = Vue.extend(Toast)
let instances = []
let iid = 1
const toast = (options = {}) => {
   if (Vue.prototype.$isServer) return
   iid++
   let id = `toast_${iid}`
//    let userOnClose = options.onCloseFn;
   options.onCloseFn = function() {
    toast.close(id)
  }
   const instance = new ToastConstructor({
    data: options
   })
   instance.$mount()
   instance.id = id
   document.body.appendChild(instance.$el)
   let verticalOffset = options.offset || 20;
   instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
   instance.verticalOffset = verticalOffset
   instances.push(instance);
   return instance
}

toast.close = (id) => {
   let len = instances.length
   let index = -1
   let elOffsetHeight
   for (let i = 0; i < len; i++) {
     const it = instances[i]
      if (id === it.id) {
        index = i
        elOffsetHeight = it.$el.offsetHeight
        // if (typeof userClose === 'function') userClose(it)
        instances.splice(i, 1)
        break
      }
   }
   if (len <= 1 || index === -1 || index > instances.length - 1) return;
   for (let i = index; i < len - 1; i++) {
      let style = instances[i].$el.style
      
      instances[i].$el.style.top = `${parseInt(style.top) - elOffsetHeight - 16}px`
   }
}
export default toast