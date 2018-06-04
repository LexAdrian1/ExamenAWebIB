import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {error} from "util";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";
import {PacienteService} from "./paciente.service";
import {PacientePipe} from "./paciente.pipe";
import {PACIENTE_SCHEMA} from "./paciente.schema";

@Controller('Paciente')
export class PacienteController {

    constructor(private _pacienteService: PacienteService) {}

    @Get()
    mostrarPaciente(@Res() response) {
        const pacienrtes = this._pacienteService.mostrarPacientes();
        return response.send(pacienrtes);
    }

    @UsePipes(new  PacientePipe(PACIENTE_SCHEMA))
    @Post()
    crearPaciente(
        @Body(new PacientePipe(PACIENTE_SCHEMA))
            nuevoPaciente
    ) {

        const pacienteCreado = this._pacienteService.crearPaciente(nuevoPaciente);
        if (pacienteCreado) {
            return nuevoPaciente;
        } else {
            throw new PeticionErroneaException(
                'Petición Inválida, Datos Erroneos', error, 10
            )
        }
    }
    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const paciente = this._pacienteService.obtenerUno(id.id);
        if (paciente) {
            return response.send(paciente);
        }
        else {
            throw  new PeticionNotfoundException('Id No encontrado',error,10)
        }


    }

    @Put(':id')
    editarUno(@Param() id, @Body() updatePaciente, @Req() request,
              @Res() response) {
        const update = this._pacienteService.editarUno(id.id, updatePaciente.nombres, updatePaciente.apellidos, updatePaciente.fechaNacimiento, updatePaciente.hijos, updatePaciente.tieneSeguro);
        if (update) {
            return response.send(update);
        }
        else {
            throw  new PeticionNotfoundException('Id No encontrado', error, 10
            )
        }
    }
}


