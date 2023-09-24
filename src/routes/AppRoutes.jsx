import { Routes, Route } from 'react-router-dom'
import FormContactPage from '../pages/FormContactPage/FormContactPage'
import Index from '../components/Navigation/Navigation'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Contact' element={<FormContactPage />} />
            <Route path='*' element={<h1> NOTHING BUT YOU ARE INSIDE </h1>} />
        </Routes>
    )

}
export default AppRoutes