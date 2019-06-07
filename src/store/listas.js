const store = {
    state : {
        listas:[{
            id:'poodle',
            nombre: 3125668479
        },
        {
            id:'bulldog',
            nombre: 3605847852
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