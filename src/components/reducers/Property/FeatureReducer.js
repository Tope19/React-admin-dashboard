const initState = {
    features:  [ ],
    error: null,
    isLoaded: false,
    feature : {}
    
};

export default function(state = initState, action){
    
    switch (action.type) {
        case 'GET_features' :
            return{
            ...state,
            features: action.payload
        }

        case 'GET_feature':
          return {
            ...state,
            feature : action.payload
          }
        case 'ADD_feature' :
            return {
                ...state,
                features: [action.payload, ...state.features]
            } 

        case 'DELETE_feature' :
            return{
                ...state,
                features: state.features.filter(feature => feature.id !==action.payload)
            }
        case 'UPDATE_feature':
          return {
            ...state,
            features : state.features.map(feature => feature.id === action.payload.id ? (feature = action.payload) : feature )
          }
        default : {
            return state
        }
    }
}