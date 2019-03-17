import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteController } from './quote/quote.controller';
import { QuoteService } from './services/quote/quote.service';
import { ImageService } from './services/image/image.service';

@Module({
  imports: [],
  controllers: [AppController, QuoteController],
  providers: [AppService, QuoteService, ImageService],
})
export class AppModule {}
