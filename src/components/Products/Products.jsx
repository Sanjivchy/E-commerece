import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products =[
    {id:1, name:'shoes', description: 'Running shoes.', price:'$5', image: 'https://www.pasnormalstudios.com/shared/16/750/pas-normal-studios-logo-t-shirt-black_1180w.jpg'},
    {id:2, name:'t-shirt', description: 'male t-shirt.', price:'$10',image: 'https://www.pasnormalstudios.com/shared/16/750/pas-normal-studios-logo-t-shirt-black_1180w.jpg' },

]

const Products = () =>{
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}

            </Grid>
        </main>
    );

}

export default Products;