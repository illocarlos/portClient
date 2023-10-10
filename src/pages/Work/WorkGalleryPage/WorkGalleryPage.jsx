import { useEffect, useState } from 'react'
import './EventGalleryPage.css'
import workService from '../../../service/work.service'
import WorkList from '../../../components/WorkComponents/WorkList/WorkList'

const WorkGalleryPage = () => {

  const [works, setWork] = useState([])

  useEffect(() => {
    loadWorks()
  }, [])

  const loadWorks = () => {

    workService
      .getWorks()
      .then(({ data }) => setWork(data))
      .catch((err) => console.log(err));
  }



  return (
    <>

      <div className='backgroungImg'>
        <div className='romRotate'></div>
        <h1>PROYECTOS</h1>
        <h3>PROYECTOS</h3>
      </div>

      <WorkList works={works} />



    </>
  )

}

export default WorkGalleryPage;
