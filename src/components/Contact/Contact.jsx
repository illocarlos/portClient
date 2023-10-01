import './Contact.css'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import contactService from '../../service/contact.service'
import { useNavigate } from 'react-router-dom'

const Contact = ({ setShowModal }) => {

    const navigate = useNavigate()
    const [contactData, setContactData] = useState({
        direcction: '',
        info: '',
        name: '',

    })


    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setContactData({ ...contactData, [name]: value })

    }



    const handleContactSubmit = e => {

        e.preventDefault()

        contactService
            .saveContacts(contactData)
            .then(() => {
                setShowModal(false)
            })
            .catch(err => console.log(err))
            .finally(() => {
                navigate('/')
            })

    }

    return (
        <div className='Contact'>
            <Form onSubmit={handleContactSubmit}>
                <Form.Group className="mb-3" controlId="direcction">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={contactData.direcction} name="direcction" onChange={handleInputChange} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={contactData.name} type="text" name="name" onChange={handleInputChange} rows={6} placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="info">
                    <Form.Label>Information</Form.Label>
                    <Form.Control value={contactData.info} name="info" onChange={handleInputChange} as="textarea" rows={6} />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">send</Button>
                </div>
            </Form>
        </div>
    )
}
export default Contact