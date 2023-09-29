import './Index.css'
import { AuthContext } from "../../contexts/auth.context";
import { Button, Container, Modal } from 'react-bootstrap'
import { useContext, useState } from "react";
import Contact from '../../components/Contact/Contact'
import { Link } from 'react-router-dom'
import NewWorkForm from '../../components/WorkComponents/NewWorkForm/NewWorkForm'
const Index = () => {
    const [showModal, setShowModal] = useState(false)
    const { loggedUser, logout } = useContext(AuthContext)

    return (
        <>
            <Container>





                {
                    loggedUser &&
                    <>
                        <Button to={'/NewWorkForm'} className="buttonClick" onClick={() => setShowModal(true)} style={{ width: '300px' }} type="submit">
                            Update Work
                        </Button>
                        <Link to={'/'} className='mx-2  nav-link' onClick={logout}>log out</Link>


                        <Modal show={showModal} onHide={() => setShowModal(false)} >
                            <Modal.Header closeButton>
                                <Modal.Title>aaaaaaaa</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <NewWorkForm setShowModal={setShowModal} />
                            </Modal.Body>
                        </Modal>



                    </>
                }
                {
                    !loggedUser &&
                    <>
                        <Link to={"/auth/login"} className=" mx-2  nav-link"> Log In</Link>
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
                    </>
                }


            </Container >
        </>
    )
}
export default Index