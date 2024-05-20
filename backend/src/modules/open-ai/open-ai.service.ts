import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import OpenAIApi from 'openai';
import { ChatCompletion, ChatCompletionMessageParam } from 'openai/resources';

import { LoggingService } from '../logging/logging.service';
import { RequestTipDto } from './dto/request-tip.dto';

@Injectable()
export class OpenAiService {
  public openai: OpenAIApi;
  public maxToken: number;

  constructor(private readonly loggingService: LoggingService) {
    this.openai = new OpenAIApi({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.maxToken = 150;
  }

  async chatGptRequest(requestTip: RequestTipDto) {
    const { prompt, messages } = requestTip;
    try {
      const history = messages.map(
        (message): ChatCompletionMessageParam => ({
          role: message.ai ? 'assistant' : 'user',
          content: message.text,
        }),
      );

      const completion: ChatCompletion =
        await this.openai.chat.completions.create({
          model: 'gpt-3.5-turbo-16k-0613',
          messages: [
            {
              role: 'system',
              content: prompt,
            },
            ...history,
          ],
          temperature: 0.5,
          max_tokens: this.maxToken,
        });

      const [content] = completion.choices.map(
        (choice) => choice.message.content,
      );

      this.loggingService.logInteraction(prompt, content);

      return content;
    } catch (e) {
      this.loggingService.logError(prompt, e);
      throw new ServiceUnavailableException(
        'Sorry, something went wrong. Please try again later',
      );
    }
  }
}
