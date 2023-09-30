import { Routes, Route } from 'react-router-dom'
import FormContactPage from '../pages/FormContactPage/FormContactPage'
import Index from '../pages/Index/Index'
import SignupPage from '../pages/Auth/SignupPage/SignupPage'
import LoginPage from '../pages/Auth/LoginPage/LoginPage'
import PrivateRoute from './PrivateRoutes'
import NewWorkPage from '../pages/Work/NewWorkPage/NewWorkPage'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' />
            <Route path='/Contact' element={<FormContactPage />} />
            <Route path='/NewWorkForm' element={<NewWorkPage />} />
            <Route path={"/auth/signup"} element={<SignupPage />} />
            <Route path={"/auth/login"} element={<LoginPage />} />
            <Route path={"/work/list"} element={<workGalleryPage />} />

            <Route element={<PrivateRoute />}>
                <Route path={"/work/delete/:work_id"} />
                <Route path={"/work/edit/:work_id"} element={<p>"/work/edit/:work_id"</p>} />
                <Route path={"/work/newWork"} element={<p>"/work/newWork"</p>} />
                <Route path={"/user/:user_id"} element={<p>"/user/:user_id"</p>} />
                <Route path={"/user/edit/:user_id"} element={<p>"/user/edit/:user_id"</p>} />
            </Route>
            <Route path='*' element={<h1> NOTHING BUT YOU ARE INSIDE </h1>} />
        </Routes>
    )

}
export default AppRoutes