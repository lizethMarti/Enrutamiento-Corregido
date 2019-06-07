<template>
    <v-content class="li"  >
        <v-container fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm6 md5 class="text-xs-center">
                    <v-card class="brown lighten-5"> 
                        <v-responsive >
                            <img class="logo m-5" src="../../Img/LOGON.png" alt="">
                        </v-responsive>
                        <v-card-text>
                            <h4 class="titulo">REGISTRARSE</h4>
                            
                            <v-form  v-model="valido" slot="formulario">
                                <v-text-field class="ml-2"
                                v-model="nombreCompleto" 
                                label="Nombre Completo"
                                prepend-icon="person"
                                :rules="reglasNombre"
                                />
                                <v-text-field class="ml-2"
                                v-model="email" 
                                label="Correo electronico"
                                prepend-icon="email"
                                :rules="reglasEmail"
                                />
                                <v-text-field class="ml-2"
                                v-model="password" 
                                type="password"
                                label="Contraseña"
                                prepend-icon="lock"
                                :rules="reglasPassword"
                                />
                                <v-text-field class="ml-2"
                                type="password"
                                v-model="repetirPassword" 
                                label="Repertir Contraseña"
                                prepend-icon="lock"
                                :rules="reglasRepetirPassword"
                                />
                                <v-card-text :error="error"/>
                                <v-btn href="http://localhost:8080/#/Pup" @click="crearusuario"  :disabled="!valido" :loading="cargandoFormulario" block class="warning mb-3">REGISTRARSE</v-btn>
                                <router-link class="mt-5" to="/b">¿Ya tiene una cuenta?</router-link>
                                <v-alert  color="red" v-show="Boolean(error)">
                                    {{error}}
                                </v-alert>
                            </v-form>
                        </v-card-text>
                    </v-card>
                    
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import {mixinFormulario} from '../mixins'
import { error } from 'util';
export default {
    props:['titulo','error'],
    mixins:mixinFormulario,
    data(){
        return{
            nombreCompleto:'',
            repetirPassword:''
        }
    },
    methods:{
        crearUsuario(){
            var nuevoUsuario = {}
            this.cargandoFormulario = true
            nuevoUsuario.nombreCompleto = this.nombreCompleto
            nuevoUsuario.password = this.password
            nuevoUsuario.email = this.email
            this.$store.dispatch('crearusuario', nuevoUsuario).then((usuario)=>{
                this.cargandoFormulario = false
            }).catch((error)=>{
                this.cargandoFormulario = false
                this.error = error
            })
        }
    }
    
}
</script>

<style>
.logo{
    height: 120px;
    width: 180px;
}
.titulo{
    padding: 10px;
    margin: 0%;
}
.li{
    text-align: center;
    background: url("../../Img/Fondo\ 5.png");
    display: block;
    background-size: cover;
}
.text{
    padding-top: 50px;
    font-size: 30px;
    padding-bottom: 15px;
}

</style>