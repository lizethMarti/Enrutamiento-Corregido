<template>
<div id="busco">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="Bh">Busco</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="tb col-12">
                        
                    </div>
                </div>
                    <table class="table  table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Raza</th>
                                    <th>Contacto</th>
                                    <th>Foto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-success">
                                    <td><v-flex xs12 v-for="lista in listas" :key="lista.id">
                                <span class="body-2">{{lista.id}}</span></v-flex></td>
                                    <td><v-flex xs12 v-for="lista in listas" :key="lista.id">
                                <span class="body-2">{{lista.nombre}}</span></v-flex> </td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </section>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="imgf"  src="../../Img/facebook.png" alt="">
                    <img class="imgf" src="../../Img/instagram.png" alt="">
                    <img class="imgf" src="../../Img/twitter.png" alt="">
                </div>
                <div class="col-12">
                    <p class="textfot">
                        Copyrigth © 2019 
                    </p>
                </div>
            </div>
        </div>
    </footer>

</div>
    
</template>

<script>
import encontre from './encontre.vue'
import tareas from '../store/tareas'
export default {
    computed:{
        listas(){
            return this.$store.getters.listas
        }
    }
}
</script>

<style>
#busco{
    text-align: center;
    background: url("../../Img/Fondo\ 9A.png");
    display: block;
    background-size: cover;
    padding-top: 107px;
}
.Bh{
    text-align: center;
    font-size: 72px;
    padding-bottom: 39px;
}
.tb{
    padding-bottom: 81px;
}
.imgf{
    width:50px;
    height: 50px;
}
footer{
    text-align: center;
    padding-top: 63px;
    background: #BACCC9;
}
.textfot{
    padding-top: 20px;
}
</style>
