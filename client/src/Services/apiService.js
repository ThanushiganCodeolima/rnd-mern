import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1'; // Default URL in case environment variable is missing

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// TODO : Add Pagination
export const fetchProducts = () => apiClient.get('/products');
export const fetchProductById = (id) => apiClient.get(`/products/${id}`);
// TODO : Product -> Create, Update, Delete