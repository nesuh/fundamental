import { Controller, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
constructor(private readonly songservice:SongsService){}

@Post()
 create(){
return "hello wolrld"    
}
}
