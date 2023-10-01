import './AboutMe.css'
import me from '../../../public/me.jpg'
const AboutMe = () => {

    return (
        <article className='AboutMe'>
            <div className='articleAboutMe'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus nobis vitae iste neque aperiam ipsum facilis officiis deserunt voluptatem.
                Magnam alias quae excepturi, error repellendus saepe voluptatem consequatur asperiores
                qui.
            </div>

            <div className='AritcleImg'>
                <img src={me} alt="" />
            </div>

        </article>
    )



}
export default AboutMe
