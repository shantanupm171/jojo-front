const { default: axios } = require("axios");

const apiKey=process.env.NEXT_PUBLIC_REST_API_KEY

const apiUrl="http://localhost:8000";

const axiosClient = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
})

const getLatestProduct=()=> axiosClient.get('/products?populate=*');
const getProductById=(id)=>axiosClient.get('product/'+id+'?populate=*')

export default{
    getLatestProduct,
    getProductById
}
