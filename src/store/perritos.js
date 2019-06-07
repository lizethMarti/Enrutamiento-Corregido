const store = {
    state : {
        perritos:[{
            raza:'poodle',
            contacto: '3125668749'
        },
        {
            id:2,
            nombre: 'bulldog'
        }]
    },
    getters : {
        listas(state){
            return state.listas
        },
        listaPorID(state){
            return id => state.listas.find(lista => lista.id == id)
        }
    },
    mutation :{
        agregarLista(state,lista){
            state.listas.push(lista)
        },
        actualizarLista(state,listaActualizar){
            var indice = state.listas.findIndex(lista => lista.id == listaActualizar.id)
            state.listas.splice(indice,1,listaActualizar)
        }
    },
    action : {
        cargarListas({commit,rootGetters}){
            return new Promise((resolve,reject)=>{

            })
        },
        agregarListas({},tarea){
            return new Promise((resolve,reject)=>{

            })
        },
        eliminarListas({},tarea){
            return new Promise((resolve,reject)=>{

            })
        },
        actualizarListas({},tarea){
            return new Promise((resolve,reject)=>{

            })
        }
    } 
}

export default store