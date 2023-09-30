import './Index.css'
import { AuthContext } from "../../contexts/auth.context";
import { Navbar, Nav, Button, Container, Modal } from 'react-bootstrap'
import { useContext, useState } from "react";
import Contact from '../../components/Contact/Contact'
import { Link } from 'react-router-dom'
import NewWorkForm from '../../components/WorkComponents/NewWorkForm/NewWorkForm'
import CompoLink from '../../components/compLink/CompoLink';

const Index = () => {
    const [showModal, setShowModal] = useState(false)
    const { loggedUser, logout } = useContext(AuthContext)

    return (
        <div className='Index'>
            <Container>


                {
                    !loggedUser &&
                    <>
                        <Navbar className="bg-body-tertiary">

                            <Link to={"/auth/login"} className=" mx-2  nav-link"> .</Link>
                            <Link to={"/"}>LOGO.</Link>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <CompoLink />
                                <Button>

                                </Button>
                            </Navbar.Collapse>

                        </Navbar>


                        <Modal show={showModal} onHide={() => setShowModal(false)} >
                            <Modal.Header closeButton>
                                <Modal.Title>Contact me</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Contact setShowModal={setShowModal} />
                            </Modal.Body>
                        </Modal>



                    </>
                }
                {
                    loggedUser &&
                    <>
                        <Button to={'/NewWorkForm'} className="buttonClick" onClick={() => setShowModal(true)} style={{ width: '300px' }} type="submit">
                            Update Work
                        </Button>
                        <Link to={'/'} className='mx-2  nav-link' onClick={logout}>log out</Link>


                        <Modal show={showModal} onHide={() => setShowModal(false)} >
                            <Modal.Header closeButton>
                                <Modal.Title>NEW WORK</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <NewWorkForm setShowModal={setShowModal} />
                            </Modal.Body>
                        </Modal>



                    </>
                }


            </Container >
        </div>
    )
}
export default Index