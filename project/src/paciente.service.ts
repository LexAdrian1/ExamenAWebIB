import {Injectable} from '@nestjs/common';

@Injectable()
export class PacienteService {
    pacientes: Paciente[] = [];

    crearPaciente(paciente: Paciente): Paciente {
        this.pacientes.push(paciente);
        return paciente;
    }

    mostrarPacientes(): Paciente[] {
        return this.pacientes
    }

    obtenerPeciente(id: string): Paciente[]{

        let resultado = this.pacientes.filter((paciente:Paciente)=>{
            return paciente.id==id
        });

        return resultado;
    }


    editarPacientes(paciente: Paciente, id: string) {
        const objIndex = this.pacientes.findIndex((obj => obj.id == id));

        this.pacientes[objIndex].nombres = paciente.nombres;
        this.pacientes[objIndex].apellidos = paciente.apellidos;
        this.pacientes[objIndex].fechaNacimiento = paciente.fechaNacimiento;
        this.pacientes[objIndex].hijos = paciente.hijos;
        this.pacientes[objIndex].tieneSeguro = paciente.tieneSeguro;

        return this.pacientes;
    }

}
    export interface Paciente {
        id: string;
        nombres: string;
        apellidos: string;
        fechaNacimiento: string;
        hijos: number;
        tieneSeguro: boolean;
    }

