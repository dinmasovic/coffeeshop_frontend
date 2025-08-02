import {useState} from "react";
import loginRepository from "../../repository/loginRepository.js";
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        loginRepository({ username, password })
            .then(() => {
                navigate("/makeorders");
            })
            .catch(() => {
                alert("Login failed! Check your credentials.");
            });
    };

    return (<div className="bg-cover bg-center h-screen w-full flex justify-center items-center"
                 style={{backgroundImage: 'url("home_page.jpg")', backgroundRepeat: 'no-repeat'}}>
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div
                    className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
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
                            <button className="bg-[oklch(83.7%_0.128_66.29)] text-white mt-2 hover:font-bold w-full rounded-md" onClick={handleLogin}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default LoginPage