import { useEffect, useState } from 'react'
import './EventGalleryPage.css'
import workService from '../../../service/work.service'
import WorkList from '../../../components/WorkComponents/WorkList/WorkList'
import Loader from '../../../components/Loader/Loader'

const WorkGalleryPage = () => {
  const [works, setWorks] = useState([])


  useEffect(() => {
    loadWorks()
  }, [])

  const loadWorks = () => {
    workService
      .getWorks()
      .then(({ data }) => {
        setWorks(data)

      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className='backgroungImg'>
        <div className='romRotate'></div>
        <h1>PROYECTOS</h1>
        <h3>PROYECTOS</h3>
      </div>

      {works.length === 0 ? (
        <Loader className='positionLoader' />
      ) : (
        <WorkList works={works} />
      )}
    </>
  )
}

export default WorkGalleryPage;
