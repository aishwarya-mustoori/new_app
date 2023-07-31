import './App.css';
import { Container, Navbar, Nav, Card, Button, Image, Col, Row } from 'react-bootstrap';
import ScrollSpy from 'react-scrollspy-navigation';
import React from 'react';
import { PiGithubLogoFill , PiNumberFourBold} from 'react-icons/pi';
import { RiLinkedinFill } from 'react-icons/ri';
function ContactBar() {
  return (
                   
   
   <nav class="navbar navbar-dark bg-dark navbar-expand-lg p-3 text-white row font-family-dancing w-100" >
    
   
   <div className='col-xs-7 col-sm-6 col-lg-8 text-left ps-4 d-md-flex'>
 

   <span className='h5 text-bold'> AISHWARYA MUSTOORI, &nbsp;&nbsp;  </span> 
   <div className='h5 text-italics'> Developer / Data Engineer</div>


   </div>

   <div className='col ms-auto d-contents text-right-md text-left'>


        <a class="btn btn-dark opacity-100 " href="mailto:aishwaryam202@gmail.com">aishwaryam202@gmail.com</a>
    
  
      <a className='btn btn-dark opacity-100' href="https://www.linkedin.com/in/aishwarya-mustoori/" > <PiGithubLogoFill /> </a>

   
      
      <a className='btn btn-dark opacity-100' href="https://github.com/aishwarya-mustoori"><RiLinkedinFill /></a>
      </div>

 
</nav>

                


                    
 
  );
}

export default ContactBar;
