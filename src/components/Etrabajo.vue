<template>
<div id="trabajo">
<v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex class="text-xs-center">
            <section>
            <div class="container ">
                <div class="row">
                    <div class="col-12">
                        <h2 class="titu">Equipo de Trabajo</h2>
                    </div>
                    <div class="col-md-12">
                        <div class="contenedor">
                            <div class="a col-md-3">
                                <img src="../../Img/1.png"  alt="">
                                <h3>Desarrollador</h3>
                            </div>
                            <div class="a col-md-3">
                                <img src="../../Img/2.png" alt="">
                                <h3>Directora de <br>proyecto</h3>
                            </div>
                            <div class="a col-md-3">
                                <img src="../../Img/3.jpg" alt="">
                                <h3>Desarrollador</h3>
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

#trabajo{
    text-align: center;
    padding-top: 175;
    background: url("../../Img/Fondo\ 3A.png")
}
.titu{
    color:black;
    font-size: 74px;
    padding-top: 135px;
}
.contenedor{
    padding-top: 183px;
    padding-bottom: 519px;
    font-size: 21px;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
}
.contenedor h3{
    padding-top:21px;
    color: black;
}
@media (max-width:867px){
    .contenedor{
    padding-top: 183px;
    padding-bottom: 519px;
    font-size: 21px;
    display: flex;
    flex-flow: column wrap;
}
.a{
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
}
}
</style>
