
import { useState } from "react";
import useOrders from "../../hooks/useOrders.js";

function OrderPage() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(prev => prev === index ? null : index);
    };
    const orders = useOrders()

    return (
        <div className="h-screen w-full flex justify-center items-center bg-cover bg-center"
             style={{ backgroundImage: 'url("home_page.jpg")', backgroundRepeat: 'no-repeat' }}>
            <div className="p-6 w-3/4 overflow-y-auto text-white">
                <div className="flex justify-between items-center font-bold border-b border-white pb-2 mb-2">
                    <div>Table Number</div>
                    <div>Bill Amount</div>
                    <div>Actions</div>
                </div>
                {orders.map((order, index) => (
                    <div key={order.tableNumber} className="border-b py-2">
                        <div className="flex justify-between items-center">
                            <div>Table {order.tableNumber}</div>
                            <div>€{order.billAmount.toFixed(2)}</div>
                            <button onClick={() => toggleExpanded(index)} className="text-[oklch(83.7%_0.128_66.29)]">
                                {expandedIndex === index ? '▲' : '▼'}
                            </button>
                        </div>
                        {expandedIndex === index && (
                            <ul className="ml-4 mt-2 text-sm">
                                {order.drinks.map((drink, i) => (
                                    <li key={i}>• {drink.name} (€{drink.price.toFixed(2)})</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderPage


/*
<div className="border-2 border-white rounded-lg w-2/5 p-2 h-3/4 flex flex-col">
                <h1 className="text-[oklch(83.7%_0.128_66.29)] font-bold text-2xl">Enter the drinks you want your coffee shop to have</h1>
                <label htmlFor="d_name" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Name</label>
                <input name="d_name" type="text"
                       className="border border-white rounded-lg text-white font-serif p-1"/>

                <label htmlFor="price" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Price</label>
                <input name="price" type="number"
                       className="border border-white rounded-lg text-white font-serif p-1"/>
                <label htmlFor="type_drink" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Type of
                    drink</label>
                <select name="type_drink" className="border border-white rounded-lg text-white font-serif">
                    <option className="text-black">Non alcoholic</option>
                    <option className="text-black">Alcoholic</option>
                    <option className="text-black">Coffee</option>
                </select>
                <button className="bg-[oklch(83.7%_0.128_66.29)] text-white mt-2 hover:font-bold">Submit</button>
            </div>
 */