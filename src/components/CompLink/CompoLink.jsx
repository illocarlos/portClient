import { Link } from 'react-router-dom'
import './CompoLink.css'
import cv from '../../../public/cv.png'
import git from '../../../public/git.png'
import linked from '../../../public/linked.png'


const CompoLink = (setShowModal) => {


    return (
        <>
            <Link to={"/"}>
                <div>
                    <img src={cv} alt="CV" />

                </div>
            </Link>
            <Link to={"#"}>
                <div>
                    <img src={git} alt="Git" />

                </div>
            </Link>
            <Link to={"#"}>
                <div>
                    <img src={linked} alt="Linked" />

                </div>
            </Link>

        </>
    )

}
export default CompoLink