import { useEffect, useState } from 'react'
import './EventGalleryPage.css'
import { Container } from 'react-bootstrap'
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
      <Container>
        <div className='d-flex justify-content-between' >
          <h1>WORK</h1>

        </div>
        <hr />
        <WorkList works={works} />

      </Container>

    </>
  )

}

export default WorkGalleryPage;
