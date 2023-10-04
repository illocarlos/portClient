import { Link } from 'react-router-dom'
import './WorkCardList.css'
import git from '../../../../public/git.png'


const WorkList = ({ description, workImage, link, _id, gitHub }) => {
    return (
        <div className="work-card">
            <div className="work-content">
                <h4 className="work-name ">{description}</h4>

                <div
                    className="work-avatar"
                    style={{ backgroundImage: `url(${workImage})` }}
                ></div>
                <div className="work-links">
                    <Link to={link} target="_blank" title="Go to GitHub">
                        <div></div>
                    </Link>
                    <Link to={gitHub} target="_blank" title="Go to GitHub">
                        <div>
                            <p>GIT</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default WorkList