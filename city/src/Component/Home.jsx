import { useEffect, useState } from "react"
import axios from "axios"
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField"


export const Home = ()=>{

    let [Data ,setDate] = useState([]);

    useEffect(()=>{
       getData();
    },[]);


    const getData = ()=>{

        axios.get("http://localhost:8080/data").then(({data})=>{
            setDate(data);
        })

    }

    const handleDelete=(id)=>{

        axios.delete(`http://localhost:8080/data/${id}`).then(()=>{
            getData();
        })


    }

    const sortByPop=(c,d)=>{
       
        const arr = [...Data];

        arr.sort((a,b)=>{
            if(+a.Population > +b.Population) return c;
            if(+a.Population < +b.Population) return d;
            return 0;
        })
        setDate(arr);
    }

    const [ Country , setCountry] = useState("");

    const baseCountry=()=>{



        axios.get("http://localhost:8080/data").then(({data})=>{

            const b = data.filter((el)=>{
                return (el.Country === Country)
            })

            setDate(b);


        })

       

    }

    return <>

        <h1>Home</h1>

        <div>
            <Button  variant="contained" onClick={()=> sortByPop(1,-1) }  > Acs Population </Button>

            <br />
            <br />

            <Button  variant="contained"  onClick={()=> sortByPop(-1,1)  } > Dsc Population </Button>

            <br />
            <br />

            <TextField id="filled-basic" onChange={(e)=> setCountry(e.target.value) } placeholder="enter the country name"  variant="filled" />
            <br />
            <Button  variant="contained"  onClick={()=> baseCountry() }  > Submit </Button>


            <br />
            <br />

        </div>
       <table>
           <thead>
               <tr>
                   <td>id</td>
                   <td> Country </td>
                   <td> City </td>
                   <td> Population </td>
                   {/* <td> Edit </td> */}
                   <td>  Delete </td>
               </tr>
           </thead>
           <tbody>
               {
                   Data.map((elem)=>{
                       return <tr key={elem.id}>

                           <td>  {elem.id} </td>

                           <td> {elem.Country} </td>

                           <td> {elem.City} </td>
                           <td> {elem.Population} </td>
                           {/* <td> <button> Edit  </button> </td> */}
                           <td onClick={()=>  handleDelete(elem.id) } > <button className="cityFilter1" > Delete </button> </td>
                       </tr>
                   })
               }
           </tbody>
       </table>




    </>
}