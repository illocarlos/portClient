import './AboutMe.css'
import { Container, Row, Col } from 'react-bootstrap'



const AboutMe = () => {

    return (
        <>
            <article className='PortFol' >
                <Container>

                    <Row className=" d-flex justify-content-center">
                        <Col md={6} className="order-1 order-md-1">

                            <div className='articleAboutMe'>

                                Como desarrollador web, sobresalgo por mi destreza en resolver problemas,
                                manejar presión y actuar con responsabilidad;
                                habilidades forjadas durante mis 7 años de servicio militar. Desde mi inmersión en la tecnología y programación,
                                anhelo aplicar mis conocimientos y aptitudes en este campo con determinación.
                                <br />
                                <br />
                                Mi enfoque principal es unirme a un equipo de desarrollo tecnológico que ofrezca
                                la oportunidad de aprender y expandir mis habilidades en este sector. Busco un entorno donde
                                la creatividad sea valorada y donde se fomente la capacidad de adaptarse a diversos desafíos.
                                Esto me permitirá continuar avanzando constantemente en mi carrera.
                                <br />
                                <br />
                                Desde el inicio de mi formación, he participado en proyectos tanto individuales como en equipo,
                                proporcionándome una valiosa experiencia en el desarrollo front-end. He trabajado con tecnologías
                                como CSS, HTML, Bootstrap, React, Vue, Tailwind y SASS. Además, he explorado el ámbito del desarrollo
                                back-end, utilizando JavaScript, Firebase, Node.js, MongoDB y Express.js.
                                Mi participación en un entorno de trabajo basado en Scrum ha contribuido significativamente al
                                fortalecimiento de mis habilidades en trabajo en equipo, resolución de problemas y gestión efectiva
                                del tiempo. Estoy preparado para enfrentar desafíos de manera colaborativa y utilizar mis habilidades
                                técnicas para contribuir al éxito de proyectos innovadores.
                                <br />

                            </div>
                        </Col>
                        <Col md={6} className="imgContainer order-2 order-md-2 ">
                            <Col sm={12} className='mt-4'>

                                <div className='AritcleImg'>
                                    <img src="../../../public/me.jpg" alt="" />
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
