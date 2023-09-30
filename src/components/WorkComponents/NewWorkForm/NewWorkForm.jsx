import { useState, useContext } from "react"
import { Form, Button, } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import workService from "../../../service/work.service"
import { MessageContext } from "../../../contexts/message.context"
import Loader from "../../Loader/Loader"
import uploadServices from "../../../service/upload.service"
import FormError from '../../FormError/FormError'


const NewWorkForm = ({ setShowModal }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([])
  const { emitMessage } = useContext(MessageContext)


  const [workData, setWorkData] = useState({
    workImage: "",
    description: "",
    link: "",
    attendees: [],
  })

  const handleInputChange = e => {
    const { value, name } = e.currentTarget
    if (name === "number" && (isNaN(value) || parseInt(value) < 0)) {
      return;
    }

    setWorkData({
      ...workData,
      [name]: value,
    })
  }

  const handleEventSubmit = e => {

    e.preventDefault()
    setIsLoading(true)

    workService
      .newWork(workData)
      .then(() => {
        setShowModal(false)
        fireFinalActions()
        emitMessage('create new proyect')

      })
      .catch(err => {
        setErrors(err.response.data.errorMessages)
      })
      .finally(() => {
        navigate('/')
        setIsLoading(false)
      });

  }
  const handleFileUpload = e => {
    const formData = new FormData()
    formData.append('imageData', e.target.files[0])

    uploadServices

      .uploadimage(formData)
      .then((res) => {
        setWorkData({
          ...workData,
          workImage: res.data.cloudinary_url
        })

      })
      .catch(err => console.log(err))
  }


  return (

    <Form className='formEvent'
      style={{ width: '300px', textAlign: 'center' }} onSubmit={handleEventSubmit}>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" value={workData.description}
          name="description" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="link">
        <Form.Label>link</Form.Label>
        <Form.Control type="text" value={workData.link}
          name="link" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>image</Form.Label>
        <Form.Control type="file"
          onChange={handleFileUpload} />
      </Form.Group>


      {
        isLoading ? (
          <Loader />
        ) : (

          <Button className="buttonClick" variant="warning" style={{ width: '300px' }} type="submit">Submit</Button>

        )
      }
      {errors.length > 0 && <FormError> {errors.map(elm => <p>{elm}</p>)}</FormError>}

    </Form >
  )
}

export default NewWorkForm