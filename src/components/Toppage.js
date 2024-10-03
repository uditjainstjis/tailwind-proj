import { Header } from "./Header"

export function TopPage({navbar}){

    return(
        <div className="bg-gradient-to-b from-slate-200 to-white h-[70vh] flex flex-col ">
            <Header navbar={navbar}/>
            <div id="TopText">

                <h1 className="text-[10vw] font-bold  pt-52 animate-buldge ">DISCOVER</h1>
                {/* <h1 className="text-[6vw]  font-semibold animate-rise">THE WORLD</h1> */}

            </div>
        </div>
    )

}
