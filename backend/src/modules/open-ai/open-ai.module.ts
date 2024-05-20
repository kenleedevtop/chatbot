import { Module } from '@nestjs/common';
import { OpenAiController } from './open-ai.controller';
import { OpenAiService } from './open-ai.service';
import { LoggingService } from '../logging/logging.service';

@Module({
  controllers: [OpenAiController],
  providers: [OpenAiService, LoggingService],
})
export class OpenAiModule {}
