import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { RequestTipDto } from './dto/request-tip.dto';
import { ValidationError } from 'class-validator';

@Controller('open-ai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post()
  chatGptRequest(@Body() requestTip: RequestTipDto) {
    try {
      return this.openAiService.chatGptRequest(requestTip);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new BadRequestException('Validation failed');
      }
      throw error;
    }
  }
}
