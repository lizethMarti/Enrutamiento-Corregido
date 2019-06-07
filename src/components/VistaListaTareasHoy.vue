<template>
    <lista-tareas
        titulo="Hoy"
        :tareas="tareasHoy"
        :agregarTarea="agregarTarea"
    />
</template>

<script>
import ListaTareas from './find.vue'
export default {
    components:{ListaTareas},
    computed:{
        tareasHoy(){
            return this.$store.getters.tareasHoy
        }
    },
    methods:{
        agregarTarea(tareaContenido){
            var nuevaTarea = {}
            nuevaTarea.contenido = tareaContenido
            nuevaTarea.completado = false
            return this.$store.dispatch('agregarTarea',nuevaTarea)
        }
    }

}
</script>

<style>

</style>
