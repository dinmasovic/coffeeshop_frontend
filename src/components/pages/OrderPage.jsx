
import { useState } from "react";
import useOrders from "../../hooks/useOrders.js";
import api from "../../axios.js"
import useDrinks from "../../hooks/useDrinks.js";

function OrderPage() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(prev => prev === index ? null : index);
    };
    const orders = useOrders()
    const { drinks, loading, addDrink } = useDrinks();


    function handleDeleteWorker(orderId){
        api.delete("/order/delete/"+orderId)
            .then(()=>window.location.reload())
            .catch(error=>alert(error))
    }

    return (
        <div className="h-screen w-full flex justify-center items-center bg-cover bg-center"
             style={{ backgroundImage: 'url("home_page.jpg")', backgroundRepeat: 'no-repeat' }}>
            <div className="p-6 w-3/4 overflow-y-auto text-white">
                <div className="flex justify-between items-center font-bold border-b border-white pb-2 mb-2">
                    <div>Table Number</div>
                    <div>Bill Amount</div>
                    <div>Actions</div>
                    <div>Delete</div>
                </div>
                {orders.map((order, index) => (
                    <div key={order.tableNumber} className="border-b py-2">
                        <div className="flex justify-between items-center">
                            <div>Table {order.table_num}</div>
                            <div>€{order.bill.toFixed(2)}</div>
                            <button onClick={() => toggleExpanded(index)} className="text-[oklch(83.7%_0.128_66.29)]">
                                {expandedIndex === index ? '▲' : '▼'}
                            </button>
                            <button
                                onClick={() => handleDeleteWorker(order.orderId)}
                                className="text-red-500 hover:text-red-700"
                            >
                                🗑️
                            </button>
                        </div>
                        {expandedIndex === index && (
                            <ul className="ml-4 mt-2 text-sm">
                                {order.drinks.map((drink, i) => (
                                    <li key={i} className="flex items-center justify-between text-black">
                                        <span>• {drink.name} (€{drink.price.toFixed(2)})
                                        </span>
                                        <button
                                            className="ml-2 text-blue-400 hover:text-blue-600"
                                            onClick={() => {
                                                api.put("/order/remove/"+order.orderId,null,{
                                                    params:{
                                                        drinkId:drink.id
                                                    }
                                                })
                                                    .then(()=>window.location.reload())
                                                    .catch(error=>console.log("Either you dont have the authority to remove the drink from the order or the drink doesn't exist in the order"))
                                            }}
                                        >
                                            remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="flex flex-col items-start">
                        <label className="text-white">Add drink</label>
                        <select
                            className="border border-white rounded-lg text-white font-serif p-1 w-25"
                            id={`drinkToAdd${order.orderId}`}
                        >
                            {drinks.map(drink => (
                                <option key={drink.id} value={drink.id} className="text-black">
                                    {drink.name}
                                </option>
                            ))}
                        </select>
                            <button
                                    onClick={()=>{
                                        api.put("/order/add/"+order.orderId,null,{
                                            params:{
                                                drinkId:document.getElementById("drinkToAdd"+order.orderId).value
                                            }
                                        }).then(()=>window.location.reload())
                                            .catch(()=>alert("The drink wasn't added to the existing order"))
                                    }}
                                    className="rounded-2 text-white mt-2 hover:font-bold bg-[oklch(83.7%_0.128_66.29)] p-1 mt-2 rounded-sm">Submit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderPage


