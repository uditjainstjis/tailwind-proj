import logo from './logo.svg';
import './App.css';
import {useState,useRef} from 'react'
import { TopPage} from './components/Toppage';
import { RestPage } from './components/Restpage';
import ScrollComponent from './components/scrollcomponent';


function DarkModeToggle(){
  const [isDarkMode,setIsDarkMode] = useState(false)
}


function App() {

  // let isScrolling=false;
  // let previousScroll = 0;
  // let newScroll = 0;
  // let scrolling1 =0
  // let scrolling2 =0



  // window.addEventListener('scrollend',()=>{
  //   newScroll = window.scrollY

  //   scrolling1=1
  //   scrolling2=1
  //   if(newScroll>previousScroll && scrolling1==1){
  //     previousScroll = newScroll
  //     window.scrollBy({
  //       top: 10,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //     // window.scrollTo(0,newScroll+30);

  //     setInterval(()=>{scrolling1=0},400)
  //     clearInterval(scrolling2)

  //   }
  //   if(newScroll<previousScroll && scrolling2==1){
  //     previousScroll = newScroll

  //     window.scrollBy({
  //       top: -10,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //     // window.scrollTo(0,newScroll-30);
  //     setInterval(()=>{scrolling2=0},400)
  //     clearInterval(scrolling1)


  //   }
    


    
  // })

  // const realnavbar = useRef(null)
  // const locateNavbar = useState(0)

  // function navbar(){

  //   if(window.scrollY>10){
      
  //     // realnavbar.current.top = "5px";
  //     alert("dekh")
  //   }
  // }



  return (
    
    <div className="App">
    {/* <ScrollComponent/>  */}
    <TopPage />
    <RestPage/>

    </div>

  );
}

export default App;



