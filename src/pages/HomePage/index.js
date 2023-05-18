import { useEffect, useState } from 'react';
import NavBar from '../../componentes/NavBar/index';
import Paginate from '../../componentes/Pagination/index';
import api from '../../services/api';
import './style.css';
import useGlobalContext from '../../hooks/useGlobalContext';

function Home() {
    const { products, setProducts } = useGlobalContext()
    const [search, setSearch] = useState([])

    async function handleGetProducts() {
        try {

            const response = await api.get('/produtos', {});
            setProducts([...response.data])

        } catch (error) {
            const erro = error.response.data.mensagem
            return alert(erro)
        }
    }

    const searchProducts = search.length > 0 ? products.filter(product =>
        product.titulo.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : []

    useEffect(() => {
        handleGetProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <NavBar
                search={search}
                setSearch={setSearch}
            />

            <Paginate
                data={products}
                search={search}
                searchProducts={searchProducts}
            />

        </>

    );
}

export default Home;
