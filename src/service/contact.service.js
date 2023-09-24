import axios from 'axios'

class ContactService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL} /contact`
        })
    }

    saveContact(contactData) {
        return this.api.post('/saveContacts', contactData)
    }

}
const contactService = new ContactService


export default contactService