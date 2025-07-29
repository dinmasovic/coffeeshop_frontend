
function Navigation() {
    return (<nav className="flex justify-evenly items-center">
        <img src="coffee_logo.jpg" className="h-12"/>
        <ul className="flex gap-5">
            <li><a href="/">Home</a></li>
            <li><a href="/makeorders">Create Order</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="#">Employees</a></li>
            <li><a href="#">Register</a></li>
        </ul>
    </nav>)
}

export default Navigation