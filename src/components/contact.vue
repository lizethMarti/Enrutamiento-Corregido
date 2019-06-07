<template>
<div id="contacto">
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex class="text-xs-center">
                <section>
            <div class="container">
                <div class="row">
                    <div class=" col-12 col-md-6"></div>
                    <div class="col-12 col-md-6">
                        <img class="contac "  src="../../Img/Contact.png" alt="">
                        <h3 class="h"><br>Contacto</h3>
                    <div class="contub d-flex">
                        <div class="caja1">
                            <img class="iubi " width="43 px" height= "43 px"  src="../../Img/Ubicacion.png" alt="">
                        </div>
                        <div class="col form-group mt-1">
                            <label class="le" for="Ubicacion">Ubicación</label>
                            <br><br><input type="text" class="form-control" name="ubicacion" id="ubicacioncon">
                        </div>
                    </div>
                    <div class="contub d-flex">
                        <div class="caja2">
                            <img class="iubi" width="43 px" height= "43 px"  src="../../Img/arroba.png" alt="">
                        </div>
                        <div class=" col form-group mt-1">
                            <label class="le"    for="Correo">Correo</label>
                            <br><br><input type="text" class="form-control" name="correo" id="correocon">
                        </div>
                    </div>
                    <div class="contub d-flex">
                            <div class="caja3">
                                <img class="iubi" width="43 px" height= "43 px"  src="../../Img/correo.png" alt="">
                            </div>
                            <div class="col form-group mt-1">
                                <label class="le" for="Mensaje">Mensaje</label>
                                <br><br><textarea name="mensaje" id="mensaje" class="form-control" rows="8"></textarea>
                            </div>
                            
                        </div>
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
export default {

}
</script>

<style>

#contacto{
    text-align: center;
    padding-top: 125px;
    background: url("../../Img/Fondo\ 4.png");
    display: block;
    background-size: cover;
    padding-bottom: 105px;
}
.h{
    padding-top: 8px;
    padding-left:15px; 
    font-size: 24px;
    padding-bottom: 107px;
}
.contac{
    width:100px;
    height: 100px;
}
.contub{ 
    text-align: left;
}
.caja3{ 
    padding-bottom:15 px; 
}
.le{
    font-size: 24px;
}
</style>
