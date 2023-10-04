import { Link } from 'react-router-dom'
import './WorkCardList.css'
import git from '../../../../public/git.png'


const WorkList = ({ description, workImage, link, _id, gitHub }) => {
    return (
        <div className="work-card" >
            <img src={workImage} alt="Avatar" className="work-avatar" />
            <h4 className="work-name mt-5">{description}</h4>
            <div>
                <Link to={link} target="_blank" title='go to Git Hub'>
                    <div>
                        <p>WEEEB</p>
                    </div>
                </Link>
                <Link to={gitHub} target="_blank" title='go to Git Hub'>
                    <div>
                        <img src={git} alt="Git" />

                    </div>
                </Link>
            </div>
        </div>

    )

}
export default WorkList