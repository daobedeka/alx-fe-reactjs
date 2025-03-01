import { Link } from "react-router-dom"
function Navbar(){
    return(
        <nav style={{width:"100vw", height:"200px", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"##A9A9A9", color:"#f9f9f9"}}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="Services">Services</Link>
            <Link to="Contact">Contact</Link>


        </nav>
    )
}
export default Navbar