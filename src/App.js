import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';

import {Products, Navbar } from './components';
const App = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState({});

// fetching products
    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }
// fetching cart
    const fetchCart = async () => {
       setCart(await commerce.cart.retrieve()); 
    }

// function for add product to cart
const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);

}

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    console.log(cart);
    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
           <Products products={products} onAddToCart={handleAddToCart}/>

        </div>
    )
}

export default App
