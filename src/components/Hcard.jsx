import React from 'react'
import { Card, Row } from 'react-bootstrap'
import Mcard1 from '../assets/featured-01.jpg'
import Mcard2 from '../assets/featured-02.jpg'
import Mcard3 from '../assets/featured-03.jpg'



function Hcard() {
  return (
    <>
    <br />
    
   
     <div style={{ 
      backgroundImage: `url("https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape%20background&position=0&from_view=keyword&track=ais&uuid=135dbf3a-b697-4ff0-b0ff-b68820b20a77")` 
    }}>
       <Row>
          <Card className='shadow mb-5 btn text-center me-3' style={{ width: '25rem',maruqee:'left' }}>
            <Card.Img variant="top" src={Mcard1} />
            <Card.Body>
            </Card.Body>
          </Card>
      
          <Card className='shadow mb-5 btn me-3' style={{ width: '25rem',maruqee:'left' }}>
            <Card.Img variant="top" src={Mcard2} />
            <Card.Body>
            </Card.Body>
          </Card>
    
    
          <Card className='shadow mb-5 btn me-3' style={{ width: '25rem',maruqee:'left' }}>
            <Card.Img variant="top" src={Mcard3} />
            <Card.Body>
            </Card.Body>
          </Card>
          
       </Row>
     </div>
    </>
  )
}

export default Hcard