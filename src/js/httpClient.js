import axios from 'https://cdn.jsdelivr.net/npm/axios@1.2.0/dist/esm/axios.min.js';

export const get = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export const post = async (url, data) => {
    const response = await axios.post(url, data);
    return response.data;
};

export const put = async (url, data) => {
    const response = await axios.put(url, data);
    return response.data;
};

export const remove = async (url) => {
    const response = await axios.delete(url);
    return response.data;
};