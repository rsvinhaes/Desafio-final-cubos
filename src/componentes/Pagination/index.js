import { Box, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../../componentes/ProductCard/index';
import { useStyles } from './style';
import './style.css';

export default function Paginate(props) {

    const classes = useStyles();

    const { data, search, searchProducts } = props
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, data])


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Container maxWidth='xl' className={classes.containerHome}>
                <Grid container my={4} spacing={2} >
                    <Grid item xs={12}>
                        <Box className={classes.containerCard}  >
                            {search.length > 0 ?
                                searchProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        item={product}
                                    />
                                )) : currentItems.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        item={product}
                                    />))}

                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Próximo >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel="< Anterior"
                            renderOnZeroPageCount={null}
                            containerClassName='pagination'
                            pageLinkClassName='page-num'
                            previousLinkClassName='page-num'
                            nextLinkClassName='page-num'
                            activeLinkClassName='active'
                        />
                    </Grid>
                </Grid>
            </Container>

        </>
    );
}