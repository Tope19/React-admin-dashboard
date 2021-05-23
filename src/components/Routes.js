import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';


import { Provider } from 'react-redux';

import store from './store'

import Spinner from './layout/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const ManageAccount = lazy(() => import('./views/Admin/Account/Account'));
const Setting = lazy(() => import('./views/Admin/Setting/Settings'));

const PropertyRequest = lazy(() => import('./views/Property/Request'));

const Property = lazy(() => import('./views/Property/Property'));
const AddNewProperty = lazy(() => import('./Forms/Property-Form/Property/AddNewProperty'));

const PropCat = lazy(() => import('./views/Property/Category'));
const AddPropCat = lazy(() => import('./Forms/Property-Form/Category/AddNewCategory'));
const EditPropCat = lazy(() => import('./Forms/Property-Form/Category/Edit'));

const PropType = lazy(() => import('./views/Property/Type'));
const AddPropType = lazy(() => import('./Forms/Property-Form/Type/AddNewType'));
const EditPropTyp = lazy(() => import('./Forms/Property-Form/Type/Edit'));

const PropFea = lazy(() => import('./views/Property/Feature'));
const AddPropFea = lazy(() => import('./Forms/Property-Form/Feature/AddNewFeature'));
const EditPropFea = lazy(() => import('./Forms/Property-Form/Feature/Edit'));

const Plan = lazy(() => import('./views/Subscription/Plans'));
const AddPlan = lazy(() => import('./Forms/Plan-Form/AddPlan'));

const Subscription = lazy(() => import('./views/Subscription/Subscription'));

const ManUser = lazy(() => import('./views/Admin/Users/Users'));

//Blog Category
const blogCategory = lazy(() => import('./views/Blog/blogCategory'));
const addBlogCat = lazy(() => import('./Forms/Blog/Category/addBlogCat'));
const EditBlogCat = lazy(() => import('./Forms/Blog/Category/Edit'));

//Blog Article
const blogArticle = lazy(() => import('./views/Blog/blogArticle'));
const addArticle = lazy(() => import('./Forms/Blog/Article/addArticle'));

//Cms Contact
const Contact = lazy(() => import('./views/Cms/Contact'));
const updateContact = lazy(() => import('./Forms/Cms/Contact/Update'));

const login = lazy(() => import('./Auth/LoginForm'));


class Routes extends Component {
  render () {
    
    return (
      
        <Provider store={store}>
        
         
      <Suspense fallback={<Spinner/>}>
      
        <Switch>
          <PublicRoute exact path="/login" component={ login } />
          <PrivateRoute exact path="/dashboard" component={ Dashboard } />

          <PrivateRoute path="/add-new-property" component={ AddNewProperty } />
          <PrivateRoute path="/properties" component={ Property } />

          <PrivateRoute path="/property-requests" component={ PropertyRequest } />

          <PrivateRoute path="/property-categories" component={ PropCat } />
          <PrivateRoute path="/add-property-category" component={ AddPropCat } />
          <PrivateRoute path="/property-category/edit/:id" component={ EditPropCat } />

          <PrivateRoute path="/property-features" component={ PropFea } />
          <PrivateRoute path="/add-property-feature" component={ AddPropFea } />
          <PrivateRoute path="/property-feature/edit/:id" component={ EditPropFea } />

          <PrivateRoute path="/property-types" component={ PropType } />
          <PrivateRoute path="/add-property-type" component={ AddPropType } />
          <PrivateRoute path="/property-type/edit/:id" component={ EditPropTyp } />


          <PrivateRoute path="/plans" component={ Plan } />
          <PrivateRoute path="/add-new-plan" component={ AddPlan } />

          <PrivateRoute path="/subs" component={ Subscription } />

          <PrivateRoute path="/manage-users" component={ ManUser } />
          <PrivateRoute path="/my-account" component={ ManageAccount } />
          <PrivateRoute path="/settings" component={ Setting } />
              {/* Blog Category */}
         <PrivateRoute path="/blog-categories" component={ blogCategory } />
         <PrivateRoute path="/add-new-blog-category" component={ addBlogCat } />
         <PrivateRoute path="/blog-category/edit/:id" component={ EditBlogCat } />

              {/* Blog Article */}
         <PrivateRoute path="/blog-articles" component={ blogArticle } />
         <PrivateRoute path="/add-new-article" component={ addArticle } />
         
          {/* Contact */}
          <PrivateRoute path="/cms-contact" component={ Contact } />
         <PrivateRoute path="/cms-contact/edit/:id" component={ updateContact } />

         <Route path="/login" component={ login } />

        <Redirect to="/dashboard" />
        </Switch>
      </Suspense>

        </Provider>
    );
  }
}

export default Routes;