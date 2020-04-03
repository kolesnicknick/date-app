import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly config: ConfigService) {
    const mongooseConnectionStr: string = this.config.get<string>('MONGODB_WRITE_CONNECTION_STRING');

    console.log('!!!MONGO DB CONNECTION STR: ' + mongooseConnectionStr);
  }
}
