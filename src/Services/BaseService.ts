import axios from 'axios';

export class BaseService {

    public static async sendGetRequest(url: string) {
        const response = axios.get(url).then((value: any) => {
            console.log("Value at Get Request", value)
            return value.data;
        }).catch((error: any) => {
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
        });
        return response;
    }

    public static async sendPostRequest(url: string, data: any) {
        return await axios.post(url, data);
    }

    public static async sendPutRequest(url: string, data: any) {
        return await axios.put(url, data);
    }

    public static async sendDeleteRequest(url: string) {
        return await axios.delete(url);
    }
}