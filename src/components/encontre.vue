
<template>
<div id="encontre">
<v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex class="text-xs-center">
            <section>
                
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="Eh">Encontre</h2>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9">
                            <form  role="form" class="re form-inline" action="">
                                <div class="col form-group mt-1">
                                    <label class="le control-label col-md-3" for="Raza">RAZA</label>
                                    <input v-model="id" type="text"  class="form-control" name="raza" id="raza" >
                                </div>
                                <div class="re col form-group mt-1">
                                    <label class="le control-label col-md-3" for="Contactoen">CONTACTO</label>
                                    <input v-model="nombre" type="text" class="form-control"  name="contactoen" id="contactoen">
                                </div>
                                <div class="re col form-group mt-1">
                                    <label class="le control-label col-md-3" for="Foto">FOTO</label>
                                    <textarea name="mensaje" class="form-control" id="foto" rows="6"></textarea>
                                </div>
                            </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a href="http://localhost:8080/#/Busco" class="center btn btn-outline-dark btn-lg btn-light mt-5" role="button">Publicar</a>
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
import Vue from 'vue'
export default {
    data(){
        return {
            id: '',
            nombre: ''
        }
    },
    methods:{
        addPerrito: function(){
            this.addPerrito().then(()=>{
                this.id = ''
                this.nombre = ''
            }).catch((error)=>{
                console.log(error)
                this.id = ''
                this.nombre = ''
            })
            
        }
    }

}
var vm = new Vue({
    el:'section',
    data: {
    mensaje: 'hola esta mierda sirve',
    }
    })
</script>

<style>
.form-inline{
    display: flex;
    justify-content: space-around;
}
#encontre{
    text-align: center;
    background: url("../../Img/Fondo\ 8.png");
    display: block;
    background-size: cover;
    padding-top: 130px;
}
.Eh{
    text-align: center;
    font-size: 72px;
    padding-bottom: 125px;
}
.imgf{
    width:50px;
    height: 50px;
}
.btn{
    font-size: 24px;
    color: black;
}
@media (max-width:967px){
.form-inline{
    display: flex;
    flex-flow: column !important;
}

label{
    text-align: center;
}
}
</style>
