import {useNavigate} from "react-router-dom";
import api from "../../axios.js";

function Navigation() {
    const navigate = useNavigate()
    return (<nav className="flex justify-evenly items-center">
        <img src="coffee_logo.jpg" className="h-12"/>
        <ul className="flex gap-5">
            <li><a href="/">Home</a></li>
            <li><a href="/makeorders">Create Order</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/employees">Employees</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="#" onClick={()=>api.post("/logout")
                .then(navigate("/"))}>Logout</a></li>
        </ul>
    </nav>)
}

export default Navigation