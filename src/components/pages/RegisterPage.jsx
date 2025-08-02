import {useState} from "react";
import loginRepository from "../../repository/loginRepository.js";
import { useNavigate } from "react-router-dom";
import api from "../../axios.js"

function LoginPage(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleRegister = (event) => {
        let role = document.getElementById("role").value
        console.log(role)
        event.preventDefault()
        if(role === "OWNER"){
            api.post("/coffeeshop/register",{ name: username, password })
                .then(result => navigate("/makeorders"))
                .catch(error=>console.log(error))
        }else{
            api.post("/worker/register",{name:username,password,role})
                .then((result)=> navigate("/makeorders"))
                .catch(error=>alert("An account with that username already exists, please choose something else"))
        }
    };

    return (<div className="bg-cover bg-center h-screen w-full flex justify-center items-center"
                 style={{backgroundImage: 'url("home_page.jpg")', backgroundRepeat: 'no-repeat'}}>
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div
                    className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input name="username" type="text"
                                       className="border border-white rounded-lg text-white font-serif p-1 w-full" onChange={(event)=>setUsername(event.target.value)}/>

                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Password</label>
                                <input name="password" type="password"
                                       className="border border-white rounded-lg text-white font-serif p-1 w-full" onChange={(event)=>setPassword(event.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="role"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Role</label>
                                <select name="role" id="role" className="border border-white rounded-lg text-white font-serif w-full p-1" onChange={(input)=>{setRole(input.target.value)}}>
                                    <option className="text-black" value="WAITER">Waiter</option>
                                    <option className="text-black" value="BARTENDER">Bartender</option>
                                    <option className="text-black" value="MANAGER">Manager</option>
                                    <option className="text-black" value="OWNER">Owner</option>
                                </select>
                            </div>
                            <button className="bg-[oklch(83.7%_0.128_66.29)] text-white mt-2 hover:font-bold w-full rounded-md" onClick={handleRegister}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default LoginPage