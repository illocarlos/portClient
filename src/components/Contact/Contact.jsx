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
        <div  >
            <Form onSubmit={handleContactSubmit}>
                <Form.Group className="mb-3" controlId="direcction">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={contactData.direcction} name="direcction" onChange={handleInputChange} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control value={contactData.name} type="text" name="name" onChange={handleInputChange} rows={6} placeholder="Nombre de contacto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="info">
                    <Form.Label></Form.Label>
                    <Form.Control value={contactData.info} name="info" onChange={handleInputChange} as="textarea" rows={6} />
                </Form.Group>


                <Button className="button-send" type="submit"> ENVIAR</Button>

            </Form>
        </div>
    )
}
export default Contact