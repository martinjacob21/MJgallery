import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Addimage from '../assets/Addimage.png.png'

function Edit() {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <>
            <button onClick={handleShow} style={{ textDecoration: 'none' }}
                className='btn btn-link text-success d-flex align-items-center'>
                <i className='fa-solid fa-edit fa-2x  me-4'>
                </i></button>



            {/* modal */}

            <Modal size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add your photos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <input type="file" style={{display:'none'}} />
                                <img src={Addimage} alt="photos upload pic" />
                            </label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}
export default Edit