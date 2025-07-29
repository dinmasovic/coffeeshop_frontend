import useDrinks from "../../hooks/useDrinks.js";
import {useState} from "react";

function MakeOrdersPage(){

    let [drinkName,setDrinkName] = useState();
    let [drinkPrice, setDrinkPrice]=useState();
    let [typeDrink,setTypeDrink]=useState("NON_ALCOHOLIC");

    const { drinks, loading, addDrink } = useDrinks();

    const handleAppendSelect = () => {
        const order_panel = document.getElementById("order_panel");

        const container = document.createElement("div");
        container.className = "flex items-center gap-2 mt-2 w-full";

        const select_menu = document.createElement("select");
        select_menu.className = "drink-select border border-white rounded-lg text-white font-serif w-full";

        drinks.forEach((drink) => {
            const option = document.createElement("option");
            option.text = drink.name;
            option.value = drink.id;
            option.className = "text-black";
            select_menu.append(option);
        });

        const delete_button = document.createElement("button");
        delete_button.textContent = "🗑️";
        delete_button.className = "text-white hover:text-red-400 font-bold";
        delete_button.onclick = () => {
            order_panel.removeChild(container);
        };

        container.appendChild(select_menu);
        container.appendChild(delete_button);

        // 👉 Insert before the Submit button
        const submitButton = document.getElementById("submit_order");
        order_panel.insertBefore(container, submitButton);
    };

    return (<div className="bg-cover bg-center h-screen w-full" style={{backgroundImage: 'url("home_page.jpg")',backgroundRepeat:'no-repeat'}}>
        <div className="flex justify-evenly items-center h-3/4 w-full pt-6">

            <div className="w-2/5 p-2 h-3/4 flex flex-col items-start gap-2 overflow-y-auto" id="order_panel">
                <h1 className="text-[oklch(83.7%_0.128_66.29)] font-bold text-2xl">Enter the drinks you want your coffee
                    shop to have</h1>
                <label htmlFor="table_number" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Table
                    number</label>
                <input type="number" name="table_number"
                       className="border border-white rounded-lg text-white font-serif p-1 w-full"/>

                <button className="rounded-2 text-white mt-2 hover:font-bold" onClick={handleAppendSelect}>
                    ➕ Add Drink
                </button>
                <button id="submit_order"
                        className="rounded-2 text-white mt-2 hover:font-bold bg-[oklch(83.7%_0.128_66.29)] p-1 mt-2 rounded-sm">Submit
                </button>

            </div>

            <div className="w-2/5 p-2 h-full flex flex-col justify-center">
                <h1 className="text-[oklch(83.7%_0.128_66.29)] font-bold text-4xl mb-2">
                    This is where you can input the drinks that your coffee shop sells
                </h1>
                <p className="text-white font-serif text-lg">
                    Use this section to add drinks to your menu. Enter the name, price, and type of each drink.
                    These drinks will be available to choose from when taking customer orders.
                </p>
                <h1 className="text-[oklch(83.7%_0.128_66.29)] font-bold text-2xl">Enter the drinks you want your coffee
                    shop to have</h1>
                <label htmlFor="d_name" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Name</label>
                <input name="d_name" type="text"
                       className="border border-white rounded-lg text-white font-serif p-1" onChange={(input)=>{setDrinkName(input.target.value)}}/>

                <label htmlFor="price" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Price</label>
                <input name="price" type="number"
                       className="border border-white rounded-lg text-white font-serif p-1" onChange={(input)=>{setDrinkPrice(input.target.value)}}/>
                <label htmlFor="type_drink" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Type of
                    drink</label>
                <select name="type_drink" className="border border-white rounded-lg text-white font-serif" onChange={(input)=>{setTypeDrink(input.target.value)}}>
                    <option className="text-black" value="NON_ALCOHOLIC">Non alcoholic</option>
                    <option className="text-black" value="ALCOHOLIC">Alcoholic</option>
                    <option className="text-black" value="COFFEE">Coffee</option>
                </select>
                <button className="bg-[oklch(83.7%_0.128_66.29)] text-white mt-2 hover:font-bold" onClick={() => {addDrink(drinkName,drinkPrice,typeDrink);alert("Transaction was successful!");}}>Submit</button>
            </div>
        </div>
    </div>)
}

export default MakeOrdersPage


/*
<div className="border-2 border-white rounded-lg w-2/5 p-2 h-3/4 flex flex-col">
                <h1 className="text-[oklch(83.7%_0.128_66.29)] font-bold text-2xl">Enter the drinks you want your coffee shop to have</h1>
                <label htmlFor="d_name" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Name</label>
                <input name="d_name" type="text"
                       className="border border-white rounded-lg text-white font-serif p-1"/>

                <label htmlFor="price" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Price</label>
                <input name="price" type="number"
                       className="border border-white rounded-lg text-white font-serif p-1"/>
                <label htmlFor="type_drink" className="text-[oklch(83.7%_0.128_66.29)] font-serif font-bold">Type of)
                    drink</label>
                <select name="type_drink" className="border border-white rounded-lg text-white font-serif">
                    <option className="text-black">Non alcoholic</option>
                    <option className="text-black">Alcoholic</option>
                    <option className="text-black">Coffee</option>
                </select>
                <button className="bg-[oklch(83.7%_0.128_66.29)] text-white mt-2 hover:font-bold">Submit</button>
            </div>
 */