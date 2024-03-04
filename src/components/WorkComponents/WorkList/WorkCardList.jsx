import { Link } from 'react-router-dom'
import './WorkCardList.css'



const WorkList = ({ title, name, description, workImage, link, _id, gitHub }) => {




    return (
        <div className="work-content" key={_id}>

            <Link alt={`click ${name}`} to={`/work/${_id}`}>
                <div
                    className="work-avatar"
                    style={{ backgroundImage: `url(${workImage})` }}>

                    <h1 className="work-name ">{title}</h1>
                </div>
            </Link>
        </div>
    )

}
export default WorkList