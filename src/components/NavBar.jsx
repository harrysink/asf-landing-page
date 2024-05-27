import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import './NavBar.css'

export const NavBar = () => {
  return (
    <Navbar id='#nav' expand="lg" className="bg-body-tertiary">
      <Container id='container'>
        <Navbar.Brand href="#home">
          <img src={logo} className='w-20 cursor-pointer'/> 
        </Navbar.Brand>
        <Navbar.Toggle id='nav-toggler' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='links-nav' className="me-auto">
            <Nav.Link href="#home" className='mr-2 flex items-center text-gray-500 font-semibold cursor-pointer hover:text-amber-400 transition-ease-in-out duration-300'>Home</Nav.Link>
            <Nav.Link href="#link" className='mr-2 flex items-center text-gray-500 font-semibold cursor-pointer px-4 hover:text-amber-400 transition-ease-in-out duration-300'>Link</Nav.Link>
            <button className='bg-amber-400 pt-3 pb-3 pr-5 pl-5 rounded-3xl text-white font-medium hover:bg-amber-500 ease-in-out duration-300 cursor-pointer'>Get started</button>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

{/* <div className='bg-white h-[80px] top-0 w-full sticky z-50 flex p-7 items-center drop-shadow-lg'>
      <div className='w-[10%] cursor'>
        <img src={logo} className='w-20 cursor-pointer'/>
      </div>
      <ol className='flex justify-end w-[90%] text-base'>
        <li className='mr-2 flex items-center text-gray-500 font-semibold cursor-pointer px-3 hover:text-amber-400 transition-ease-in-out duration-300'>Home</li>
        <li className='mr-6 flex items-center text-gray-500 font-semibold cursor-pointer px-3 hover:text-amber-400 transition-ease-in-out duration-300'>Courses</li>
        <button className='bg-amber-400 pt-3 pb-3 pr-5 pl-5 rounded-3xl text-white font-medium hover:bg-amber-500 ease-in-out duration-300 cursor-pointer'>Get started</button>
      </ol>
    </div> */}
