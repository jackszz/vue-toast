# toast

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build:lib

```

```javascript
import Vue from 'vue'
import VueToast from 'toast'
Vue.use(VueToast)

this.$toast({
    message: 'message',
    type: 'info' // default type
})

this.$toast({
    message: 'message',
    type: 'success'
})
this.$toast({
    message: 'message',
    type: 'warning'
})
this.$toast({
    message: 'message',
    type: 'error'
})
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
