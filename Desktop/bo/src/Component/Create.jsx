import TextField from '@mui/material/TextField';
import {useState}from "react"
import axios from "axios"

export const Create = ()=>{

    const [form , setFrom] = useState({

        Name : "",
        City : "",
        Address : "",
        Capacity : "",
        Cost_per_day  : "",
        Verified : "",
        Rating : "",
        Pet_types : "",
        Sleep : "",
        Walks : "",
        Type_of_home : "",
        Area_size : "",
        Emergency_transport : ""
    })

    const handleChange=(e)=>{


        let {id , value} = e.target;

        setFrom({
            ...form,
            [id] : value
        })

    }

    const handleSubmit = ()=>{

    

        axios.post("http://localhost:5000/Houses" , form).then(({datta})=>{

            console.log(data);

        

        }).catch((e)=>{
            console.log(e);
        })
        
    }




    return <>

    <form action="" onSubmit={()=> handleSubmit() } >

        <h1> Dog House Form </h1>

        <div className='container' >

            <TextField id="Name" className='Name' onChange={(e)=> handleChange(e)}  label="Name" sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="City" label="City" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Address" label="Address" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Capacity" label=" Capacity " onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Cost_per_day" label="Cost per day " onChange={(e)=> handleChange(e)}  sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Verified" label="Verified" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Rating" label="Rating" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Pet_types" label="Accepted Pet Types" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Size" label="Accepted Pet size" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Sleep" label="Place to sleep" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <TextField id="Walks"  label="No.Of walks" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>

            <TextField id="Type_of_home" label="Type of home i Stay in" onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} variant="outlined" required/>
            <p>  My outdoor area size. </p>  

            <select name="" id="Area_size" style={{margin : "10px"}} onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} >
                <option value=""></option>
                <option value="Small"> Small </option>
                <option value="Medium">Medium </option>
                <option value="Large"> Large </option>

            </select>
            


            <p>  Emergency transport</p>  

            <select  id="Emergency_transport" style={{margin : "10px"}} onChange={(e)=> handleChange(e)} sx={{ margin : "10px"  }} >
                <option value=""></option>
                <option value="Yes"> Avaliable </option>
                <option value="No">Not Avalible </option>

            </select>

            


        </div>

        <input type="submit"   className='submit'  />


    </form>

        
    </>
}