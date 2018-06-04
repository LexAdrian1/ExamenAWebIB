import {MedicamentoService} from "./medicamento.service";
import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {MEDICAMENTO_SCHEMA} from "./medicamentos/medicamento.schema";
import {MedicamentoPipe} from "./pipes/medicamento.pipe";

@Controller('Medicamento')

export class MedicamentoController {
    medicamentos = [];

    constructor(private _medicamentoService: MedicamentoService) {}

    @Get('ListarMedicamentos')
    mostrarMedicamento(@Res() response)
    {
        const medicamentos = this._medicamentoService.mostrarMedicamento();
        return response.send(medicamentos);
    }

    @Get('Medicamento/:id')
    obtenerUno(@Req() request, @Res() response,@Body() bodyParams) {
        const respuesta = {bodyParams: bodyParams};
        const id = request.params.id;

        const comida = this._medicamentoService.obtenerMedicamento(id);
        return response.status(201).send(comida)
    }

    @Put('editarMedicamento/:id')
    editarUno(@Res() response,@Body() selectMedicamento,@Param('id') id, @Body() updateMedicamento) {
        const medicamentos = this._medicamentoService.editarMedicamento(updateMedicamento,id);
        return response.send(medicamentos);
    }

    @Post('crearMedicamento')
    crearMedicamento(@Res() response,@Body(new MedicamentoPipe(MEDICAMENTO_SCHEMA)) nuevoMedicamento) {
        const medicamentoCreado = this._medicamentoService.crearMedicamento(nuevoMedicamento);
        return response.status(201).send(nuevoMedicamento);
    }
}

