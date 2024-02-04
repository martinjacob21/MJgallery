import React from 'react'
import Mygallery from '../components/Mygallery'


function Dashboard() {
    return (
        <div>
            <div style={{ marginTop: '50px' }} className='container-fluid'>
                <h1>Welcome<span className='text-warning'> user</span></h1>
                <div className="row">
                    <div className="col-lg-12">
                        <Mygallery/>


                    </div>
                   
                </div>


            </div>








        </div>
    )
}

export default Dashboard