import { Container } from "react-bootstrap";
import NewWorkForm from "../../../components/WorkComponents/NewWorkForm/NewWorkForm";
import { useNavigate } from 'react-router-dom'


const NewWorkPage = () => {

    const navigate = useNavigate()
    const fireFinalActions = () => {
        navigate('/')
    }
    return (

        <div>
            <Container className="newWorkPage">
                <h1>New Event</h1>
                <hr />
                <NewWorkForm fireFinalActions={fireFinalActions} />
            </Container >
        </div>

    )
}

export default NewWorkPage