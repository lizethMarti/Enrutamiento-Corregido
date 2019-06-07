<template>
    <div class="perrito">
    <dialog-actulizar-tarea/>
    <v-text-field
        label="Agregar Tarea a esta lista"
        v-model="tareaNueva"
        @keyup.13="agregandoTarea"
    />
    <v-card>
        <v-toolbar color="cyan lighten-4" flat="">
            <v-toolbar-title>{{titulo}}</v-toolbar-title>
        </v-toolbar>
        <v-divider/>
        <v-card-text>
            <v-list>
                <tarea v-for="tarea in tareas" :key="tarea.id" :tarea="tarea"/>
            </v-list>
        </v-card-text>
    </v-card>
    </div>
    
</template>

<script>
import Tarea from './tareas'
import DialogActulizarTarea from './DialogActualizarTarea.vue'
import { error } from 'util';
export default {
    props:{
        titulo:String,
        tareas:Array,
        agregarTarea: Function
    },
    components:{Tarea,DialogActulizarTarea},
    data(){
        return{
            tareaNueva: ''
        }
    },
    methods:{
        agregandoTarea(){
            this.agregarTarea(this.tareaNueva).then((id)=>{
                this.tareaNueva = ''
            }).catch((error)=>{
                console.log(error)
                this.tareaNueva = ''
            })
        }
    }

}
</script>

<style>
.perrito{
    margin: 2%;
}
</style>
