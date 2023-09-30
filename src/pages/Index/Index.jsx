import './Index.css'
import { AuthContext } from "../../contexts/auth.context";
import { Navbar, Nav, Button, Container, Modal } from 'react-bootstrap'
import { useContext, useState } from "react";
import Contact from '../../components/Contact/Contact'
import { Link } from 'react-router-dom'
import NewWorkForm from '../../components/WorkComponents/NewWorkForm/NewWorkForm'
import CompoLink from '../../components/compLink/CompoLink';
import mail from '../../../public/mail.png'
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
                            <Link to={"/"}>LOGO</Link>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <CompoLink />
                                <Button to={'/Contact'} onClick={() => setShowModal(true)} type="submit" title='send mail'>
                                    <div>
                                        <img src={mail} alt="mail" />

                                    </div>
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
                        <Button to={'/NewWorkForm'} className="buttonClick" onClick={() => setShowModal(true)}>
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