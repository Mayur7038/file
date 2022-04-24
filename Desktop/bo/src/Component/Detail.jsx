import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"




export const Details = ()=>{

    const {id} = useParams();

    const [Data,setData] = useState([]);


    useEffect(()=>{
        axios.get(`http://localhost:5000/Houses/${id}`).then(({data})=>{
            setData(data);
        })
    },[])
    
    return <>

    

        <h1 className="title"> {Data.Name }</h1>
        <h3> Accepted Pet Type : {Data.Pet_types} </h3>
        <h3> Accepted Pet Size : {Data.Size} </h3>
        <h3> The number of walks provided per day. : {Data.Walks}  </h3>
        <h3> The type of home I stay in : {Data.Type_of_home}  </h3>
        <h3> My outdoor area size. : {Data.Area_size} </h3>
        <h3> Emergency Transport {Data.Emergency_transport} </h3>

    </>
}