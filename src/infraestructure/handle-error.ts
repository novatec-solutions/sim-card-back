import { HttpStatus } from '@nestjs/common';

export class HandleError {
  httpCodesError = [
    HttpStatus.UNAUTHORIZED,
    HttpStatus.FORBIDDEN,
    HttpStatus.NOT_FOUND,
    HttpStatus.INTERNAL_SERVER_ERROR,
    HttpStatus.SERVICE_UNAVAILABLE
  ];

  processError(data) {
    if (this.httpCodesError.includes(data.statusCode)) {
      return this.errorResponse();
    } 

    return {
      error: 0,
      response: data,
    };
  }

  processErrorRes(res, data = undefined) {
    if (this.httpCodesError.includes(res.responseCode)) {
      return this.errorResponse();
    } 

    return {
      error: res.pinGeneratorResponse[0]?.isValid == 'true' ? 0 : 1,
      response: { 
        description: res.pinGeneratorResponse[0]?.message,
        data: data
      }
    };
  }

  errorResponse(){
    return {
      error: 1,
      response: { description: 'Ha ocurrido un error' },
    }
  }
}