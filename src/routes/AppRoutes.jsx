import { Routes, Route } from 'react-router-dom'
import FormContactPage from '../pages/FormContactPage/FormContactPage'
import SignupPage from '../pages/Auth/SignupPage/SignupPage'
import LoginPage from '../pages/Auth/LoginPage/LoginPage'
import PrivateRoute from './PrivateRoutes'
import NewWorkPage from '../pages/Work/NewWorkPage/NewWorkPage'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' />
            <Route path='/Contact' element={<FormContactPage />} />
            <Route path={"/auth/login"} element={<LoginPage />} />


            <Route element={<PrivateRoute />}>
                <Route path='/NewWorkForm' element={<NewWorkPage />} />
                <Route path={"/work/delete/:work_id"} />
                <Route path={"/work/edit/:work_id"} element={<p>"/work/edit/:work_id"</p>} />
                <Route path={"/work/newWork"} element={<p>"/work/newWork"</p>} />
                <Route path={"/user/:user_id"} element={<p>"/user/:user_id"</p>} />
                <Route path={"/user/edit/:user_id"} element={<p>"/user/edit/:user_id"</p>} />
                <Route path={"/auth/signup"} element={<SignupPage />} />
            </Route>
            <Route path='*' element={<h1> NOTHING BUT YOU ARE INSIDE </h1>} />
        </Routes>
    )

}
export default AppRoutes