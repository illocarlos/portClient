import { Routes, Route } from 'react-router-dom'
import FormContactPage from '../pages/FormContactPage/FormContactPage'
import LoginPage from '../pages/Auth/LoginPage/LoginPage'
import PrivateRoute from './PrivateRoutes'
import NewWorkPage from '../pages/Work/NewWorkPage/NewWorkPage'
import DetailsWorkPage from '../pages/Work/DetailsWorkPage/DetailsWorkPage'




const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' />
            <Route path='/Contact' element={<FormContactPage />} />
            <Route path={"/auth/login"} element={<LoginPage />} />
            <Route path={"/work/:work_id"} element={<DetailsWorkPage />} />
            <Route element={<PrivateRoute />}>
                <Route path='/NewWorkForm' element={<NewWorkPage />} />
            </Route>
            <Route path='*' element={<h1> NOTHING BUT YOU ARE INSIDE </h1>} />
        </Routes>
    )

}
export default AppRoutes