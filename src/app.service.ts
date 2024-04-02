import { ConflictException, ForbiddenException, ImATeapotException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CodeDto } from './code.dto';

@Injectable()
export class AppService {

  static readonly SUCCESSFULLY_MESSAGE = "Successfully"

  getByCode(codeValue: number): any {
    if(codeValue === 0) {
      throw new ForbiddenException("El numero no puede ser 0")
    }

    if(codeValue %2 === 0) {
      throw new InternalServerErrorException("Error, el numero es par")
    }

    return { status: AppService.SUCCESSFULLY_MESSAGE }
  }

  addCode(code: CodeDto): any {
    if(code.value === 0) {
      throw new ConflictException("El codigo no puede ser 0")
    }
    if(code.value === 100) {
      throw new ImATeapotException("Que se yo")
    }
    return { status: AppService.SUCCESSFULLY_MESSAGE }
  }

  getHello(): any {
   return "Hello"
  }
}
