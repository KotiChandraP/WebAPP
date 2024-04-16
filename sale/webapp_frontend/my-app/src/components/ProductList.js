import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ storeId }) => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');

  useEffect(() => {
    // Fetch products for the specified store
    axios.get(`/api/stores/${storeId}/products/`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [storeId]);

  const handleAddProduct = () => {
    // Send a POST request to create a new product for the store
    axios.post(`/api/stores/${storeId}/products/`, { name: newProductName })
      .then(response => {
        setProducts([...products, response.data]);
        setNewProductName('');
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newProductName}
        onChange={e => setNewProductName(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductList;
