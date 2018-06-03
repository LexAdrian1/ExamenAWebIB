import {Body, Controller, Get, Post, ReflectMetadata, Req, Res} from "@nestjs/common";
import {PacienteService} from "./paciente.service";

// decorator
@Controller('Paciente')

export class PacienteController {
    pacientes = [];

    constructor(private _pacienteService: PacienteService) {}

    @Get('ListarPacientes') mostrarUsuario(@Res() response)
    {
        const usuarios = this._pacienteService.mostrarPacientes();
        return response.send(usuarios);
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request, @Res() response)
    {
        return response.status(200).send(this.pacientes);
    }

    @Post('crearUsuario')
    crearUsuario(@Body(new UsuarioPipe(USUARIO_SCHEMA))nuevoPaciente) {

        const pacienteCreado = this._pacienteService.crearPaciente(nuevoPaciente);

        return nuevoPaciente;
    }


}

