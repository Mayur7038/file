import {applyMiddleware,combineReducers,createStore,compose} from "redux"

import {DataReducer} from "./Data/reducer"

const rootReducer = combineReducers({
    houses : DataReducer
})


const dataMiddleware = (store)=> (next)=> (action)=>{


    if(typeof action === 'function'){
        return action(store.dispatch)
    }

    next(action);
}


export const store = createStore(
    rootReducer,
    compose(

        applyMiddleware(dataMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
)