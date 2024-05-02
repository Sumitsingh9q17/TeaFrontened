import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const addProduct = async () => {
        try {
            await axios.post('/api/products', newProduct);
            setNewProduct({ name: '', price: '', description: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`/api/products/${productId}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <h3>Add New Product</h3>
            <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} />
            <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
            <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} />
            <button onClick={addProduct}>Add Product</button>

            <h3>Product List</h3>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - {product.price} - {product.description}
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminPanel;
