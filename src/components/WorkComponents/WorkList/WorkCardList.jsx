import { Link } from 'react-router-dom'
import { Card, Button, } from 'react-bootstrap'
import './WorkList.css'


const WorkList = ({ description, photo, link, _id }) => {
    return (
        <div key={_id}>
            <Card  >

                <Card.Body style={{ color: 'white', height: '300px', width: '300px' }}>
                    <div className='d-flex flex-column justify-content-between'>
                        <div>
                            <Card.Title style={{
                                whiteSpace: 'nowrap', textOverflow:
                                    'ellipsis', overflow: 'hidden'
                            }}>{description}</Card.Title>
                            <Card.Text style={{
                                height: '170px',
                                textOverflow: 'ellipsis', overflow: 'hidden'
                            }}>
                                {link}</Card.Text>
                        </div>
                        <Link to={`/`}>
                            <Button className='bottonEvent' style={{ width: '100%' }} variant='warning'>link</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )

}
export default WorkList