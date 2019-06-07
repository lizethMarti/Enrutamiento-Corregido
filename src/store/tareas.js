import firebase from '../firebase'
const db = firebase.firestore()

const store = {
    state : {
        tareas:[]
    },
    getters : {
        tareasHoy(state){
            return state.tareas
        },
        tareasPorLista(state){
            return listaID => state.tareas.filter(tarea => tarea.listaID == listaID)
        },
        tareaPorID(state){
            return id => state.tareas.find(tarea => tarea.id === id)
        }
    },
    mutation :{
        agregarTarea(state,tarea){
            state.tareas.push(tarea)
        },
        actualizarTarea(state,tareaActualizar){
            var indice = state.tareas.findIndex(tarea => tarea.id == tareaActualizar.id)
            state.tareas.splice(indice,1,tareaActualizar)
        }
    },
    action : {
        cargarTareas({commit,rootGetters}){
            return new Promise((resolve,reject)=>{

            })
        },
        agregarTarea:function(tarea){
            tarea.archivos=[]
            var user = firebase.auth().currentUser
            //User identifier
            tarea.userID = user.uid
            return db.collection("tareas").add(tarea)
            },
            eliminarTarea({},tareaID){
                return new Promise((resolve,reject)=>{
    
                })
            },
            actualizarTarea({},tarea){
                return new Promise((resolve,reject)=>{
                    
                })
            },
            eliminarTareasPorLista({},listaID){
                return new Promise((resolve,reject)=>{
    
                })
            },
            subirArchivo({},archivo){
                //
                return new Promise((resolve,reject)=>{
    
                })
            },
            eliminarArchivo({getters},payload){
                var indice = payload.indice
                var tareaID = payload.tareaID
                var tarea = getters.tareaPorID(tareaID)
                var archivo = tarea.archivos[indice]
                return new Promise((resolve,reject)=>{
    
                })
            }
    } 
}

export default store