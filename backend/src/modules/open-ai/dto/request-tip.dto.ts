import { IsArray, IsBoolean, IsString } from 'class-validator';

export class RequestTipDto {
  @IsString()
  prompt: string;

  @IsArray()
  messages?: MessageDto[];
}

export class MessageDto {
  @IsBoolean()
  ai: boolean;

  @IsString()
  text: string;
}
