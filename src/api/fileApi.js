import axios from "axios";
const API_BASE_URL = 'http://localhost:8083/aws';

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${API_BASE_URL}/upload`, formData);
};

export const downloadFile=(id)=>{
    return axios.get(`${API_BASE_URL}/download/${id}`,{
        responseType:"blob",
    });
};

export const fetchFiles = () => {
  return axios.get(`${API_BASE_URL}/files`);
};