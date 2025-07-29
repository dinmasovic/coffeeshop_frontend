import api from "../axios.js"
import {useEffect, useState} from "react";

function useOrders(){
    const [orders, setOrders] = useState([])

    useEffect(() => {
        api.get("/order")
            .then(result => setOrders(result.data))
            .catch(error => console.log(error))
    }, []);
    return orders
}

export default useOrders