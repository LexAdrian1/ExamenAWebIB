import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PacienteService} from "./paciente.service";
import {MedicamentoService} from "./medicamento.service";
import {AutorizacionController} from "./autorizacion.controller";
import {PacienteController} from "./paciente.controller";
import {MedicamentoController} from "./medicamento.controller";

@Module({
  imports: [],
  controllers: [AppController,AutorizacionController,PacienteController,MedicamentoController],
  providers: [AppService,PacienteService,MedicamentoService],
})
export class AppModule {}
