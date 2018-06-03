import {Injectable} from '@nestjs/common';

@Injectable()
export class PacienteService {
    pacientes: Paciente[] = [];

    crearPaciente(usuario: Paciente): Paciente {
        this.pacientes.push(usuario);
        return usuario;
    }

    mostrarPacientes(): Paciente[] {
        return this.pacientes;
    }

}

export interface Paciente {
    nombres: string;
    apellidos: string;
    fechaNacimiento: string;
    hijos: number;
    tieneSeguro: boolean;
}