import {Routes, Route} from "react-router-dom"
import { Create } from "./Create"
import { Details } from "./Detail"
import { Edit } from "./Edit"
import { Home } from "./Home"


export const Router = ()=>{



    return <>


    <Routes >
        <Route path="/" element={<Home/>}  >   </Route>
        <Route path="/listing/create" element={ <Create/>} >   </Route>
        <Route path="/listing/create/:id" element={ <Details/>} >   </Route>
        <Route path="/listing/edit/:id" element={<Edit/>} ></Route>

    </Routes>


        
    
    </>
}