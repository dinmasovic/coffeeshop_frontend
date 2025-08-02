// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authRepository from "../repository/authRepository";

const ProtectedRoute = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const result = await authRepository();
            setIsAuth(result === "Authentication Success");
            setLoading(false);
        };

        checkAuth();
    }, []);

    if (loading) return <div className="bg-cover bg-center h-screen w-full flex justify-center items-center"
                             style={{backgroundImage: 'url("home_page.jpg")', backgroundRepeat: 'no-repeat'}}></div>;

    return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
