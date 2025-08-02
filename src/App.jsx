import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from "./components/segments/Navigation.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import OrderPage from "./components/pages/OrderPage.jsx";
import MakeOrdersPage from "./components/pages/MakeOrdersPage.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import RegisterPage from "./components/pages/RegisterPage.jsx";
import EmployeesPage from "./components/pages/EmployeesPage.jsx"

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/orders" element={<ProtectedRoute><OrderPage/></ProtectedRoute>} />
                <Route path="/makeorders" element={<ProtectedRoute><MakeOrdersPage/></ProtectedRoute>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/employees" element={<ProtectedRoute><EmployeesPage/></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
