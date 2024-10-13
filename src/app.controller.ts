import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { LoggingService } from './service/logging.service';
import { TransientService } from './service/transient.service';
import { RequestScopeService } from './service/request-scope.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly loggingService:LoggingService,
    private readonly transientService:TransientService,
    private readonly requestScope:RequestScopeService,
  
  ) {}

  @Get('singleton')
   getSingleton(){ 
 this.loggingService.log('logger singleton read')
 
 return {id:this.loggingService.getId(),scope:'Singleton'}

  }
  @Get('request')
  getRequestScoped() {
    this.requestScope.log('Called Request Scoped Service');
    return { id: this.requestScope.getId(), scope: 'Request' };
  }

  @Get('transient')
  getTransient() {
    this.transientService
    .log('Called Transient Service');
    return { id: this.transientService.getId(), scope: 'Transient' };
  }

}
