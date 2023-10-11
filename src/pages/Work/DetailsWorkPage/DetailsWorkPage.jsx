import { useParams } from 'react-router-dom'
import './DetailsWorkPage.css'
import { Container } from "react-bootstrap"
import { useEffect, useState } from 'react'
import workService from '../../../service/work.service'

const DetailsWorkPage = () => {

    const { work_id } = useParamsx()
    const { work, setWork } = useState({})

    useEffect(() => {
        loadWorkDetails()
    }, [])

    const loadWorkDetails = () => {
        workService
            .getWorkDetails(work_id)
            .then(({ data }) => setWork(data))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })

    }




    return (
        <div className="d-flex justify-content-center">
            <Container>
                <h1>{work.description}</h1>
            </Container >
        </div >
    )

}

export default DetailsWorkPage