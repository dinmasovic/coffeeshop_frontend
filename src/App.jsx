import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navigation from "./components/segments/Navigation.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import OrderPage from "./components/pages/OrderPage.jsx";
import MakeOrdersPage from "./components/pages/MakeOrdersPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/orders" element={<OrderPage/>} />
                <Route path="/makeorders" element={<MakeOrdersPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
