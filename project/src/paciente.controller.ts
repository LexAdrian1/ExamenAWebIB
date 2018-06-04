import {Body, Controller, Get, Param, Post, Put, ReflectMetadata, Req, Res} from "@nestjs/common";
import {PacienteService} from "./paciente.service";
import {PACIENTE_SCHEMA} from "./paciente/paciente.schema";
import {PacientePipe} from "./pipes/paciente.pipe";

// decorator
@Controller('Paciente')

export class PacienteController {
    pacientes = [];

    constructor(private _pacienteService: PacienteService) {}

    @Get('ListarPacientes')
    mostrarUsuario(@Res() response)
    {
        const usuarios = this._pacienteService.mostrarPacientes();
        return response.send(usuarios);
    }

    @Get('Paciente/:id')
    obtenerUno(@Req() request, @Res() response,@Body() bodyParams) {
        const respuesta = {bodyParams: bodyParams};
        return response.send(respuesta);
    }

    //@Put('Paciente/:id')
    @Put('Paciente/:id')
    editarUno(@Res() response,@Body() selectPaciente,@Param('id') id, @Body() updatePaciente) {
        const usuarios = this._pacienteService.editarPacientes(updatePaciente,id);
        return response.send(usuarios);
    }


    @Post('crearPaciente')
    crearUsuario(@Body(new PacientePipe(PACIENTE_SCHEMA))nuevoPaciente) {
        const pacienteCreado = this._pacienteService.crearPaciente(nuevoPaciente);
        return nuevoPaciente;
    }


}

