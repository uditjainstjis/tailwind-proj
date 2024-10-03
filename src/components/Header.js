import Airbnb from '../Airbnb-Logo.png'
import { useEffect,useState } from 'react';
export function Header(){
    const [isHidden, setIsHidden] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
    
          if (currentScrollPos >  0) {
            // Hide navbar when scrolling down more than 50px
            setIsHidden(true);
          } else if (currentScrollPos < scrollPosition) {
            // Show navbar when scrolling up
            setIsHidden(false);
          }
    


          setScrollPosition(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPosition]);



    return(
        <div className="flex flex-row h-[110px] w-full fixed bg-slate-50 z-30">
            {/* Logo */}
            <div  className="w-36 ml-5 transform -translate-y-2 animate-slideDownAndFadeIn" >
                <img src={Airbnb}></img>
            </div>

            {/* Navbar */}
            <div className={`w-[40vw] mt-20 h-[80px] bg-white rounded-[10vw] mx-auto grid grid-cols-4 items-center border border-gray-700  ${isHidden ? 'translate-y-full animate-navbar' : 'animate-navbar2 translate-y-0 '}`}>

                <div className='col-span-1 flex items-center justify-center h-full border border-r-gray-200 rounded-l-full hover:bg-slate-400 transition-colors duration-300'>Home</div>
                <div className='col-span-1 flex items-center justify-center h-full border border-r-gray-200 hover:bg-slate-400 transition-colors duration-300 '>About</div>
                <div className='col-span-1 flex items-center justify-center h-full border border-r-gray-200 hover:bg-slate-400 transition-colors duration-300 '>Products</div>
                <div className='col-span-1 flex items-center justify-center h-full rounded-r-full hover:bg-slate-400 transition-colors duration-300 '>Pricing</div>

            </div>

            {/* Theme and User Icon */}

            <div className='flex space-x-4 m-4 mr-6 alignit'>
            <div className='rounded-full w-16 animate-slideDownAndFadeIn'>
                <img className='rounded-full' src='https://web.dev/static/articles/building/a-theme-switch-component/image/alttexthere-19c8b69d60ba.png'></img>
            </div>
            <div className='rounded-full w-12 mt-[-2px] animate-slideDownAndFadeIn'>
                <img className='rounded-full' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
            </div>

            </div>
        </div>
    )

}