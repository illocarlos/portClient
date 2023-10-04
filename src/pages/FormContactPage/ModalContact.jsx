import { useState } from "react"
import { Modal } from "react-bootstrap"
import Contact from "../../components/Contact/Contact"





const ModalContact = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header className='Contact' >

                    <Modal.Title>Contact me</Modal.Title>
                    <button className="custom-close-button" onClick={() => setShowModal(false)}>
                        X
                    </button>
                </Modal.Header>
                <Modal.Body className='Contact' >
                    <Contact setShowModal={setShowModal} />
                </Modal.Body>
            </Modal>
        </>
    )
}
export default ModalContact