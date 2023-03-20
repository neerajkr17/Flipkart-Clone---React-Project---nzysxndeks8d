
import React,{useState, useEffect} from 'react'
import axios from 'axios';

const apiUrl = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;

const ProductData = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const result = await axios.get(apiUrl);
            setProductData(result.data);
        }
        fetchData();
    }, []);
  
}

export default ProductData;