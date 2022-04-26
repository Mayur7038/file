import {applyMiddleware,  compose,  createStore } from "redux";

import {dataReducer} from "./reducer"


const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(typeof action === "function"){
        return action(store.dispatch)
    }

    next(action);
}

export const store = createStore(
    dataReducer ,
    compose(
        
        applyMiddleware(loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

)