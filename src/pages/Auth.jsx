import React from 'react'
import { Link } from 'react-router-dom'
import authImage from '../assets/auth.png'
import { Form } from 'react-bootstrap'


function Auth({ insideRegister }) {
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className="container w-75">
                <Link to={'/'} style={{ textDecoration: 'none' }}><i className='fa-solid fa-arrow-left'></i>Back To Home</Link>
                <div className="card shadow p-5 bg-light">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img className='w-100%' src={authImage} alt="Auth" srcset="" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className='fw-bolder text-black mt-2'>
                                <i style={{ height: '41px' }} className='fa-solid fa-hands-holding-circle me-2'></i>M J Gallery</h1><br />
                            <h5 className='fw-bolder text-black mt-2'> Sigin {insideRegister ? 'Up' : 'In'}  to your Account </h5><br />
                            <Form>
                                {
                                    insideRegister &&
                                    <Form.Group className="mb-3" controlId="formBasicUname">
                                        <Form.Control type="text" placeholder="Enter User Name" className='form-control' />

                                    </Form.Group>

                                }
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" className='form-control' />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter password" className='form-control' />

                                </Form.Group>
                                {
                                    insideRegister?
                                    <div>
                                        <button class="glow-on-hover" type="button">Register</button>
                                        <p><span className='text-black'>Already have Account? Click here to</span> <Link to={'/login'}><span style={{color:'blue'}}>Login</span></Link></p>
                                    </div>:
                                    <div>
                                    <button class="glow-on-hover" type="button">Login</button>
                                    <p><span className='text-black'>New User? Click Here to</span> <Link to={'/register'}><span style={{color:'blue'}}>Register</span></Link></p>
                                </div>
                                }



                            </Form>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Auth