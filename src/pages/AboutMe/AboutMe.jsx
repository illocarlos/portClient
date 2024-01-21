import './AboutMe.css'
import me from '../../../public/me.jpg'
import { Container, Row, Col } from 'react-bootstrap'



const AboutMe = () => {

    return (
        <>
            <article className='PortFol' >
                <Container>

                    <Row className=" d-flex justify-content-center">
                        <Col md={6} className="order-1 order-md-1">

                            <div className='articleAboutMe'>
                                Soy un desarrollador web que me destaco por mi capacidad para resolver problemas,
                                trabajar bajo presión y ser responsable,
                                habilidades que adquirí durante mis 7 años de servicio en el ejército.
                                Desde que descubrí el mundo de la tecnología y la programación,
                                he estado ansioso por aplicar mis conocimientos y aptitudes en este campo.
                                <br />
                                <br />
                                Mi objetivo principal es integrarme en un equipo de desarrollo
                                tecnológico que me brinde la oportunidad de aprender y crecer aún más en este sector.
                                Busco un entorno en el que pueda ser creativo
                                y donde se me enseñe a adaptarme a diversos desafíos,
                                lo que me permitirá seguir avanzando constantemente en mi carrera.
                                <br />
                                <br />
                                Desde que comencé mi formación,
                                he tenido la oportunidad de trabajar en proyectos tanto individuales como en equipo.
                                Esto me ha permitido adquirir experiencia en el desarrollo front-end,
                                utilizando tecnologías como CSS, HTML y Bootstrap,React,Vue,Tailwind y SASS así como en el desarrollo back-end,
                                utilizando JavaScript,Firebase, Node.js,Mongodb y Express.js. Además,
                                he trabajado en un entorno de trabajo basado en Scrum,
                                lo que ha fortalecido aún más mis habilidades en el trabajo en equipo,
                                la resolución de problemas y la gestión efectiva del tiempo
                                <br />

                            </div>
                        </Col>
                        <Col md={6} className="imgContainer order-2 order-md-2 ">
                            <Col sm={12} className='mt-4'>

                                <div className='AritcleImg'>
                                    <img src={me} alt="" />
                                </div>

                            </Col>
                        </Col>
                    </Row>
                </Container>
            </article>

        </>
    )

}
export default AboutMe
