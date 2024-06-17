//import { useState } from 'react';
import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [spread, setSpread] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  interface Main{
     div: HTMLDivElement,
     a: HTMLAnchorElement,
     img: HTMLImageElement,
     h1: Headers,
     button: HTMLButtonElement,
     p: HTMLBodyElement,
     code: HTMLHyperlinkElementUtils 
  }

  const handleClick = () => {
    setSpread(!spread);

  };


  const Widgets = [
    {
      img: "./react.svg",
      title: "Mobile",
      text: "Get New Notifications about new releases in out mobile app"
    },

    {
      img: "./react.svg",
      title: "Desktop",
      text: "Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms"
    },

    {
      img: "./react.svg",
      title: "TV",
      text: "Watch your favorite series at home on large screen with our TV application."
    }
  ];


  const handlePrev = () => {
   setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : Widgets.length - 1)) 

 };

 const handleNext = () => {
   setCurrentIndex((prevIndex) => (prevIndex < Widgets.length ? prevIndex + 1 : 0));
 }



  return (

      <main className="main">
        <button onClick={handleClick}>{spread ? "Fold" : "Spread"}</button>

        <div className='widgets-container'>

         {spread ? Widgets.map((card, index) => (
           <div className='block' key={index}>
                 <img src={card.img}></img>
                 <h1>{card.title}</h1>
                 <p>{card.text}</p>
               </div>
         ))
         : (
           <div>
            <img src={Widgets[currentIndex].img} alt={`${Widgets[currentIndex].title} logo`}></img>
            <h1>{Widgets[currentIndex].title}</h1>
            <p>{Widgets[currentIndex].text}</p>
            </div>
         )
        };  

        {!spread && (  
          <div className='navigation'>
        <button onClick={handlePrev} style={{ display: spread ? "none" : "block" }}>&#8592;</button>
        <button onClick={handleNext} style={{ display: spread ? "none" : "block"}}>&#8594;</button>
        </div>
        )}   
       </div>

    </main>
  );
}

export default App;
