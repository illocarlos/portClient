import './Navigation.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const Navigation = () => {

    return (
        <>
            <Container>
                <div className='buttContact' >
                    <Link to={'/Contact'}> Contact</Link>
                </div>
            </Container>
        </>
    )
}
export default Navigation