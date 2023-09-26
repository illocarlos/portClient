import './Contact.css'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import contactService from '../../service/contact.service'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const [contactData, setContactData] = useState({
        email: '',
        info: '',

    })
    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setContactData({ ...contactData, [name]: value })

    }
    const handleContactSubmit = e => {

        console.log('--------->', contactData)
        e.preventDefault()

        contactService
            .saveContacts(contactData)
            .then(response => console.log(response))
            .catch(err => console.log(err))
            .finally(() => {
                navigate('/')
            })

    }

    return (
        <div className='Contact'>
            <Form onSubmit={handleContactSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={contactData.email} name="email" onChange={handleInputChange} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="info">
                    <Form.Label>Information</Form.Label>
                    <Form.Control value={contactData.info} name="info" onChange={handleInputChange} as="textarea" rows={6} />

                    <div className="d-grid">
                        <Button variant="dark" type="submit">send</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}
export default Contact