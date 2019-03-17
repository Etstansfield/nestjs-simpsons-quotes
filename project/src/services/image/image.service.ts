import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ImageService {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://frinkiac.com/api/search',
            params: {
                q: 'CHANGE_ME',
            },
          });
    }

    async getImage(quote: string): Promise<any> {
        const response = await this.client.get(quote, {
            params: { q: quote },
        });
        return response.data;
    }
}
