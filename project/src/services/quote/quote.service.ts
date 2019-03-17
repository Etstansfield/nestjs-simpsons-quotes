import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Quote } from '../../classes/quote';

@Injectable()
export class QuoteService {

    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://thesimpsonsquoteapi.glitch.me/quotes',
            params: {
            },
          });
    }

    async getQuote(): Promise<Quote[]> {
        const response = await this.client.get('');
        return response.data;
    }
}
