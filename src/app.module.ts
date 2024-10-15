import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingService } from './service/logging.service';
import { TransientService } from './service/transient.service';
import { RequestScopeService } from './service/request-scope.service';
import { ChatGateway } from './chat/chat-gatway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,LoggingService,TransientService,RequestScopeService,ChatGateway
  
  ],
})
export class AppModule {}
