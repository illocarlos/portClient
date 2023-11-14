import { Link } from 'react-router-dom'
import './CompoLink.css'
import { Dropdown, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import Contact from '../Contact/Contact'


const CompoLink = () => {

    const [showModal, setShowModal] = useState(false)


    return (
        <>


            <Dropdown >



                <Dropdown.Toggle className='dropdown-toggle-icon d-md-none ' variant='danger'>

                </Dropdown.Toggle>

                <Dropdown.Menu
                    style={{ height: '350px' }}
                    align="end" className="centered extend-left slide-up scrollable">
                    <Dropdown.Item href="#action/3.1" className='d-flex justify-content-center' >
                        <Link className='Link-button-cv-dropdown button-CV'
                            to={'www.facebook.com'}
                            target="_blank" >

                            <p className='but-cv-p'> CV</p>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.2" >
                        <Link className='linkGit mr-3'
                            target="_blank" to={"https://www.github.com/illocarlos"}
                            title='go to Git Hub'>
                            <div className='mt-3 imageContainer'>

                                <img style={{ width: '40px', height: '47px' }} className='Git' src={"/git.png"} alt="Git" />
                            </div>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">
                        <Link className='linklinked mr-3'
                            to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"}
                            target="_blank" title='go to  linkedln'>
                            <div className='imageContainer'>
                                <img style={{ width: '40px', height: '50px' }} className='linked' src={"/linked.png"} alt="Linked" />
                            </div>
                        </Link>
                    </Dropdown.Item>

                    <Dropdown.Item href="#action/3.4">
                        <Button to={'/Contact'}
                            onClick={() => setShowModal(true)}
                            className="ButtonEmail"
                            type="submit" title='send mail'>
                            <img style={{ width: '40px', height: '50px' }} className='openButton' src={'/close.png'} alt="mail" />
                            <img style={{ width: '40px', height: '50px' }} className='closeButton' src={"/open.png"} alt="mail" />


                        </Button>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>



            <Link className='button-CV  mr-3 d-none d-sm-inline'
                to={'https://drive.google.com/file/d/1FP-1x5Z4zX4sMN39TBZvgzBvaR3eYy6R/view?usp=sharing'}
                target="_blank" >
                CV
            </Link>

            <Link className='linkGit mr-3 d-none d-sm-inline '
                to={"https://github.com/illocarlos"}
                target="_blank" title='go to Git Hub'>
                <div className='imageContainer'>
                    <img className='Git' src={"/git.png"} alt="Git" />
                </div>
            </Link>

            <Link className='linklinked mr-3 d-none d-sm-inline '
                to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"}
                title='go to  linkedln'>
                <div className='imageContainer'>
                    <img className='linked' src={"/linked.png"} alt="Linked" />
                </div>
            </Link>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header className='Contact'>
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
export default CompoLink