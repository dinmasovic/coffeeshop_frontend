import api from "../axios.js";
import { useEffect, useState } from "react";

function useDrinks() {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDrinks = () => {
        setLoading(true);
        api.get("/drinks")
            .then((response) => {
                setDrinks(response.data);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchDrinks();
    }, []);

    const addDrink = async (name, price, type) => {
        try {
            await api.post("/drinks/addDrink", {type, name, price});
            fetchDrinks();
        } catch (error) {
            console.error("Failed to add drink:", error);
        }
    };

    return { drinks, loading, addDrink };
}

export default useDrinks;
