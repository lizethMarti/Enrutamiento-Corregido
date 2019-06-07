import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import Problema from './components/Problem.vue'
import Equipo from './components/Etrabajo.vue'
import Contacto from './components/contact.vue'
import Pupfinder from './components/Pup.vue'
import Busco from './components/busco.vue'
import Encontre from './components/encontre.vue'
import Registro from './components/registro.vue'
import Ingreso from './components/ingreso.vue'
import Base from './components/formulariobase.vue'
import Registrarse from './components/formularioregistro.vue'

import Find from './components/find.vue'
import VistaListaTareashoy from './components/VistaListaTareasHoy.vue'
import VistaListas from './components/VistaListas.vue'
import VistaListasTareasGeneral from './components/VistaListaTareasGeneral.vue'
const rutas = [{
        path:'/f',
        component : Find
    },{
        path:'/hoy',
        component : VistaListaTareashoy
    },{
        path:'/l',
        component : VistaListas
    },,{
        path:'/tg',
        component : VistaListasTareasGeneral
    },
{
    path:'/b',
    component : Base
},
{
    path:'/registrese',
    component : Registrarse
},{
        path:'/',
        component : Home
    },{
        path:'/Problema',
        component : Problema
    },{
        path:'/Equipo',
        component : Equipo
    },{
        path:'/Contacto',
        component : Contacto
    },{
        path:'/Pup',
        component : Pupfinder
    },{
        path:'/Busco',
        component : Busco
    },{
        path:'/Encontre',
        component : Encontre
    },{
        path:'/Ingreso',
        component : Ingreso
    },{
        path:'/Registro',
        component : Registro
    }]

export default new VueRouter(
    {
        routes: rutas
    }
)
