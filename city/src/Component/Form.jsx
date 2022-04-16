import { useState } from "react"
import axios from "axios"


export const Form = ()=>{


    const [Data , setData] = useState({

        Country : "",
        City : "",
        Population : ""

    })


    const handleChange = ((e)=>{

        const {className,value} = e.target;

        setData({
            ...Data,
            [className] : value
        })

    })

    const handleSubmit =(e)=>{
        // e.preventDefault();
       
        axios.post(`http://localhost:8080/data`,Data)

        
    }



    return <>

        <form onSubmit={(e)=> handleSubmit(e)} >

           <br />

            <input className="Country" type="text" onChange={(e)=> handleChange(e)} placeholder="Enter Country Name" />
            <br />
            <br />


            <input className="City" type="text" onChange={(e)=> handleChange(e)} placeholder="Enter City Name" />
            <br />
            <br />

            <input className="Population" type="text" onChange={(e)=> handleChange(e)} placeholder="Enter the Population" />
            <br />
            <br />


            <input id="form" type="submit" />
        </form>


        
    </>
}
