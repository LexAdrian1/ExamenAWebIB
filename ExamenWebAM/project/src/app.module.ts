import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AutorizacionController} from "./Autorizacion/autorizacion.controller";
import {PacienteService} from "./Paciente/paciente.service";
import {PacienteController} from "./Paciente/paciente.controller";
import {MedicamentoController} from "./Medicamento/medicamento.controller";
import {MedicamentoService} from "./Medicamento/medicamento.service";

@Module({
  imports: [],
  controllers: [AppController, PacienteController,MedicamentoController, AutorizacionController],
  providers: [AppService, PacienteService,MedicamentoService],
})
export class AppModule {}
