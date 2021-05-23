const initState = {
    properties:  [ ],
    error: null,
    isLoaded: false,
    property : {}
    
};

export default function(state = initState, action){
    
    switch (action.type) {
        case 'GET_properties' :
            return{
            ...state,
            properties: action.payload
        }

        case 'GET_property':
          return {
            ...state,
            property : action.payload
          }
        case 'ADD_property' :
            return {
                ...state,
                properties: [action.payload, ...state.properties]
            } 

        case 'DELETE_property' :
            return{
                ...state,
                properties: state.properties.filter(property => property.id !==action.payload)
            }
        case 'UPDATE_property':
          return {
            ...state,
            properties : state.properties.map(property => property.id === action.payload.id ? (property = action.payload) : property )
          }

        default : {
            return state
        }
    }
}