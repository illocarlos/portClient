import { useEffect, useState } from 'react'
import './EventGalleryPage.css'
import workService from '../../../service/work.service'
import WorkList from '../../../components/WorkComponents/WorkList/WorkList'
import Loader from '../../../components/Loader/Loader'

const WorkGalleryPage = () => {
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(true)

  const [isScrolledMobile, setIsScrolledMobile] = useState(false)
  const [isScrolledLaptop, setIsScrolledLaptop] = useState(false)

  useEffect(() => {
    loadWorks()

    const handleScroll = () => {
      let scrollPositionWork = window.scrollY
      let scrollPositionWorklapto = window.scrollY
      // Determinar si es un dispositivo móvil o portátil basado en el scroll
      if (scrollPositionWork > 2500) {
        setIsScrolledMobile(false)
      } else if (scrollPositionWorklapto < 1200) {
        setIsScrolledLaptop(true)
      } else {

        setIsScrolledMobile(true)
        setIsScrolledLaptop(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    // Limpiar el event listener en el cleanup de useEffect
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const loadWorks = () => {
    workService
      .getWorks()
      .then(({ data }) => {
        setWorks(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(true)
      })
  }

  return (
    <>
      <div className='backgroungImgWork '>
        <div className={` ${isScrolledMobile ? 'romRotateProyect' : 'scrolledProyect'}`} ></div>
        <h1 className={` ${isScrolledMobile ? 'romRotateSkillhProyect1' : 'scrolledProyecth1'}`}  >PROYECTOS</h1>
        <h3 className={` ${isScrolledMobile ? 'romRotateSkillProyecth3' : 'scrolledProyecth3'}`} >PROYECTOS</h3>
      </div>

      <div className='backgroungImgWorkLapto '>
        <div className={` ${isScrolledLaptop ? 'romRotateProyect' : 'scrolledProyect'}`} ></div>
        <h1 className={` ${isScrolledLaptop ? 'romRotateSkillhProyect1' : 'scrolledProyecth1'}`}  >PROYECTOS</h1>
        <h3 className={` ${isScrolledLaptop ? 'romRotateSkillProyecth3' : 'scrolledProyecth3'}`} >PROYECTOS</h3>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <WorkList works={works} />
      )}
    </>
  )
}

export default WorkGalleryPage;
