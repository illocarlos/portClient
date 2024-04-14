import './FormContactPage.css'
import { Container } from 'react-bootstrap'
import Contact from '../../components/Contact/Contact'

const FormContactPage = () => {


    return (
        <div className="FormContactPage">
            <Container>
                <h1>FORMULARIO CONTACTO</h1>
                <hr />
                <Contact />
            </Container>

        </div>
    )
}
export default FormContactPage