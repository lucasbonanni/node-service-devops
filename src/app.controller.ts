import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CodeDto } from './code.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/code/:id")
  getByCode(@Param('id') id: string): any {
    return this.appService.getByCode(+id);
  }

  @Post("/code")
  @HttpCode(HttpStatus.CREATED)
  postCode(@Body() code: CodeDto): any {
    return this.appService.addCode(code);
  }
}
