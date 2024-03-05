import { Link } from 'react-router-dom'
import './CompoLink.css'
import { Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Contact from '../Contact/Contact'


const CompoLink = () => {

    const [showModal, setShowModal] = useState(false)
    const [isShowDropdowm, setiIsShowDropdowm] = useState(null)

    const toggleModal = () => {
        const showModal = !isShowDropdowm;
        setiIsShowDropdowm(showModal);

    }

    useEffect(() => {

    }, []);

    return (
        <>


            <button className='buttonShowMenu Hidden' onClick={toggleModal}>
                <div className={isShowDropdowm === null ? '' : isShowDropdowm ? 'rotateFirstDiv' : ''}></div>
                <div className={isShowDropdowm === null ? '' : isShowDropdowm ? 'rotateSecondDiv' : ''}></div>
                <div className={isShowDropdowm === null ? '' : isShowDropdowm ? 'rotateThirdDiv' : ''}></div>
            </button>
            <div className={`DivMenuBlack ${isShowDropdowm === null ? '' : isShowDropdowm ? 'showMenuComplete' : 'hiddenMenuComplete Hidden'}`}>
                <div className={`DivMenu ${isShowDropdowm === null ? '' : isShowDropdowm ? 'showMenu' : ' Hidden hiddenMenu'}`}>
                    <div className='list-menu-dropdown'>

                        <Link
                            className='transformLink'
                            target="_blank" to={"https://www.github.com/illocarlos"}
                            title='go to Git Hub'>
                            <p>Github</p>
                        </Link>
                        <Link
                            className='transformLink'
                            to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"}
                            target="_blank" title='go to  linkedln'>
                            <p>Linkedin</p>
                        </Link>
                        <Link
                            className='transformLink'
                            // to={'/Contact'}
                            onClick={() => setShowModal(true)}
                            type="submit" title='send mail'>
                            <p>Contactar</p>
                        </Link>
                    </div>
                </div>
            </div >


            <Link className='button-CV  mr-3 d-none d-sm-inline'
                to={'https://drive.google.com/file/d/1N6UJEGMv43T9To9OEnUhuIEsgMQNUAIc/view'}
                target="_blank" >
                CV
            </Link>

            <Link className='linkGit mr-3 d-none d-sm-inline '
                to={"https://github.com/illocarlos"}
                target="_blank" title='go to Git Hub'>
                <div className='imageContainer'>
                    <img className='Git' src={"/git.png"} />
                </div>
            </Link>

            <Link className='linklinked mr-3 d-none d-sm-inline '
                to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"}
                title='go to linkedln'>
                <div className='imageContainer'>
                    <img className='linked' src={"/linked.png"} />
                </div>
            </Link>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header className='Contact'>
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

    )

}
export default CompoLink