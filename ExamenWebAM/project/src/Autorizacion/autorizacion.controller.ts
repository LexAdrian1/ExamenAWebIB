import {Body, Controller, Post, Req, Res} from "@nestjs/common";
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {error} from "util";


@Controller('Autorizacion')
export class AutorizacionController{

    usuario = {
        usuario: 'alexis',
        password: 12345678910,
    };


    @Post('iniciarSesion')
    iniciarSesion(@Req() request,
                  @Res() response, @Body("usuario") usuario:string,
    @Body("password") password:number){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: this.usuario.usuario,
        };
        if(usuario==this.usuario.usuario&&password==this.usuario.password){
            response.cookie(parametros.nombreCookie, parametros.valorCookie);
            return response.send({
                parametros,
                mensaje: 'ok'
            })

        } else {
            throw new PeticionErroneaException(
                'No se puede iniciar Sesion, Datos no Registrados',
                error,
                10)

        }

    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() request,
                 @Res() response){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: undefined,
        };
        const existeCookie = request.cookies[parametros.nombreCookie];
        if (existeCookie) {
            response.cookie(parametros.nombreCookie, parametros.valorCookie)
            return response.send({
                mensaje: 'Salio del Sistema'
            })
        } else {
            return response
                .status(404)
                .send({
                    mensaje: 'Cookie No encontrada'
                })
        }
    }
}