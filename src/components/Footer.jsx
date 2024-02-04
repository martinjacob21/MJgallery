import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div className='text-left bg-black ' style={{marginTop:'50px'}}>
        <div className='container-fluid w-100  p-4 '>
                <Row style={{backgroundColor:""}}>
                    <Col lg={3}>
                    <h4 className='text-white'> <i class="fa-solid fa-truck-fast"></i>  M J Gallery</h4>
                    <p style={{color:"white"}}>Desinged and built with love in the world by the luminar team Possimus recusondae conseduartr ipsa vaeritatia expedita aspernatur</p>
                    </Col>
                    <Col lg={3}>
                        <h4 style={{color:"white"}} className='ms-4'>Links</h4>
                        <b><p  className='mt-3 ms-4 text-white'>Home <br />Wishlist <br />Cart</p></b>
                    </Col>
                    <Col lg={3}>
                    <h4 style={{color:"white"}}>Guides</h4>
                        <b><p className='mt-3 text-white'>React <br />React- Bootstrap<br />Routing</p></b>
                    </Col>
                    <Col Col lg={3}>
                    <h4 style={{color:'white'}}>Contact us</h4>
                    <input type="email" placeholder='Enter Email' style={{width:'75%'}} className='mt-3' />
                    <br /> 
                    <button type='button' className='btn btn-danger form-control mt-3' style={{width:'75%'}}>send</button>
                    <div className='text-center mt-4 text-white' style={{display:'flex',justifyContent:'space-evenly',width:'75%'}}>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                    </Col>
                </Row>
                <div className='text-center'>
                <p className='text-white'> <i class="fa-regular fa-copyright"></i> Luminar Tecnolab 2023-2024</p>
                </div>
        </div>
    </div>
  )
}

export default Footer