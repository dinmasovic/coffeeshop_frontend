import { useEffect, useState } from "react";
import axios from "../axios.js";

export default function useWorkers() {
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/worker")
            .then(res => {setWorkers(res.data)})
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { workers, loading, error };
}
