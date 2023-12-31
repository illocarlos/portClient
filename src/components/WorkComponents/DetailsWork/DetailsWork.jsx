import { Link, useParams } from 'react-router-dom'
import './DetailsWork.css'
import { Row, Col, Container } from "react-bootstrap"
import { useEffect, useState } from 'react'
import workService from '../../../service/work.service'

const DetailsWork = () => {


    const { work_id } = useParams()
    const [work, setWork] = useState({})


    useEffect(() => {
        loadWorkDetails()
    }, [])


    const loadWorkDetails = () => {
        workService

            .getWorkDetails(work_id)
            .then(({ data }) => setWork(data))
            .catch(err => console.log(err))
    }




    return (
        <div className='DetailsWork'>
            <Row>
                <Col sm={12} md={6} lg={6} className=" order-sm-2">
                    <div className='div-description'>
                        <Container>
                            <div className='div-article'>
                                <h1 className='hDetails'>{work.title}</h1>
                                <article className='mt-5'> {work.description}</article>
                            </div>
                        </Container>
                        <div className='div-Link'>
                            <Link class="custom-button ml-2" to={work.link}>web</Link>
                            <Link class="custom-button ml-2" to={work.gitHub}>gitHub </Link>ç
                            <Link class="custom-button ml-2" to={"/"}>volver</Link>
                        </div>
                    </div>

                </Col>
                <Col sm={12} md={6} lg={6} className="order-sm-1 ">
                    <div className='imgId'>
                        <img className='work-image' src={work.workImage} alt="" />

                    </div>
                </Col>

            </Row>



        </div>
    )

}

export default DetailsWork