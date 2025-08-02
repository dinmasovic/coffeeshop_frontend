
function HomePage(){

    return (<div className="bg-cover bg-center h-screen w-full flex justify-end items-center" style={{backgroundImage: 'url("home_page.jpg")',backgroundRepeat:'no-repeat'}}>
        <div className="w-1/2 h-1/2 bg-red ps-10 space-y-2">
            <h1 className="text-[oklch(83.7%_0.128_66.29)] text-4xl w-3/4 font-serif">Simplify Your Coffee Business Today</h1>
            <p className="text-white font-serif">The goal of this page is to make it easier for coffee shop
                owners<br></br> to manage their coffee shops</p>
            <h2 className="text-white font-serif mt-4 text-xl">What You Can Do With Our App:</h2>
            <ul className="list-disc list-inside text-white space-y-2">
                <li>Manage and track customer orders in real-time</li>
                <li>Oversee employee roles, availability, and performance</li>
                <li>Automatically generate optimal schedules using constraint-based logic</li>

            </ul>
        </div>
    </div>)
}

export default HomePage