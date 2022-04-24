import { useState , useEffect } from "react";
import { useParams  } from "react-router-dom"
import axios from "axios"
import Button from '@mui/material/Button';




export const Edit = ()=>{

    const {id} = useParams();
    const [Data,setData] = useState({
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
    });

    //https://my-cool-pr.herokuapp.com/houses
    
    useEffect(()=>{
        axios.get(`https://my-cool-pr.herokuapp.com/houses/${id}`).then(({data})=>{
            setData(data);
        })
    },[])

    const handleChange=(e)=>{


        let {id , value} = e.target;

        setData({
            ...Data,
            [id] : value
        })

    }


    const handleSubmit = ()=>{

        axios.patch(`https://my-cool-pr.herokuapp.com/houses/${id}` ,Data).then(()=>{
            alert("SucessFully Submitted")
        }).catch((e)=>{
            console.log(e)
        })

    }


    



    

    
  
    return <div>  
     <div className="editor">
    
    <label htmlFor="Name"> Name </label>
    <input id="Name" className="inpt"  onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.Name} placeholder="Name"  />

    <label htmlFor="City"> City </label>
    <input id="City" className="inpt" onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.City} placeholder="City" />

    <label htmlFor="Address"> Address </label>
    <input id="Address" className="inpt" onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.Address} placeholder="Address" />

    <label htmlFor="Capacity"> Capacity </label>
    <input id="Capacity" className="inpt" onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.Capacity} placeholder="Capacity" />

    <label htmlFor="Verified"> Verified </label>
    <input id="Verified" className="inpt" onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.Verified} placeholder="Verified" />

    <label htmlFor="Rating"> Rating </label>
    <input id="Rating" className="inpt" onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.Rating} placeholder="Rating" />

    <label htmlFor="Pet_types"> Pet_types </label>
    <input id="Pet_types" className="inpt" onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.Pet_types} placeholder="Pet_types" />

    <label htmlFor="Sleep"> Sleep Time </label>
    <input id="Sleep" className="inpt" type="text" onChange={(e)=> handleChange(e)} defaultValue={Data.Sleep} placeholder="Sleep" />

    <label htmlFor="Walks"> Walks </label>
    <input id="Walks" className="inpt" type="text" onChange={(e)=> handleChange(e)} defaultValue={Data.Walks} placeholder="Walks" />

    <label htmlFor="Type_of_home"> Type_of_home </label>
    <input id="Type_of_home" className="inpt" type="text" onChange={(e)=> handleChange(e)} defaultValue={Data.Type_of_home} placeholder="Type_of_home" />

    <label htmlFor="Area_size">Area_size </label>
    <input id="Area_size" className="inpt" type="text" onChange={(e)=> handleChange(e)} defaultValue={Data.Area_size} placeholder="Area_size" />

    <label htmlFor="Emergency_transport"> Emergency_transport </label>
    <input id="Emergency_transport" className="inpt" onChange={(e)=> handleChange(e)} type="text" defaultValue={Data.Emergency_transport} placeholder="Emergency_transport" />

    <label htmlFor="Size">Size </label>
    <input id="Size" className="inpt" type="text" onChange={(e)=> handleChange(e)} defaultValue={Data.Size} placeholder="Size" />


       
      </div>

      <Button onClick={()=> handleSubmit() } variant="contained" color="success" sx={{marginTop : "20px"}} > Update Form  </Button>
    </div>

}