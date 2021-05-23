import { combineReducers } from 'redux'

//Properties
import categoryReducer from './Property/categoryReducer'
import featureReducer from './Property/FeatureReducer'
import typeReducer from './Property/TypeReducer'
import propertyReducer from './Property/PropertyReducer'

//Subscriptions
import planReducer from './Subscription/planReducer'
import subReducer from './Subscription/subReducer'

//Blog
import blogCatReducer from './Blog/categoryReducer'

//CMS
//Contact
import contactReducer from './Cms/contactReducer'

//User
import userReducer from './User/userReducer'


export default combineReducers({

    //Property
    categories : categoryReducer,
    features : featureReducer,
    types : typeReducer,
    properties : propertyReducer,

    //Subscription
    plans : planReducer,
    subs : subReducer,

    //User
    users : userReducer,
    userCount : userReducer,

    //Blog
    categories : blogCatReducer,

    //Cms
    //Contact
    contacts : contactReducer
})