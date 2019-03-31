import { Controller, Get, Next } from '@nestjs/common';
import { QuoteService } from '../services/quote/quote.service';
import { ImageService } from '../services/image/image.service';
import { Quote } from '../classes/quote';
import { Response } from '../classes/response';

@Controller('quote')
export class QuoteController {

    constructor(
        private quoteService: QuoteService,
        private imageService: ImageService,
    ) {

    }

    @Get()
    async root(): Promise< Response > {
        const response = await this.quoteService.getQuote();
        // console.log(response);
        // const response2 = await this.imageService.getImage(response[0].quote);
        const images = await this.root2(response[0].quote);
        const fullResponse: Response = {
            Quote: response[0].quote,
            Image: images[0],
        };
        return fullResponse;
    }

    @Get('image')
    async root2(image: string): Promise< any > {
        // const response = await this.quoteService.getQuote();
        // console.log(response);
        // try {
        const response2 = await this.imageService.getImage(image);
        /*} catch (error) {
            console.error(error);
        }*/
        // console.log(response2);
        // return encodeURIComponent(image);
        return response2;
    }
}
