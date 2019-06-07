<template>
<div id="registro">
<v-container fill-height >
        <v-layout align-center justify-center>
            <v-flex class="text-xs-center">
                <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4 class="reee">Registro</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-8">
                            <form  class="re form-inline" action="">
                                    <div class="col form-group mt-1">
                                        <label class="le control-label col-md-3" for="Usuario">Usuario</label>
                                        <input type="text"  class="form-control"  name="usuariore" id="usuariore" >
                                    </div>
                                    <div class="re col form-group mt-1">
                                        <label class="le control-label col-md-3" for="Correore">Correo</label>
                                        <input type="text"   class="form-control" name="correore" id="correore">
                                    </div>
                                    <div class="re col form-group mt-1">
                                        <label class="le control-label col-md-3" for="Telefono">Telefono</label>
                                        <input type="text"   class="form-control" name="telefono" id="telefono">
                                    </div>
                                    <div class="re col form-group mt-1">
                                        <label class="le control-label col-md-3" for="Telefono">Contraseña </label>
                                        <input type="text"   class="form-control" name="clave" id="clave">
                                    </div>
                                    <div class="re col form-group mt-1">
                                        <label class="le control-label col-md-3" for="Telefono">Confirmación  </label>
                                        <input type="password"   class="form-control" name="confir" id="confir">
                                    </div>
                            </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a href="http://localhost:8080/#/Pup" class="btn btn-outline-dark btn-lg mt-5" role="button">Registrar</a>
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
import {mixinformulario} from '../mixins'
export default {
    mixins:[mixinformulario]
}
</script>

<style>

.le{
    font-size: 20px;
}
.rep{ 
    padding-left: 15px;
}
.cen{ 
    margin-bottom: 180px;
}
#registro{
    text-align: center;
    background: url("../../Img/Fondo\ 5.png");
    display: block;
    background-size: cover;
}
.reee{
    font-size: 72px;
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
