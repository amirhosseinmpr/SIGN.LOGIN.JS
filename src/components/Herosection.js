 import React from 'react'
 import '../App.css'
 import './Herosection.css'
 import { Button } from './Button'
 const Herosection = () => {
     return (
         <div className='hero-container'>
         <div className="hero-passcontainer">
             <h1 className="btn_passcontainer">خرید فروش ارز های دیجیتال </h1>
             <p className=" btn__passcotainer">خرید فروش ارز های دیجیتال </p>
             <div className="hero__btn"> 
             
                 <Button className='btns' ButtonStyle='btn--outline'
                 buttonSize='btn--large' > ثبت نام</Button>

               
                  </div>                 
             </div>
            
         </div>
    //  <button><a href="index.htm">contact me</a></button>
     )
 }

export default Herosection
////
// import React from 'react';
// import '../App.css';
// import { Button } from './Button';
// import HeroSection from './Herosection';

// function HeroSectio() {
//   return (
//     <div className='hero-container'>
    
//       <h1>ADVENTURE AWAITS</h1>
//       <p>What are you waiting for?</p>
//       <div className='hero-btns'>
//         <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//         >
//           GET STARTED
//         </Button>
//         <Button
//           className='btns'
//           buttonStyle='btn--primary'
//           buttonSize='btn--large'
//           onClick={console.log('hey')}
//         >
//           WATCH TRAILER <i className='far fa-play-circle' />
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
