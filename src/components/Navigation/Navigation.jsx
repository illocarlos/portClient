import './Index.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Index = () => {

    return (
        <>
            <Container>
                <div className='Index' >
                    <Link to={'/Contact'}> Contact</Link>
                </div>
                <h1>PORTAFOLIO MIOOO</h1>





            </Container>
        </>
    )
}
export default Index