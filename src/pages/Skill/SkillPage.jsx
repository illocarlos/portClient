import { useState, useEffect } from 'react';
import './SkillPage.css';
import skillsData from "../../json/Skill.json"
import { Col, Container, Row } from 'react-bootstrap';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const SkillPage = () => {
    const [isScrolledMobileSkill, setIsScrolledMobileSkill] = useState(false)
    const [isScrolledLaptopSkill, setIsScrolledLaptopSkill] = useState(false)
    const [isShowItem, setIsShowItem] = useState(false)
    const [isShowItemMobile, setIsShowItemMobile] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {

        if (latest > 1000) {
            setIsShowItemMobile(true)
        } else {
            setIsShowItemMobile(false)
        }
        if (latest > 1550) {
            setIsShowItem(true)
        } else {
            setIsShowItem(false)

        }
    })

    useEffect(() => {
        const handleScrollSkill = () => {
            let scrollPosition = window.scrollY;
            let scrollPositionLaptop = window.scrollY;

            if (scrollPosition > 1550) {
                setIsScrolledMobileSkill(true);
            } else if (scrollPositionLaptop > 600) {
                setIsScrolledLaptopSkill(true);
            } else {
                setIsScrolledLaptopSkill(false);
                setIsScrolledMobileSkill(false);
            }
        };


        window.addEventListener('scroll', handleScrollSkill);

        // Llama a la función handleScrollSkillItems cada vez que se detecte un desplazamiento

        // Limpia los event listeners en el cleanup de useEffect
        return () => {
            window.removeEventListener('scroll', handleScrollSkill);
        };
    }, [isScrolledMobileSkill, isScrolledLaptopSkill, setIsScrolledMobileSkill, setIsScrolledLaptopSkill]);

    return (
        <>
            <div className='backgroungImgSkill'>
                <div className={` ${!isScrolledMobileSkill ? 'romRotateSkill' : 'scrolled'}`} ></div>
                <h1 className={` ${!isScrolledMobileSkill ? 'romRotateSkillh1' : 'scrolledh1'}`}>TECNOLOGIAS</h1>
                <h3 className={` ${!isScrolledMobileSkill ? 'romRotateSkillh3' : 'scrolledh3'}`} >TECNOLOGIAS</h3>
            </div>
            <div className='backgroungImgSkillLapto '>
                <div className={` ${!isScrolledLaptopSkill ? 'romRotateProyect' : 'scrolled'}`} ></div>
                <h1 className={` ${!isScrolledLaptopSkill ? 'romRotateSkillhProyect1' : 'scrolledh1'}`}  >TECNOLOGIAS</h1>
                <h3 className={` ${!isScrolledLaptopSkill ? 'romRotateSkillProyecth3' : 'scrolledh3'}`} >TECNOLOGIAS</h3>
            </div>

            {/* Para PC */}
            <Row className="d-block d-md-none">
                <Col sm={12} md={10} lg={9} className="mx-auto">
                    <Row className=' d-flex align-items-center justify-content-center'>

                        {
                            skillsData.map((skill, index) => (
                                <div key={index} className="skillsCard">
                                    <motion.div
                                        animate={isShowItem ? { opacity: 1, scale: 1, duration: index } : { opacity: 0, scale: 0, duration: index }}
                                    >
                                        <Row>


                                            <Col sm={12} md={12} lg={11} className='d-flex align-items-center justify-content-center'>
                                                <img className="skillsImages" src={`/assets/Icons/${skill.logoImage}`} alt={skill.name} />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </div>
                            ))
                        }
                    </Row>
                </Col >
            </Row >

            {/* PARA MOBILE */}
            <Row className="d-none d-md-block" >
                <Col sm={12} md={10} lg={9} className="mx-auto">
                    <Row className=' d-flex align-items-center justify-content-center'>

                        {
                            skillsData.map((skill, index) => (
                                <div key={index} className="skillsCard">
                                    <motion.div
                                        animate={isShowItemMobile ? { opacity: 1, scale: 1, duration: index } : { opacity: 0, scale: 0, duration: index }}
                                    >
                                        <Row>


                                            <Col sm={12} md={12} lg={11} className='d-flex align-items-center justify-content-center'>
                                                <img className="skillsImages" src={`/assets/Icons/${skill.logoImage}`} alt={skill.name} />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </div>
                            ))
                        }
                    </Row>
                </Col >
            </Row >
        </>
    )
}

export default SkillPage;
