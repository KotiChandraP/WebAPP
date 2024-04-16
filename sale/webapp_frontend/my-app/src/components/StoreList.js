import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreList = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios.get('/api/stores/')
            .then(response => {
                setStores(response.data);
            })
            .catch(error => {
                console.error('Error fetching stores:', error);
            });
    }, []);

    return (
        <div>
            <h1>List of Stores</h1>
            <ul>
                {stores.map(store => (
                    <li key={store.id}>{store.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StoreList;