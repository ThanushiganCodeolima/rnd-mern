import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// TODO : Add Pagination
export const fetchProducts = () => apiClient.get('/products');
export const fetchProductById = (id) => apiClient.get(`/products/${id}`);
export const createProducts = (name,price,desc) => apiClient.post(`/products`, {name,price,desc});
// TODO : Product -> Create, Update, Delete