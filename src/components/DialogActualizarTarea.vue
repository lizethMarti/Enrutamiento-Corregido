<template>
    <v-dialog 
    v-model="dialogTarea"
    width="400"
    >
        <v-card>
            <v-toolbar color="transparent" flat>
                <v-toolbar-title>ACTUALIZAR PERRITO</v-toolbar-title>
                <v-spacer/>
                <v-btn icon  @click="dialogTarea = false">
                    <v-icon color="red">cancel</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider/>
            <v-card-text>
                <v-form>
                    <v-container>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field
                                    label="Raza"
                                    v-model="contenido"
                                />
                            </v-flex>
                            <input ref="inputArchivo" @change="seleccionarArchivo" v-show="false" type="file"/>
                            <v-flex xs12 dense class="lista_archivos">
                                <v-list>
                                    <v-toolbar flat>
                                        <v-toolbar-title>Archivos</v-toolbar-title>
                                        <v-spacer/>
                                        <v-btn :loading="cargando" icon @click="abrirArchivos">
                                            <v-icon color="success">add</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-list-tile v-for="(archivo,indice) in archivos" :key="indice">
                                        <v-list-tile-title>
                                            <a :href="archivo.url">{{archivo.nombre}}</a>
                                        </v-list-tile-title>
                                        <v-list-tile-action>
                                            <v-btn icon @click="eliminarArchivo(indice)">
                                                <v-icon color="red">delete</v-icon>
                                            </v-btn>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </v-list>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-btn :loading="cargando" block color="success" outline  @click="guardarCambios">GUARDAR</v-btn>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-btn :loading="cargando" block color="red" outline @click="eliminarTarea">ELIMINAR</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import bus from '../bus'
import { error } from 'util';
export default {
    beforeMount(){
        bus.$on('dialogTarea',(tareaID)=>{
            var tarea = this.$store.getters.tareaPorID(tareaID)
            this.id = tareaID
            this.contenido = tarea.contenido
            this.archivos = tarea.archivos
            this.dialogTarea = !this.dialogTarea
        })
    },
    data(){
        return{
            cargando : false,
            dialogTarea: true,
            contenido: '',
            id:0,
            archivos:[]
        } 
    },
    methods:{
        abrirArchivos(){
            this.$refs.inputArchivo.click()
        },
        seleccionarArchivo(){
            var archivoSeleccionado = e.target.files[0]
            this.$store.dispatch('subirArchivo',archivoSeleccionado).then(()=>{

            }).catch((error)=>{

            })
        },
        eliminarArchivo(indice){
            this.cargando = true
            this.$store.dispatch('eliminarArchivo',{
                indice:indice,
                tareaID:id
            }).then(()=>{
                this.cargando = false
            }).catch((error)=>{
                this.cargando = false
                console.log(error)})
        },
        guardarCambios(){
            this.cargando = true
            var tarea = {}
            tarea.contenido = this.contenido
            tarea.id = this.id
            this.$store.dispatch('actualizarTarea', tarea).then(()=>{
                this.cargando = false
                this.dialogTarea = false
            }).catch((error)=>{
                this.cargando = false
                console.log(error)})
        },
        eliminarTarea(){
            this.$store.dispatch('eliminarTarea',tareaID).then(()=>{
                this.cargando = false
                this.dialogTarea = false
            }).catch((error)=>{
                this.cargando = false
                console.log(error)})
        }
    }
}
</script>

<style>
.lista_archivos{
    max-height: 300px;
    overflow-y: scroll; 
}
</style>
