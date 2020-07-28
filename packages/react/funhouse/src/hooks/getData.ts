import { useState, useEffect, SetStateAction, Dispatch } from "react";
const axios = require("axios");

export const useAPI = (endpoint: string): [{ data: string[], isLoading: boolean, isError: boolean}, Dispatch<SetStateAction<string>>] => {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(
      endpoint
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
   
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
   
        try {
          const result = await axios(url);
   
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
   
        setIsLoading(false);
      };
   
      fetchData();
    }, [url]);
   
    return [{ data, isLoading, isError }, setUrl];
  }