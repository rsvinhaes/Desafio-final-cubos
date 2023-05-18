import { useState } from 'react';
import { useLocalStorage } from 'react-use';

function useGlobalContextProvider() {
    const [detailProduct, setDetailProduct] = useState('');
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [user, setUser, removeUser] = useLocalStorage('user', '');
    const [search, setSearch] = useState([])
    const [products, setProducts] = useState([])
    const [userProduct, setUserProduct] = useState([])


    return {
        detailProduct,
        setDetailProduct,
        user,
        setUser,
        removeUser,
        token,
        setToken,
        removeToken,
        search,
        setSearch,
        products,
        setProducts,
        userProduct,
        setUserProduct
    }
}

export default useGlobalContextProvider;