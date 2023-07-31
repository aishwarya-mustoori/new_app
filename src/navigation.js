import './App.css';
import { Container, Navbar, Nav, Card, Button, Image, Col, Row } from 'react-bootstrap';
import ScrollSpy from 'react-scrollspy-navigation';
import React from 'react';
import {CgGirl} from 'react-icons/cg'
import {AiTwotoneSetting} from 'react-icons/ai'
import {MdWorkHistory} from 'react-icons/md'
import {FaUserGraduate} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'
import {BsTelephoneFill} from 'react-icons/bs'
function Navigation() {
  return (
                    <nav className='navigation bg-dark row mt-5'>
                    <ScrollSpy>

                        <a  className='nav-link text-white col-4 col-sm-4 col-md-2 text-bold' href="#about" ref={React.createRef()} > <span className='d-xs-none d-md-block'>About</span> <CgGirl></CgGirl></a>
                        <a    className='nav-link text-white col-4 col-sm-4 col-md-2 text-bold'  href="#skills" ref={React.createRef()} >  <span className='d-xs-none d-md-block'>Skills</span><AiTwotoneSetting></AiTwotoneSetting></a>
                        <a className='nav-link text-white col-4 col-sm-4 col-md-2 text-bold'  href="#experience" ref={React.createRef()}> <span className='d-xs-none d-md-block'>Experience</span> <MdWorkHistory></MdWorkHistory></a>
                        <a className='nav-link text-white col-4 col-sm-4 col-md-2 text-bold' href="#education" ref={React.createRef()}> <span className='d-xs-none d-md-block' >Education</span><FaUserGraduate></FaUserGraduate></a>
                        <a  className='nav-link text-white col-4 col-sm-4 col-md-2 text-bold' href="#projects" ref={React.createRef()}> <span className='d-xs-none d-md-block'>Projects</span> <BiCodeAlt></BiCodeAlt></a>
                        <a   className='nav-link text-white  col-4 col-sm-4 col-md-2 text-bold' href="#hobbies" ref={React.createRef()}> <span className='d-xs-none d-md-block'>Hobbies</span><BsTelephoneFill /></a>
                        </ScrollSpy>
                    </nav>
                    
 
  );
}

export default Navigation;
