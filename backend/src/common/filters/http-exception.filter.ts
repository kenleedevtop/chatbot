import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('HttpException');
  private logErrorPath = path.join(__dirname, '../..', 'error.log');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    const errorRes = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    };

    const logMessage = `User Input: ${JSON.stringify(request.body)}, Error: ${JSON.stringify(errorRes)}`;
    this.logger.log(logMessage);
    fs.appendFile(this.logErrorPath, `${logMessage}\n`, (err) => {
      if (err) {
        this.logger.error('Failed to write to log file', err.stack);
      }
    });
    response.status(status).json(errorRes);
  }
}
