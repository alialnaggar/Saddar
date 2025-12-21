import api from './axios';

export const getAllExporters = () => api.get('/users?role=exporter&sort=-trustScore');
export const getUsers = (role) => api.get(role ? `/users?role=${role}` : '/users');
export const getUserProfile = (id) => api.get(`/users/${id}`);
export const updateProfile = (id, data) => api.put(`/users/${id}`, data);
export const createUser = (data) => api.post('/users', data);
export const deleteUser = (id) => api.delete(`/users/${id}`);
