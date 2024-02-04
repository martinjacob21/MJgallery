import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  return (
    <>
     <div>
         <Navbar expand="lg" className="bg-body-tertiary  ">
          <Container>
            <Navbar.Brand href="/" style={{color:'red'}}>M J Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Nav.Link href="/" style={{fontSize:'large', color:'black'}}>Home</Nav.Link>
                <Nav.Link href="#link" style={{fontSize:'large',color:'black'}}>Link</Nav.Link>
                <NavDropdown title="Photos&Videos" id="basic-nav-dropdown" style={{fontSize:'large'}}>
                  <NavDropdown.Item href="#action/3.1" style={{fontSize:'large', color:'black'}}>Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/user" style={{fontSize:'large',color:'black'}}>User</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     </div>

    </>
  )
}

export default Header
