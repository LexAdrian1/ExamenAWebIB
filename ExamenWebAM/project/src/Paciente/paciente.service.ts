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

    obtenerUno(id) {
        return this.pacientes[id - 1];
    }

    editarUno(id, nombres, apellidos, fechaNacimiento, hijos, tieneSeguro) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.nombres = nombres;
        arregloAux.apellidos = apellidos;
        arregloAux.fechaNacimiento = fechaNacimiento;
        arregloAux.hijos = hijos;
        arregloAux.tieneSeguro = tieneSeguro;
        return arregloAux;
    };
}
export class Paciente {
    constructor(
        public id: string,
        public nombres: string,
        public apellidos: string,
        public fechaNacimiento: string,
        public hijos: number,
        public tieneSeguro: boolean,
    )
    {
    }
}
