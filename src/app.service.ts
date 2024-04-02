import { ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AppService {

  static readonly SUCCESSFULLY_MESSAGE = "Successfully"

  getByCode(code: number): any {
    if(code === 0) {
      throw new ForbiddenException("El numero no puede ser 0")
    }

    if(code %2 === 0) {
      throw new InternalServerErrorException("Error, el numero es par")
    }

    return { status: AppService.SUCCESSFULLY_MESSAGE }
}

getHello(): any {
 return "Hello"
}
}
