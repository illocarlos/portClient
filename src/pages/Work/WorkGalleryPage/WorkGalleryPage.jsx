import { useEffect, useState } from 'react'
import './EventGalleryPage.css'
import workService from '../../../service/work.service'
import WorkList from '../../../components/WorkComponents/WorkList/WorkList'
import Loader from '../../../components/Loader/Loader'

const WorkGalleryPage = () => {
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    loadWorks()
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 600) {
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
      <div className='backgroungImgWork'>
        <div className={` ${isScrolled ? 'romRotateProyect' : 'scrolledProyect'}`} ></div>
        <h1 className={` ${isScrolled ? 'romRotateSkillhProyect1' : 'scrolledProyecth1'}`}  >PROYECTOS</h1>
        <h3 className={` ${isScrolled ? 'romRotateSkillProyecth3' : 'scrolledProyecth3'}`} >PROYECTOS</h3>
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
