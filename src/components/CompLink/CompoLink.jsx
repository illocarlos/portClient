import { Link } from 'react-router-dom'
import './CompoLink.css'
import cv from '../../../public/cv.png'
import git from '../../../public/git.png'
import linked from '../../../public/linked.png'

const CompoLink = () => {


    return (
        <>

            <Link to={"https://github.com/illocarlos"} target="_blank" title='go to Git Hub'>
                <div>
                    <img src={git} alt="Git" />

                </div>
            </Link>
            <Link to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"} title='go to  linkedln
            '>
                <div>
                    <img src={linked} alt="Linked" />

                </div>
            </Link>

        </>
    )

}
export default CompoLink