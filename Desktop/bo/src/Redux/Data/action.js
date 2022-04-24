import axios from "axios";

export const GET_DATA = 'GET_DATA';
export const GET_DATA_LOADING = 'GET_DATA_LOADING';

export const getData = (data)=>({type : GET_DATA , payload : data} );
export const getDataLoading = ()=> ({type : GET_DATA_LOADING} ) ;


export const getDataHouse = (request)=>  async (dispatch)=>{
    
    dispatch(getDataLoading());
    const {data} = await axios.get(`https://my-cool-pr.herokuapp.com/houses?${request}`);

    dispatch(getData(data))
}

// https://my-cool-pr.herokuapp.com/houses