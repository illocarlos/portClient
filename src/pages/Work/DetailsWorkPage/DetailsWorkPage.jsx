import { useParams } from 'react-router-dom'
import './DetailsWorkPage.css'
import { Container } from "react-bootstrap"
import { useEffect, useState } from 'react'
import workService from '../../../service/work.service'

const DetailsWorkPage = () => {

    const { work_id } = useParams()
    const { work, setWork } = useState({})

    useEffect(() => {
        loadWorkDetails()
    }, [])

    const loadWorkDetails = () => {
        workService
            .getWorkDetails(work_id)
            .then((data) => setWork(data))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })

    }




    return (
        <div className="d-flex justify-content-center">
            <Container>
                <h1>halooooooooooo!!!!!</h1>
                <h1>{work.title}</h1>
            </Container >
        </div >
    )

}

export default DetailsWorkPage