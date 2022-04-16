import {Route,Routes} from "react-router-dom"
import { Form } from "./Form"
import { Home } from "./Home"


export const Router = ()=>{

    return <>

        <Routes>
            <Route path="/" element={ <Home/> } ></Route>
            <Route path="/add-country" element={  <Form/> }  ></Route>
            {/* <Route path="/add-city"   element={  <Form/> } ></Route> */}
            
        </Routes>
    
    </>




}