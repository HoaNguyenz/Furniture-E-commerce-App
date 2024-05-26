import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async ()=>{
        setIsLoading(true)

        try{
            const response = await axios.get('http://192.168.43.218:8081/api/products/');
            setData(response.data)
            setIsLoading(false)
        }
        catch(error){
            setError(error)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, []);

    const refetch = ()=>{
        setIsLoading(true)
        fetchData();
    }
  return {data, isLoading, error, refetch}
}

export default useFetch;