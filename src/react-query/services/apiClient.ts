import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

class APIclient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = () => {
        return axiosInstance.get<T[]>(this.endpoint).then(res => res.data);
    }

    post = (todo: T) => {
        return axiosInstance.post<T>(this.endpoint, todo)
        .then(res => res.data)
    }
}

export default APIclient;