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
    mostrarPaciente(@Res() response)
    {
        const pacientes = this._pacienteService.mostrarPacientes();
        return response.send(pacientes);
    }

    @Get('Paciente/:id')
    obtenerUno(@Req() request, @Res() response,@Body() bodyParams) {
        const respuesta = {bodyParams: bodyParams};
        const id = request.params.id;

        const paciente = this._pacienteService.obtenerPeciente(id);
        return response.status(201).send(paciente)
    }

    @Put('editarPaciente/:id')
    editarUno(@Res() response,@Body() selectPaciente,@Param('id') id, @Body() updatePaciente) {
        const pacientes = this._pacienteService.editarPacientes(updatePaciente,id);
        return response.send(pacientes);
    }

    @Post('crearPaciente')
    crearPaciente(@Res() response,@Body(new PacientePipe(PACIENTE_SCHEMA)) nuevoPaciente) {
        const pacienteCreado = this._pacienteService.crearPaciente(nuevoPaciente);
        return response.status(201).send(nuevoPaciente);
    }
}

