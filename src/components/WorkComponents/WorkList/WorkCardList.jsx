import { Link } from 'react-router-dom'
import './WorkCardList.css'
import git from '../../../../public/git.png'


const WorkList = ({ description, workImage, link, _id, gitHub }) => {
    return (
        <div className="work-card">
            <div className="work-content">

                <div
                    className="work-avatar"
                    style={{ backgroundImage: `url(${workImage})` }}>

                    <h3 className="work-name ">{description}</h3>
                </div>
            </div>
        </div >
    )

}
export default WorkList