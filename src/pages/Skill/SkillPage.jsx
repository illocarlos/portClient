import { useState, useEffect } from 'react';
import './SkillPage.css';
import skillsData from "../../json/Skill.json"
import { Col, Row } from 'react-bootstrap';

const SkillPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 2000) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener en el cleanup de useEffect
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Solo se ejecuta al montar/desmontar el componente

    return (
        <>
            <div className='backgroungImgSkill'>
                <div className={` ${isScrolled ? 'romRotateSkill' : 'scrolled'}`} ></div>
                <h1 className={` ${isScrolled ? 'romRotateSkillh1' : 'scrolledh1'}`}  >SKILL</h1>
                <h3 className={` ${isScrolled ? 'romRotateSkillh3' : 'scrolledh3'}`} >SKILL</h3>
            </div>

            {/* //aqui van los svg */}

            <Row>
                <Col sm={12} md={10} lg={9} className="mx-auto">
                    <Row className=' d-flex align-items-center justify-content-center'>

                        {
                            skillsData.map(skill => (

                                <div key={skill.id} className="skillsCard" >
                                    <Row>
                                        < Col sm={12} md={12} lg={11} className='d-flex  align-items-center justify-content-center'>
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
