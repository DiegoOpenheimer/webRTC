import { ReceiverController } from './controller/receiver.controller';
import { SenderController } from './controller/sender.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, SenderController, ReceiverController],
  providers: [AppService],
})
export class AppModule {}
