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


    editarPacientes(paciente: Paciente, id: string) {
        //Find index of specific object using findIndex method.
        const objIndex = this.pacientes.findIndex((obj => obj.nombres == id));

        //Log object to Console.
        console.log("Before update: ", this.pacientes[objIndex];

        //Update object's name property.
        this.pacientes[objIndex].apellidos = paciente.apellidos;

        //Log object to console again.
        console.log("After update: ", this.pacientes[objIndex]);

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

