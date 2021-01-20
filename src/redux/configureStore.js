import { combineReducers, createStore,applyMiddleware } from "redux";

import {Dishes} from './dishes'
import {Comments} from './comments'
import {Promotions} from './promotions'
import {Leaders} from './leaders'
import logger from "redux-logger";
import thunk from "redux-thunk";
import {InitialFeedback} from './form'
import { createForms } from "react-redux-form";
export const ConfigureStore=()=>{
    
    const store=createStore(combineReducers({
        dishes:Dishes,
        leaders:Leaders,
        comments:Comments,
        promotions:Promotions,
        ...createForms({
            feedback:InitialFeedback
        })
        
    }),applyMiddleware(thunk,logger))
    return store;
}
