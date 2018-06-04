import {Controller, Get, Post, Req, Res} from "@nestjs/common";

@Controller('Autorizacion')
export class AutorizacionController {

    @Post('iniciarSesion')
    iniciarSesion(@Req() request, @Res() response){

        const datosUsuario={
            nombreUsuario: request.body.nombreUsuario,
            contraseniaUsuario: request.body.contraseniaUsuario
        };

        if(datosUsuario.nombreUsuario=='adrianeguez' && datosUsuario.contraseniaUsuario=='12345678910'){

            const parametros ={
                nombreCookie:'token',
                valorCookie:datosUsuario.nombreUsuario,
            };
            response.cookie(parametros.nombreCookie,parametros.valorCookie);

            return response.send({mensaje: "ok"})
        }
    }

    @Get('leerCookie/:nombreCookie')
    leerCookie(@Req() request, @Res() response){
        const nombreCookie = request.params.nombreCookie;
        const existeCookie = request.cookies[nombreCookie];

        if(existeCookie){
            return response.send('Cookie no Encontrada');
        }else{
            return response.status(404).send('Cookie Encontrada');
        }
    }

    @Post('cerrarSesion')
    cerrarSesion(@Res() response){

        const parametros ={
            nombreCookie:'token',
            valorCookie:undefined
        };

        response.cookie(parametros.nombreCookie,parametros.valorCookie);
        return response.send({
            mensaje: "Usted salio del sistema"
        })
    }
}