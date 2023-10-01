import './App.css'
import AppRoutes from './routes/AppRoutes'
import UserMessage from '../src/components/UserMessage/UserMessage'
import Index from './pages/Index/Index'
import PortFol from './pages/Portfol/Portfol'




function App() {


  return (

    <div className='App'>
      <Index />
      <PortFol />
      <UserMessage />
      <AppRoutes />

    </div>

  )
}

export default App
