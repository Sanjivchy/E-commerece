import React from 'react';
import Grid from '@material-ui/core';

import Product from './product/Product'

const product =[
    {id:1, name:'shoes', description: 'Running shoes.', price:'$5'},
    {id:2, name:'t-shirt', description: 'male t-shirt.', price:'$10' },

]

const Product = () =>{
    <main>
        <Grid container justify="center" spacing={4}>
            {product.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <product product={product}/>
                </Grid>
            ))}

        </Grid>
    </main>

}

export default Product;