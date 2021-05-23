const initState = {
    types:  [ ],
    error: null,
    isLoaded: false,
    type : {}
    
};

export default function(state = initState, action){
    
    switch (action.type) {
        case 'GET_types' :
            return{
            ...state,
            types: action.payload
        }
        case 'GET_type':
          return {
            ...state,
            type : action.payload
          }
        case 'ADD_type' :
            return {
                ...state,
                types: [action.payload, ...state.types]
            } 

        case 'DELETE_type' :
            return{
                ...state,
                types: state.types.filter(type => type.id !==action.payload)
            }
        case 'UPDATE_type':
          return {
            ...state,
            types : state.types.map(type => type.id === action.payload.id ? (type = action.payload) : type )
          }
        default : {
            return state
        }
    }
}