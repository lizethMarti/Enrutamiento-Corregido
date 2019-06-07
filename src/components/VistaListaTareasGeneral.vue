<template>
    <lista-tareas
        :titulo="titulo"
        :tareas="tareas"
        :agregarTarea="agregarTarea"
    />
</template>

<script>
import ListaTareas from './find.vue'
//panel/listas/:id
export default {
    components:{ListaTareas},
    beforeMount(){
        var id = this.$route.params.id
        var lista = this.$store.getters.listaPorID(id)
        this.titulo = lista.nombre
    },
    computed:{
        tareas(){
            var id = this.$route.params.id
            return this.$store.getters.tareasPorLista(id)
        }
    },
    methods:{
        agregarTarea(tareaContenido){
            var listaID = this.$route.params.id
            var nuevaTarea = {}
            nuevaTarea.contenido = tareaContenido
            nuevaTarea.completado = false
            nuevaTarea.listaID = listaID
            return this.$store.dispatch('agregarTarea',nuevaTarea)
        }
    },
    data(){
        return{
            titulo: ''
        }
    }

}
</script>

<style>

</style>