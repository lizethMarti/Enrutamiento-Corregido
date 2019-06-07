<template>
<div id="pup">
<v-container fill-height >
        <v-layout align-center justify-center>
            <v-flex class="text-xs-center">
                <section >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="fontp">¿En que te podemos ayudar?</h2>
                    </div>
                </div>
                <div class="op row">
                        <div class="col-lg-6">
                                <img src="../../Img/Busco.png" alt="">
                                <br><a href="http://localhost:8080/#/Busco" class="btn btn-lg btn-info p-3 " role="button">Busco</a>
                            </div>
                    <div class="col-lg-6">
                        <img src="../../Img\encontre.png" alt="">
                        <br><a href="http://localhost:8080/#/Encontre" class="btn btn-info btn-lg p-3" role="button">Encontre</a>
                    </div>
                </div>
                <div class="ult row">
                    <div class="col-12">
                        <h2 class="fontp">¡Brindémosles cariño y felicidad!</h2>
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

.fontp{
    font-size: 65px;
    padding-top: 80px;
}
.op{
    padding-top: 107px;
    text-align: center;
    padding-bottom: 10px;
}
.btn{
    font-size: 24px;
    color: black;
}
.ult{
    text-align: center;
    padding-bottom: 100px;
}
#pup{
    text-align: center;
    background: url("../../Img/Fondo\ 7.png");
    display: block;
    background-size: cover;
}
</style>
