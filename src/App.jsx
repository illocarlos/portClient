import './App.css'
import UserMessage from '../src/components/UserMessage/UserMessage'
import Index from './pages/Index/Index'
import PortFol from './pages/Portfol/Portfol'
import WorkGalleryPage from './pages/Work/WorkGalleryPage/WorkGalleryPage'
import Footer from './pages/Footer/Footer'
import AppRoutes from './routes/AppRoutes'




function App() {


  return (

    <div className='App'>
      <Index />
      <PortFol />
      <WorkGalleryPage />
      <AppRoutes />
      <UserMessage />
      <Footer />


    </div>

  )
}

export default App
