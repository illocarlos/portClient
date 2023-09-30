import './App.css'
import AppRoutes from './routes/AppRoutes'
import UserMessage from '../src/components/UserMessage/UserMessage'
import Index from './pages/Index/Index'





function App() {


  return (

    <div className='App'>
      <Index />
      <UserMessage />
      <AppRoutes />

    </div>

  )
}

export default App
