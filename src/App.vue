<template>
  <v-app>
    <header >
        <div class="containerhe">
            <div class="row">
                <div class="col-12 p-2">
                        <img class="img-fluid" src="../Img/LOGO.png" alt="">
                </div>
            </div>
        </div>
        <nav class="navbar navbar-center navbar-expand-lg navbar-light ">
		<div class="container">
			<a href="http://localhost:8080" class="navbar-brand">  </a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Menu de Navegacion">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav navbar-center mr-auto">
                        <li class="nav-item">
                            <a  href="http://localhost:8080/#/" class="nav-link"> HOME </a>
                        </li>
                        <li class="nav-item">
                            <a  href="http://localhost:8080/#/Problema" class="nav-link"> PROBLEMA</a>
                        </li>
                        <li class="nav-item">
                            <a  href="http://localhost:8080/#/Equipo" class="nav-link"> EQUIPO DE TRABAJO</a>
                        </li>
                        <li class="nav-item">
                            <a  href="http://localhost:8080/#/Contacto" class="nav-link"> CONTACTO </a>
                        </li>
                        <li class="nav-item">
                            <a  href="http://localhost:8080/#/b" class="nav-link"> PUPFINDER </a>
                        </li>
                </ul>
			</div>
		</div>
        </nav>
    </header>
    <v-contet>
    </v-contet>
    <router-view></router-view>
</v-app>
</template>

<script>
import { user } from 'os';
import { basename } from 'path';
import firebase from './firebase';
export default {
    beforeCreate(){
        firebase.auth().onAuthStateChanged((user)=>{
            //Si el user es null entonces no hay un usuario logeado
            if(user){
                console.log.user
                this.$store.commit('login',user)
                this.$router.push('/Pup')
            }else{
                this.$router.push('/b')
            }
        })
    },
    data () {
        return {
            drawer:false
    }
}
}
</script>
<style>
.containerhe{
    background: #1E9B27;
    text-align: center;
}
.navbar-nav.navbar-center {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
}
nav.navbar {
    background-color: #FCEE21;
}
.nav-link{
    font-size: 18px;
    color:black;
}

@media (max-width:1067px){
 .navbar-nav.navbar-center {
    position: relative;
    left: 0%;
    transform: translatex(0%);
}

}
</style>
