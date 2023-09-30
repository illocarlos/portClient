import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../service/auth.service"
import { useNavigate } from "react-router-dom"
import uploadServices from "../../service/upload.service"
import { MessageContext } from "../../contexts/message.context"
import Loader from "../Loader/Loader"
import FormError from '../../components/FormError/FormError';
import './SignupForm.css'

const SignupForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { emitMessage } = useContext(MessageContext)

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        username: '',


    })


    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    const handleFormSubmit = e => {

        e.preventDefault()
        setIsLoading(true)

        authService
            .signup(signupData)
            .then(() => {

                emitMessage('welcome')
                navigate('/')
            })
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }




    return (

        <Form style={{ textAlign: 'center' }} onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label className="fLabel">Name</Form.Label>
                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fLabel">Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label className="fLabel">Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>


            {isLoading ? (
                <Loader />
            ) : (
                <div className="d-grid">
                    <Button variant="dark" type="submit">Sign up</Button>
                </div>
            )}
            {errors.length > 0 && <FormError> {errors.map(elm => <p>{elm}</p>)}</FormError>}
        </Form>
    )
}

export default SignupForm
