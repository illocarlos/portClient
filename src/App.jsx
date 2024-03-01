import './App.css'
import UserMessage from '../src/components/UserMessage/UserMessage'
import PortFol from './pages/Portfol/Portfol'
import WorkGalleryPage from './pages/Work/WorkGalleryPage/WorkGalleryPage'
import Footer from './pages/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import SkillPage from './pages/Skill/SkillPage'



function App() {


  return (

    <div className='App'>

      <PortFol />
      <SkillPage />
      <WorkGalleryPage />
      <AppRoutes />
      <UserMessage />
      <Footer />


    </div>

  )
}

export default App
