import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// Commit automático 1
// Commit automático 2
// feat: Removed unused imports
// feat: Updated log messages for debugging