import './Index.css'
import { AuthContext } from "../../contexts/auth.context";
import { Navbar, Button, Modal, Row, Col } from 'react-bootstrap'
import { useContext, useState } from "react";
import Contact from '../../components/Contact/Contact'
import { Link } from 'react-router-dom'
import NewWorkForm from '../../components/WorkComponents/NewWorkForm/NewWorkForm'
import CompoLink from '../../components/CompLink/CompoLink';

const Index = () => {
    const [showModal, setShowModal] = useState(false)
    const { loggedUser, logout } = useContext(AuthContext)

    return (
        <div className='Index'>


            <div className='navBar'>

                {
                    !loggedUser &&
                    <>
                        <Navbar className='navDireccion'>

                            <Link to={"/auth/login"} className=" ocultP ">.</Link>

                            <Link className='logo' to="/">
                                <div className='logoContainer mt-2'>
                                    <Row>

                                        <Col md={2} className="order-1 order-md-1  d-none d-sm-inline ">
                                            <img className='logoImg' src={"/akat.png"} />
                                        </Col>

                                        <Col md={12} className="order-1 order-md-1  ">
                                            <p className='logoP' id="sectionToScrollTo"> Carlos Albendiz  </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Link>
                            <div className='navIcon'>
                                <CompoLink />
                                <Navbar.Collapse >

                                    <Button to={'/Contact'}
                                        onClick={() => setShowModal(true)}
                                        className="ButtonEmail mt-1 d-none d-sm-inline"
                                        type="submit" title='send mail'>

                                        <img className='openButton' src={'/close.png'} alt="mail" />
                                        <img className='closeButton' src={'/open.png'} alt="mail" />


                                    </Button>
                                </Navbar.Collapse>

                            </div>

                        </Navbar>



                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header className='Contact' >

                                <Modal.Title>Contactar</Modal.Title>
                                <button className="custom-close-button" onClick={() => setShowModal(false)}>
                                    X
                                </button>
                            </Modal.Header>
                            <Modal.Body className='Contact' >
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

            </div>

        </div >
    )
}
export default Index