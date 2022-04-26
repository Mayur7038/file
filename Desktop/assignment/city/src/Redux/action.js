import axios from "axios";
// action type 

export const GET_DATA = "GET_TODO";

export const getData = (data)=>({ type : GET_DATA , payload : data })



export const getCensusData = ()=>async(dispatch)=> {

    const {data} = await axios.get("http://localhost:8080/data");
    dispatch(getData(data));

}

export const deleteData = (id)=> async(dispatch)=>{

    axios.delete(`http://localhost:8080/data/${id}`);

    dispatch(getCensusData());
}





