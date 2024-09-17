import axios, {AxiosInstance} from "axios";
import { httpAdapter } from "./http.adapter";


interface Options{
    baseUrl: string;
    params: Record<string, string>;
}

export class AxiosAdapter implements httpAdapter{

    private axiosInstance: AxiosInstance;

    // Ayuda a no tener que poner opciones todas las peticiones
    // Como el idioma, Region etc
    constructor(options: Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        })
    }



    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            
            const {data} = await this.axiosInstance.get(url, options);
            return data;

        } catch (error) {
        throw new Error(`Error fetching get: ${url}`);
            
        }
    }
}