import "popper.js"
import "jquery";
import "bootstrap";
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import enrutador from './enrutador'
import "bootstrap/dist/css/bootstrap.min.css"
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: enrutador,
    store
}).$mount('#app')