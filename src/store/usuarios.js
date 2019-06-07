import firebase from '../firebase'

const store = {
    state : {
        usuario: null
    },
    getters : {
        getUsuario(state){
            return state.usuario
        }
    },
    mutation :{
        login(state,usuario){
            state.usuario = usuario
        }
    },
    action : {
        loginCorreo({commit}, credenciales){
            return firebase
            .auth()
            .signInWithEmailAndPassword(credenciales.email, credenciales.password)
        },
        desconectarse({commit}){
            return new Promise((resolve,reject)=>{
                resolve()
            })
        },
        crearusuario({commit},nuevousuario){
            return new Promise((resolve,reject)=>{
                firebase.auth()
                .createUserWithEmailAndPassword(nuevousuario.email,nuevousuario.password)
                .then(()=>{
                    resolve
                }).catch((error)=>{
                    reject(error)
                })
            })
        }
    } 
}

export default store