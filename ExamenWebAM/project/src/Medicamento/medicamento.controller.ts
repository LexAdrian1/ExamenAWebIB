import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {error} from "util";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";
import {Medicamento, MedicamentoService} from "./medicamento.service";
import {MEDICAMENTO_SCHEMA} from "./medicamento.schema";
import {MedicamentoPipe} from "./medicamento.pipe";


@Controller('Medicamento')
export class MedicamentoController {

    constructor(private _medicamentoService: MedicamentoService) {}

    @Get()
    mostrarPaciente(@Res() response) {
        const medicamentos = this._medicamentoService.mostrarMedicamentos();
        return response.send(medicamentos);
    }

    @UsePipes(new  MedicamentoPipe(MEDICAMENTO_SCHEMA))
    @Post()
    crearMedicamento(
        @Body(new MedicamentoPipe(MEDICAMENTO_SCHEMA))
            nuevoMedicamento
    ) {

        const medicamentoCreado = this._medicamentoService.crearMedicamento(nuevoMedicamento);
        if (medicamentoCreado) {
            return nuevoMedicamento;
        } else {
            throw new PeticionErroneaException(
                'Petición Inválida, Datos Erroneos', error, 10
            )
        }

    }

    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const medicamento = this._medicamentoService.obtenerUno(id.id);
        if (medicamento) {
            return response.send(medicamento);
        }
        else {
            throw  new PeticionNotfoundException('ID No Registrado',error,10)
        }


    }

    @Put(':id')
    editarUno(@Param() id, @Body() updateMedicamento, @Req() request,
              @Res() response) {
        const update = this._medicamentoService.editarUno(id.id, updateMedicamento.gramosAIngerir, updateMedicamento.nombre, updateMedicamento.composicion, updateMedicamento.usadoPara, updateMedicamento.fechaCaducidad, updateMedicamento.numeroPastillas);
        if (update) {
            return response.send(update);
        }
        else {
            throw  new PeticionNotfoundException('Id No encontrado', error, 10
            )
        }
    }
}