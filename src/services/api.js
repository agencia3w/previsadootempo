import axios from 'axios';

export const key = ''; //Gerar chave em https://hgbrasil.com

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;