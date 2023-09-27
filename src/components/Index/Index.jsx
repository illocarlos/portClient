import './Index.css'

import { Button, Container, Modal } from 'react-bootstrap'
import { useState } from 'react'
import Contact from '../Contact/Contact'

const Index = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Container>

                <div className='Index' >
                    <Button to={'/Contact'} onClick={() => setShowModal(true)}> Contact</Button>
                </div>


                <Modal show={showModal} onHide={() => setShowModal(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>aaaaaaaa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Contact setShowModal={setShowModal} />
                    </Modal.Body>
                </Modal>




            </Container>
        </>
    )
}
export default Index