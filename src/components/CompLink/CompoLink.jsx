import { Link } from 'react-router-dom'
import './CompoLink.css'
import git from '../../../public/git.png'
import linked from '../../../public/linked.png'
import { Dropdown, Button, Modal, Col } from 'react-bootstrap'
import open from '../../../public/close.png'
import close from '../../../public/open.png'
import { useState } from 'react'
import Contact from '../Contact/Contact'
import akat from '../../../public/akat.png'

const CompoLink = () => {

    const [showModal, setShowModal] = useState(false)


    return (
        <>


            <Dropdown >
                <Dropdown.Toggle className='dropdown-toggle-icon d-md-none ' variant='danger'>

                </Dropdown.Toggle>

                <Dropdown.Menu
                    style={{ height: '300px' }}
                    align="end" className="centered extend-left slide-up scrollable">
                    <Dropdown.Item className='d-flex justify-content-center' >
                        <Link style={{ width: '43px', height: '50px' }} className='button-CV'

                            to={'https://drive.google.com/file/d/1FP-1x5Z4zX4sMN39TBZvgzBvaR3eYy6R/view?usp=sharing'} >

                            CV
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <Link className='linkGit mr-3' to={"https://github.com/illocarlos"} target="_blank" title='go to Git Hub'>
                            <div className='mt-2 imageContainer'>
                                <img style={{ width: '40px', height: '47px' }} className='Git' src={git} alt="Git" />
                            </div>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">
                        <Link className='linklinked mr-3' to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"} title='go to  linkedln'>
                            <div className='imageContainer'>
                                <img style={{ width: '40px', height: '50px' }} className='linked' src={linked} alt="Linked" />
                            </div>
                        </Link>
                    </Dropdown.Item>

                    <Dropdown.Item href="#action/3.4">
                        <Button to={'/Contact'}
                            onClick={() => setShowModal(true)}
                            className="ButtonEmail"
                            type="submit" title='send mail'>
                            <img style={{ width: '40px', height: '50px' }} className='openButton' src={open} alt="mail" />
                            <img style={{ width: '40px', height: '50px' }} className='closeButton' src={close} alt="mail" />


                        </Button>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>



            <Link className='button-CV  mr-3 d-none d-sm-inline'
                to={'https://drive.google.com/file/d/1FP-1x5Z4zX4sMN39TBZvgzBvaR3eYy6R/view?usp=sharing'} >
                CV
            </Link>

            <Link className='linkGit mr-3 d-none d-sm-inline '
                to={"https://github.com/illocarlos"}
                target="_blank" title='go to Git Hub'>
                <div className='imageContainer'>
                    <img className='Git' src={git} alt="Git" />
                </div>
            </Link>

            <Link className='linklinked mr-3 d-none d-sm-inline '
                to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"}
                title='go to  linkedln'>
                <div className='imageContainer'>
                    <img className='linked' src={linked} alt="Linked" />
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