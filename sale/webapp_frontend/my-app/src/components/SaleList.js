import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SaleList = ({ storeId }) => {
    const [sales, setSales] = useState([]);
    const [totalSold, setTotalSold] = useState(0);
    const [distinctProductsSold, setDistinctProductsSold] = useState(0);

    useEffect(() => {
        // Fetch sales for the specified store
        axios.get(`/api/stores/${storeId}/sales/`)
            .then(response => {
                setSales(response.data);
            })
            .catch(error => {
                console.error('Error fetching sales:', error);
            });

        // Fetch totals from the endpoints
        axios.get(`/api/sales/statistics/`)
            .then(response => {
                setTotalSold(response.data.total_sold);
                setDistinctProductsSold(response.data.distinct_products_sold);
            })
            .catch(error => {
                console.error('Error fetching totals:', error);
            });
    }, [storeId]);

    return (
        <div>
            <h2>Sale List</h2>
            <p>Total amount sold: ${totalSold}</p>
            <p>Number of distinct products sold: {distinctProductsSold}</p>
            <ul>
                {sales.map(sale => (
                    <li key={sale.id}>Amount: ${sale.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default SaleList;
