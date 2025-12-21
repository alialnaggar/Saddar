import api from './axios';

export const createOrder = (data) => api.post('/orders', data);
export const getMyOrders = () => api.get('/orders');
export const updateOrderStatus = (id, status) => api.put(`/orders/${id}`, { status });
export const getOrderById = (id) => api.get(`/orders/${id}`);
export const deleteOrder = (id) => api.delete(`/orders/${id}`);
