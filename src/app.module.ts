import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsService } from './songs/songs.service';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { LoggingService } from './service/logging.service';
import { TransientService } from './service/transient.service';
import { RequestScopeService } from './service/request-scope.service';

@Module({
  imports: [SongsModule],
  controllers: [AppController, SongsController],
  providers: [AppService, SongsService,LoggingService,TransientService,RequestScopeService],
})
export class AppModule {}
