import './App.css'
import AppRoutes from './routes/AppRoutes'
import UserMessage from '../src/components/UserMessage/UserMessage'
import Index from './pages/Index/Index'
import PortFol from './pages/Portfol/Portfol'
import WorkGalleryPage from './pages/Work/WorkGalleryPage/WorkGalleryPage'
import Footer from './pages/footer/Footer'




function App() {


  return (

    <div className='App'>

      <Index />
      <PortFol />
      <WorkGalleryPage />
      <UserMessage />
      <Footer />
      <AppRoutes />

    </div>

  )
}

export default App
