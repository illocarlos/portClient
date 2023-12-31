import { Link } from 'react-router-dom'
import './WorkCardList.css'



const WorkList = ({ title, description, workImage, link, _id, gitHub }) => {
    return (
        <div className="work-card" key={_id}>
            <div className="work-content">

                <Link to={`/work/${_id}`}>
                    <div
                        className="work-avatar"
                        style={{ backgroundImage: `url(${workImage})` }}>

                        <h1 className="work-name ">{title}</h1>
                    </div>
                </Link>
            </div>
        </div >
    )

}
export default WorkList