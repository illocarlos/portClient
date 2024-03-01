import { useState, useEffect } from 'react';
import './SkillPage.css';
import skillsData from "../../json/Skill.json"
import { Col, Row } from 'react-bootstrap';

const SkillPage = () => {
    const [isScrolledMobileSkill, setIsScrolledMobileSkill] = useState(false)
    const [isScrolledLaptopSkill, setIsScrolledLaptopSkill] = useState(false)
    useEffect(() => {
        const handleScrollSkill = () => {
            let scrollPosition = window.scrollY;
            let scrollPositionLapto = window.scrollY;

            if (scrollPosition > 1200) {
                return setIsScrolledMobileSkill(true)
            } else if (scrollPositionLapto > 500) {
                return setIsScrolledLaptopSkill(true)
            }
            else {
                setIsScrolledLaptopSkill(false)
                setIsScrolledMobileSkill(false)

            }



        };

        window.addEventListener('scroll', handleScrollSkill);

        // Limpiar el event listener en el cleanup de useEffect
        return () => {
            window.removeEventListener('scroll', handleScrollSkill);
        };
    }, []); // Solo se ejecuta al montar/desmontar el componente

    return (
        <>
            <div className='backgroungImgSkill'>
                <div className={` ${!isScrolledMobileSkill ? 'romRotateSkill' : 'scrolled'}`} ></div>
                <h1 className={` ${!isScrolledMobileSkill ? 'romRotateSkillh1' : 'scrolledh1'}`}  >SKILL</h1>
                <h3 className={` ${!isScrolledMobileSkill ? 'romRotateSkillh3' : 'scrolledh3'}`} >SKILL</h3>
            </div>
            <div className='backgroungImgSkillLapto '>
                <div className={` ${!isScrolledLaptopSkill ? 'romRotateProyect' : 'scrolledProyect'}`} ></div>
                <h1 className={` ${!isScrolledLaptopSkill ? 'romRotateSkillhProyect1' : 'scrolledProyecth1'}`}  >SKILL</h1>
                <h3 className={` ${!isScrolledLaptopSkill ? 'romRotateSkillProyecth3' : 'scrolledProyecth3'}`} >SKILL</h3>
            </div>
            {/* //aqui van los svg */}

            <Row>
                <Col sm={12} md={10} lg={9} className="mx-auto">
                    <Row className=' d-flex align-items-center justify-content-center'>

                        {
                            skillsData.map((skill, index) => (
                                <div key={index} className="skillsCard">
                                    <Row>
                                        <Col sm={12} md={12} lg={11} className='d-flex align-items-center justify-content-center'>
                                            <img className="skillsImages" src={`/assets/Icons/${skill.logoImage}`} alt={skill.name} />
                                        </Col>
                                    </Row>
                                </div>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default SkillPage;
