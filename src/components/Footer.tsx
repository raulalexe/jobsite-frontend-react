import * as React from 'react';
import './Footer.css';

const Footer = (props: any) => {
  return (
    <footer className='footer'>
      <div>
        <div className='footer-content'>
          <h6 id='about'>ABOUT</h6>
          <p>This website is an aggregator dedicated to gathering job ads from multiple sources and making them easily available to job seekers in one single centralized location from where they can better select the proper jobs to which they would like to apply without visiting multiple websites in search for the best positions. In the near future we will transcend the boundries of countries and languages making our website available in multiple translated versions and containing ads from all over the world, all of this leading to an increased ease in international job hunting.</p>
        </div>
        <hr />
        <div className='footer-content'>
          <h6 id='contact'>CONTACT</h6>
          <p>We are currently in the process of rebuilding some parts of the website so please get in touch with us via <a href="https://twitter.com/findthejob4u" target="_blank">Twitter</a> or <a href="https://www.facebook.com/Find-the-Job-4-U-286956171720145/" target="_blank">Facebook</a>.</p>
        </div>
        <hr />
        <div className='copyright'>
          Copyrights 2016 All Rights Reserved by FindTheJob4U
        </div>
        <div className='social-icons'>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;