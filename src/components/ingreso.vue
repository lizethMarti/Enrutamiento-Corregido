<template>
<div id="ingreso">
<v-container fill-height >
        <v-layout align-center justify-center>
            <v-flex class="text-xs-center">
                <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-7"></div>
                    <div class="col-md-5">
                        <img class="ing" src="../../Img/LOGO.png" alt="">
                        <form @submit.prevent="loginCorreo" class="mt-5" >
                                <label :rules="reglasEmail" class="le text-white"  for="Correo">Correo</label>
                                <br><br><input  v-model="usuario" type="text" class="form-control" name="correo" id="correocon">
                            <label class="le mt-5 text-white" for="password">Contraseña</label>
                            <input  type="password" class="form-control" name="password" id="password">
                        </form>
                        <v-btn :disabled="!valido"   type="sumbit" href="http://localhost:8080/#/Pup"  class="teal " role="button" >Ingresar</v-btn>
                        <a href="http://localhost:8080/#/Registro" class="btn-info btn-lg mt-5 ml-3" role="button">REGISTRAR</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-9">
                        <p class="text text-white mt-5">
                            ¡Comprométanse a acabar con<br>
                            los cachorros sin hogar hoy!
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
            </v-flex>
        </v-layout>
    </v-container>
</div>
    
</template>

<script>
import firebase from '../firebase';
import { error } from 'util';
import {mixinFormulario} from '../mixins'

export default {
    data(){
        return{
            usurio:' ',
            clave:' '
        }
    },
    methods:{
        loginCorreo(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.usurio, this.clave)
            .then((usuer)=> alert('Usuario Conectado'), (error)=>console.error(error));
        }
    },
    mixins:[mixinFormulario]
}
</script>

<style>

#ingreso{
    text-align: center;
    padding-top: 125px;
    background: url("../../Img/Fondo\ 6.png");
    display: block;
    background-size: cover;
    padding-bottom: 105px;
}
.ing{
    width:150px;
    height: 100px;
}
.text{
    padding-top: 100px;
    font-size: 55px;
    padding-bottom: 105px;
}
h4{
    padding-top: 217px;
    font-size: 72px;
    padding-bottom: 105px;
}

.rep{ 
    padding-left: 15px;
}
.cen{ 
    margin-bottom: 180px;
}
.btn{
    font-size: 24px;
    color: black;
}
</style>
