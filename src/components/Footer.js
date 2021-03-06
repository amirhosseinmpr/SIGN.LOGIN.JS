import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        
        {/* <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        <div className='input-areas'>
         
        </div>
      </section>
      <div class='footer-links'>
     
       <div className="namad1">
       <img src='image/nemad1.png '/>
       </div>
       <div className="VISTATn"> <h2>  نماد ها </h2>
     
       </div>

      <div class='footer-link-items'>
            <h2>اطلاعات تماس</h2>
            <Link to='/'> آدرس =خیبان فرشته -نبش خیابان سعدی-پلاک۴۷</Link>
            
          </div>
      
          
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>درباره</h2>
           <Link to='/'>درباره ما</Link>
            <Link to='/sign-up'>قوانین و مقررات</Link>
            
            
          </div>
          <div class='footer-link-items'>
            <h2>راهنما</h2>
            <Link to='/'>راهنما</Link>
            <Link to='/'> سوالات متداول</Link>
            <Link to='/'>راهنمای سوالات</Link>
            <Link to='/'>بلاگ</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>اطلاعات تماس</h2>
            <Link to='/'> آدرس =خیبان فرشته -نبش خیابان سعدی-پلاک۴۷</Link>
            <img src='image/nemad1.png '/>
          </div> */}
          
        </div>
        
        <div className="VISTA"> <img src='image/vistalogo2.png '/></div>
      </div>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
           
          </div>
          <small class='website-rights'></small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Footer;