import {useState,useEffect} from 'react'
import videoSource from '../twogoodcovideo.mp4'
export function Gallery(){

    const [hovered,setHovered] = useState(false)

    function mouseCame(){
        setHovered(true)
    }
    function mouseLeft(){
        // setHovered(false)
    }

    return(
        <div className={`h-[90vh] lg:h-[95vh] md:h-[65vh] sm:h-[55vh] mx-6 ${hovered ? "cursor-custom ": ""}`} onMouseEnter={mouseCame} onMouseLeave={mouseLeft}>
            <video className="w-full h-full object-cover" autoPlay muted loop>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )

}