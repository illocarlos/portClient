import './App.css'
import AppRoutes from './routes/AppRoutes'
import UserMessage from '../src/components/UserMessage/UserMessage'
import Index from './pages/Index/Index'
import PortFol from './pages/Portfol/Portfol'
import WorkGalleryPage from './pages/Work/WorkGalleryPage/WorkGalleryPage'




function App() {


  return (

    <div className='App'>
      <div className='navIndex'>
        <Index />
      </div>
      <div className='PortFol'>
        <PortFol />
      </div>
      <WorkGalleryPage />
      <UserMessage />
      <AppRoutes />

    </div>

  )
}

export default App
