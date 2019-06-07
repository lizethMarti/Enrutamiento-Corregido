import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import moduloUsuario from './usuarios'
import moduloTareas from './tareas'
import moduloListas from './listas'
export default new Vuex.Store({
    modules:[moduloUsuario,moduloTareas,moduloListas]
})