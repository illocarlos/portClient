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
                                Soy un desarrollador web que curso el bootcamp de Ironhack,
                                me distingo por ser resolutivo, trabajar bajo presión y
                                responsable debido a mis 7 años en el ejercito,
                                me encanta trabajar en equipo y desde que descubrir
                                el mundo tecnológico relacionado con
                                la programación quiero aportar mis conocimientos y aptitud.
                                <br />
                                <br />
                                Mi objetivo es integrarme en un equipo de desarrollo
                                tecnológico que me haga aprender mucho mas
                                relacionado al sector y que me de muchas
                                oportunidades de mejorar mis skill,
                                que pueda ser creativo y me enseñen a adaptarme
                                a todo tipo de problemas, para así tener un avance constate.
                                <br />
                                <br />
                                Desde que empece a formarme tuve oportunidad  de trabajar en proyectos individuales y grupales,
                                lo que me permitió adquirir experiencia en front-end
                                (CSS,HTML,bootsrtap) y back-end
                                (JavaScript,React.js,Node.js,Express.js) bajo un marco
                                de trabajo scrum, ademas fortalecí mucho mas el trabajo en equipo,
                                ser resolutivo y gestionar mi tiempo de manera efectiva.
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
