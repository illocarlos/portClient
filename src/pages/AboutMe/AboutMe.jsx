
import './AboutMe.css'
import { Container, Row, Col } from 'react-bootstrap'
import me from '../../../public/me.jpg'
import { TranslateContext } from '../../contexts/translate.context'
import { useContext } from 'react'
import LiquidEther from '../../components/LiquidEther/LiquidEther';
const AboutMe = () => {

    const { isTranslate } = useContext(TranslateContext)

    return (
        <>
            <article className='PortFol' >




                <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                    <LiquidEther
                        colors={["#ea9090", "#b7491a", "#df2020"]}
                        mouseForce={100}
                        cursorSize={300}
                        isViscous={true}
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.5}
                        isBounce={false}
                        autoDemo={true}
                        autoSpeed={0.9}
                        autoIntensity={3.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={500}
                        autoRampDuration={0.2}
                    />
                </div>




                <Container>



                    <Row className=" d-flex justify-content-center">
                        <Col md={6} className="order-1 order-md-1">

                            <div className='articleAboutMe'>

                                {isTranslate ?


                                    <article>
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
                                    </article>
                                    :
                                    <article>

                                        As a web developer, I excel in problem-solving, handling pressure, and acting responsibly; skills honed during my 7 years of military service. Since immersing myself in technology and programming, I aspire to apply my knowledge and abilities in this field with determination.
                                        <br />
                                        <br />
                                        My primary focus is to join a technological development team that offers the opportunity to learn and expand my skills in this sector. I seek an environment where creativity is valued and where the ability to adapt to various challenges is encouraged. This will allow me to continue advancing steadily in my career.
                                        <br />
                                        <br />
                                        Since the beginning of my training, I have participated in both individual and team projects, providing me with valuable experience in front-end development. I have worked with technologies such as CSS, HTML, Bootstrap, React, Vue, Tailwind, and SASS. Additionally, I have explored the realm of back-end development, using JavaScript, Firebase, Node.js, MongoDB, and Express.js.
                                        <br />
                                        <br />
                                        My involvement in a Scrum-based work environment has significantly contributed to strengthening my skills in teamwork, problem-solving, and effective time management. I am prepared to face challenges collaboratively and utilize my technical skills to contribute to the success of innovative projects.
                                    </article>
                                }

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
