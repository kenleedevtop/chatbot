import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OpenAiModule } from './modules/open-ai/open-ai.module';
import { LoggingService } from './modules/logging/logging.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    OpenAiModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggingService],
})
export class AppModule {}
