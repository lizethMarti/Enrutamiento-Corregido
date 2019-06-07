<template>
    <v-content class="l">
        <v-container fill-height>
            <v-layout align-center justify-end>
                <v-flex xs12 sm6 md5 class="text-xs-rigth">
                    <v-card class="brown lighten-5"> 
                        <v-responsive >
                            <img class="logo m-5" src="../../Img/LOGON.png" alt="">
                        </v-responsive>
                        <v-card-text>
                            <h4 class="titulo">INGRESAR</h4>
                            <v-form v-model="valido">
                                <v-text-field class="ml-2"
                                :rules="reglasEmail"
                                label="Correo electronico" 
                                v-model="email"
                                prepend-icon="email"
                                />
                                <v-text-field class="ml-2"
                                label="Contraseña"  
                                type="password" 
                                v-model="password"
                                prepend-icon="lock"
                                />
                                <v-btn 
                                :loading="cargandoFormulario"
                                @click="loginCorreo"
                                href="http://localhost:8080/#/Pup"
                                block 
                                class="warning">INGRESAR</v-btn>
                                <div class="my-4">
                                    <span>¿No tiene una cuenta? <router-link to="/registrese">REGISTRESE</router-link></span>
                                </div>
                                <v-card-text :error="error"/>
                                <v-alert  color="red" v-show="Boolean(error)">
                                    {{error}}
                                </v-alert>
                            </v-form>
                            
                        </v-card-text>
                    </v-card>
                    <div>
                        <p class="text text-white">
                            ¡Comprométanse a acabar con<br>
                            los cachorros sin hogar hoy!
                        </p>
                    </div>
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
    methods:{
        loginCorreo(){
            this.cargandoFormulario=true
            this.$store.dispatch('loginCorreo',{
                email: this.email,
                password: this.password
            }).them((user)=>{
                this.cargandoFormulario=false
            }).catch((error)=>{
                this.cargandoFormulario=false
                this.error=error
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
}
.l{
    text-align: center;
    padding-top: 125px;
    background: url("../../Img/Fondo\ 6.png");
    display: block;
    background-size: cover;
    padding-bottom: 105px;
}
.text{
    padding-top: 50px;
    font-size: 30px;
    padding-bottom: 15px;
}
</style>
