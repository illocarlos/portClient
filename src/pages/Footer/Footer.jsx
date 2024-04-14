import './Footer.css'
import { Link } from 'react-router-dom'
import { TranslateContext } from '../../contexts/translate.context'
import { useContext } from 'react'
const Footer = () => {
    const { isTranslate } = useContext(TranslateContext)

    return (

        <div className='Footer mt-5'>

            <div className='navIcon-foother'>
                <Link className='button-CV-foother  mr-3 d-sm-inline'
                    to={'https://drive.google.com/file/d/1N6UJEGMv43T9To9OEnUhuIEsgMQNUAIc/view'}
                    target="_blank" >
                    CV
                </Link>

                <Link className='linkGit-foother  mr-3  d-sm-inline '
                    to={"https://github.com/illocarlos"}
                    target="_blank" title='go to Git Hub'>
                    <div className='imageContainer'>
                        <img className='Git' src={'/git.png'} alt="Git" />
                    </div>
                </Link>

                <Link className='linklinked-foother  mr-3  d-sm-inline '
                    to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"}
                    title='go to  linkedln' target="_blank" >
                    <div className='imageContainer'>
                        <img className='linked' src={'/linked.png'} alt="Linked" />
                    </div>
                </Link>


            </div>
            <p className='fot-p mt-2'>

                {isTranslate ? ' Web creada por Carlos Albendiz' : 'Website created by Carlos Albendiz'}
            </p>

        </div>

    )
}
export default Footer