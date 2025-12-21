import api from './axios';

export const uploadEvidence = (data) => api.post('/evidence', data);
export const getMyEvidence = () => api.get('/evidence');
export const getEvidenceById = (id) => api.get(`/evidence/${id}`);
export const deleteEvidence = (id) => api.delete(`/evidence/${id}`);
export const updateEvidence = (id, data) => api.put(`/evidence/${id}`, data);
