import Main from './pages/Main'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct'
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import useGlobalContext from './hooks/useGlobalContext';



function ProtectedRoutes({ redirectTo }) {
    const { token } = useGlobalContext();

    return token ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {

    return (

        <Routes>
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/ProductDetail' element={<ProductDetail />} />
            <Route path='/AddProduct' element={<AddProduct />} />

            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/main' element={<Main />} />
            </Route>
        </ Routes>


    )
}

export default MainRoutes;