import useWorkers from "../../hooks/useWorkers.js";
import {useState} from "react";
import api from "../../axios.js"

export default function EmployeesPage() {
    const { workers, loading, error } = useWorkers();
    const [workerUsername, setWorkerUsername] = useState()

    function handleAddWorker(){
        api.post("/coffeeshop/addworker", null,{
            params: {
                name: workerUsername,
            }
        }).then((result)=>window.location.reload())
            .catch(error=>alert("Workers don't have the authority to add other workers. If you are an owner then either the user doesn't exist or you have typed the workers username wrong."))
    }

    function handleRemoveWorker(workerUsername){
        api.put("/coffeeshop/removeworker", null,{
            params: {
                name: workerUsername,
            }
        }).then((result)=>window.location.reload())
            .catch(error=>alert("Only coffee shop owners have the authority to remove workers"))
    }


    return (
        <div
            className="bg-cover bg-center h-screen w-full flex justify-center items-center"
            style={{
                backgroundImage: 'url("home_page.jpg")',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="w-full max-w-lg">
                <h2 className="text-2xl text-bold font-semibold mb-4 text-white bold pb-2">Here you can input the workers username so he can be part of your coffee shop</h2>
                <label htmlFor="workerUsername" className="text-white font-serif font-bold">Worker username</label>
                <input type="text" name="workerUsername" id="tNum"
                       onChange={(event)=>setWorkerUsername(event.target.value)}
                       className="border border-white rounded-lg text-white font-serif p-1 w-full"/>

                <button className="bg-[oklch(83.7%_0.128_66.29)] text-white mt-2 hover:font-bold w-full rounded-md" onClick={handleAddWorker}>Submit</button>


                <h2 className="text-2xl text-bold font-semibold mb-4 text-white bold border-b pb-2">Our Workers</h2>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">Failed to load workers.</p>}


                <ul className="space-y-2">
                    {workers.map((worker, index) => (
                        <li key={index} className="border-b py-2">
                            <div className="flex justify-between items-center">
                                <span className="text-white">Name</span>
                                <span className="text-white">{worker.name}</span>
                                <button onClick={()=>{handleRemoveWorker(worker.name)}}>
                                    🗑️
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
