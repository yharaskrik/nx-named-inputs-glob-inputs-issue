import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationShutdown,
  OnModuleDestroy,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule
  implements OnModuleDestroy, OnApplicationShutdown, BeforeApplicationShutdown
{
  beforeApplicationShutdown(signal?: string): void {
    console.log(`Before shutdown`, signal);
  }

  onApplicationShutdown(signal?: string): void {
    console.log('On shutdown', signal);
  }

  onModuleDestroy(): void {
    console.log('Module destroy');
  }
}
