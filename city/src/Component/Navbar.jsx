
import {Link} from "react-router-dom";



export const Navbar = ()=>{
    return <div className="navbar"> 

    <Link className="links" to={"/"} > Home </Link>
    <Link className="links" to={"/add-country"} > Create List </Link>
    
    
    </div>
}