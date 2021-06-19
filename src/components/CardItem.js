import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

const Carditem = (props) => {
    return (
        <>
         <li className='cards__item'>
             <Link 
             className='cards__item__link' to={props.path} >
                 <figure className="cards__item__pic-wrap" data-category={props.label}>
                     <h1>تعداد کل</h1>                   
                 </figure>
                  
                 <div className="cards__item__info">
                     <h5 className='cards__item__text'> {props.text}</h5>
                 </div>
             </Link>
               <Link 
             className='cards__item__link' to={props.path} >
                 <figure className="cards__item__pic-wrap" data-category={props.label}>
                     <h1> ارزش معاملات</h1>                   
                 </figure>
                  
                 <div className="cards__item__info">
                     <h5 className='cards__item__text'> {props.arzesh}</h5>
                 </div>
             </Link>
              <Link 
             className='cards__item__link' to={props.path} >
                 <figure className="cards__item__pic-wrap" data-category={props.label}>
                     <h1>تعداد کاربران </h1>                   
                 </figure>
                  
                 <div className="cards__item__info">
                     <h5 className='cards__item__text'> {props.seler}</h5>
                 </div>
             </Link>
             
             
             </li> 
             
        </>
    )
}

export default Carditem
