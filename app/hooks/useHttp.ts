import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// TODO: Create backend and put backend url here
const BASE_URL = '';

type HTTPResponse<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useHttp<T,>() {
    const [response, setResponse] = useState<HTTPResponse<T>>({
        data: null,
        loading: false,
        error: null,
    })

    const sendRequest = useCallback(async (endpoint: string, config: AxiosRequestConfig = {}) => {
        setResponse({ data: null, loading: true, error: null})
        try {
            const res: AxiosResponse<T> = await axios({ ...config, url: `${BASE_URL}${endpoint}` });
            setResponse({ data: res.data, loading: false, error: null });
        } catch (err: Error | any) {
            setResponse({ data: null, loading: false, error: err.message });
        }
    }, [])

    return { ...response, sendRequest }
}
