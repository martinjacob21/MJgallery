import React from 'react'
import Add from './Add'
import Edit from './Edit'
import img from '../assets/add1.jpg'



function Mygallery() {
  return (
    <div className='border rounded p-2'>
        <div className="d-flex justify-content-between">
            <h2>My Gallery</h2>
            <Add/>
        </div>
        <div className="my-4">
            <div className="border rounded d-flex justify-content-between align-item-center mb-3 p-2">
                <h5>Image</h5>
                <img src={img} alt="" />
                <div className="icons d-flex">
                    <Edit></Edit>
                    
                    <button className='btn btn-link text-danger ms-2'><i className='fa-solid fa-trash text-danger fa-2x'style={{fontSize:'30px'}}></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mygallery