import { Link, useParams } from 'react-router-dom'
import './DetailsWork.css'
import { Row, Col, Container } from "react-bootstrap"
import { useContext, useEffect, useState } from 'react'
import workService from '../../../service/work.service'
import Loader from '../../Loader/Loader'
import { TranslateContext } from '../../../contexts/translate.context'


const DetailsWork = () => {

    const { isTranslate } = useContext(TranslateContext)

    const { work_id } = useParams()
    const [work, setWork] = useState({})

    useEffect(() => {
        loadWorkDetails()
    }, [])


    const loadWorkDetails = () => {
        workService

            .getWorkDetails(work_id)
            .then(({ data }) => {
                const description = data.description.split(" ")
                setWork({
                    ...data,
                    icon: [...description]
                })
            })
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
                                {/* <article className='mt-5'> {work.description}</article> */}




                                {/* <div className="iconOrder"> */}
                                <Row>
                                    {work.icon && work.icon.map((icon, index) => (

                                        <Col key={index} sm={4} md={3} lg={4} className="iconOrder mt-lg-4">
                                            {!work.icon ? (
                                                <Loader />
                                            ) : (

                                                <img src={`/assets/Icons/${icon}.svg`} />
                                            )}

                                        </Col>
                                    ))}
                                    {/* </div> */}

                                </Row>
                            </div>
                        </Container>
                        <div className='div-Link'>
                            <Link target='_blank' className="custom-button ml-2" to={work.link}>web</Link>
                            <Link target='_blank' className="custom-button ml-2" to={work.gitHub}>gitHub</Link>
                            <Link className="custom-button ml-2" to={"/"}>{isTranslate ? 'volver' : 'back'}</Link>
                        </div>
                    </div>

                </Col >
                <Col sm={12} md={6} lg={6} className="order-sm-1 ">
                    <div className='div-img-responsive'>
                        {!work.icon ? (
                            <Loader />
                        ) : (
                            <img className='work-image' src={work.workImage} alt={work.title} />
                        )}
                    </div>
                </Col>

            </Row >



        </div >
    )

}

export default DetailsWork