import { Routes, Route } from 'react-router-dom'
import Contact from '../components/Contact/Contact'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/Contact' element={<Contact />} />
            <Route path='*' element={<h1> NOTHING BUT YOU ARE INSIDE </h1>} />
        </Routes>
    )

}
export default AppRoutes