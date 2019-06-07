<template>
    <div>
        <v-form v-model="valido">
            <v-layout class="findd" wrap>
                <v-flex xs12>
                    <h2>ENCONTRE</h2>
                    <v-divider/>
                </v-flex>
                <v-flex xs12>
                    <v-text-field
                        label="Raza Del Nuevo Perrito"
                        :counter="40"
                        :rules="reglaLista"
                        v-model="listaNueva"
                    />
                </v-flex>
                <v-flex xs12>
                    <v-btn :disabled="!valido" class="success" block>AGREGAR PERRITO</v-btn>
                </v-flex>
            </v-layout>
        </v-form>

                <v-layout class="findd" wrap>
                    <v-flex xs12>
                        <h2>BUSCO</h2>
                        <v-divider/>
                    </v-flex>
                    <v-flex xs12 v-for="lista in listas" :key="lista.id">
                        <v-card @click="irLista(lista.id)" class="text-xs-center card-lista" height="100">
                            <v-container fill-height>
                            <v-layout align-center justify-center>
                                <v-card-text>
                                <span class="body-2">{{lista.nombre}}</span>
                            </v-card-text>
                            </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>
        
        
        
    </div>
</template>

<script>
import tareas from '../store/tareas'
export default {
    data(){
        return {
            listaNueva: '',
            valido: false,
            reglaLista:[
                (nombre)=>nombre.length>0 || 'Debe ingresar una raza a la nueva lista',
                nombre.length<=40 || 'El nombre de la nueva raza no debe exceder los 40 caracteres'
            ]
        }
    },
    computed:{
        listas(){
            return this.$store.getters.listas
        }
    },
    methods:{
        irLista(listaID){
            this.$router.push(`/f/${listaID}`)
        }
    }
}
</script>

<style>
.findd{
    margin: 5%
}
.card-lista:hover{
    cursor:pointer
}

</style>
