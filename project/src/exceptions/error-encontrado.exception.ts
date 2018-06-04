import {HttpException, HttpStatus} from "@nestjs/common";

export class ErrorEncontradoException extends HttpException{

    constructor(private readonly mensaje, private readonly nivelError){
        super({
            mensaje: 'No Encontrado',
            statusCode: HttpStatus.NOT_FOUND,
            detalle: mensaje,
            levelError: nivelError,
        },HttpStatus.NOT_FOUND)
    }
}