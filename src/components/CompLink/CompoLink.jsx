import { Link } from 'react-router-dom'
import './CompoLink.css'
import git from '../../../public/git.png'
import linked from '../../../public/linked.png'

const CompoLink = () => {


    return (
        <>

            <Link className='linkGit mr-3' to={"https://github.com/illocarlos"} target="_blank" title='go to Git Hub'>
                <div className='imageContainer'>
                    <img className='Git' src={git} alt="Git" />
                </div>
            </Link>

            <Link className='linklinked mr-3' to={"https://www.linkedin.com/in/carlos-alberto-albendiz-paez-531107143/"} title='go to  linkedln'>
                <div className='imageContainer'>
                    <img className='linked' src={linked} alt="Linked" />
                </div>
            </Link>

        </>

    )

}
export default CompoLink