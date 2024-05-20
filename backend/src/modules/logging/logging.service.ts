import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggingService {
  private readonly logger = new Logger(LoggingService.name);
  private logFilePath = path.join(__dirname, '../..', 'chatbot.log');
  private logErrorPath = path.join(__dirname, '../..', 'error.log');

  logInteraction(userInput: string, response: string): void {
    const logMessage = `User Input: ${userInput}, Response: ${response}`;
    this.logger.log(logMessage);
    fs.appendFile(this.logFilePath, `${logMessage}\n`, (err) => {
      if (err) {
        this.logger.error('Failed to write to log file', err.stack);
      }
    });
  }

  logError(userInput: string, error: string): void {
    const logMessage = `User Input: ${userInput}, Error: ${error}, Time: ${new Date().toISOString()}`;
    this.logger.log(logMessage);
    fs.appendFile(this.logErrorPath, `${logMessage}\n`, (err) => {
      if (err) {
        this.logger.error('Failed to write to log file', err.stack);
      }
    });
  }
}
