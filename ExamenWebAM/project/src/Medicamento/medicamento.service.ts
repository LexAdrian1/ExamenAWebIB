import {Injectable} from '@nestjs/common';

@Injectable()
export class MedicamentoService {
    medicamentos: Medicamento[] = [];

    crearMedicamento(medicamento: Medicamento): Medicamento {
        this.medicamentos.push(medicamento);
        return medicamento;
    }

    mostrarMedicamentos(): Medicamento[] {
        return this.medicamentos
    }

    obtenerUno(id) {
        return this.medicamentos[id - 1];
    }

    editarUno(id, gramosAIngerir, nombre, composicion, usadoPara, fechaCaducidad,numeroPastillas) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.gramosAIngerir = gramosAIngerir;
        arregloAux.nombre = nombre;
        arregloAux.composicion = composicion;
        arregloAux.usadoPara = usadoPara;
        arregloAux.fechaCaducidad = fechaCaducidad;
        arregloAux.numeroPastillas = numeroPastillas;
        return arregloAux;
    };
}
export class Medicamento {
    constructor(
        public id: string,
    public gramosAIngerir: number,
    public nombre: string,
    public composicion: string,
    public usadoPara: string,
    public fechaCaducidad: string,
    public numeroPastillas: number,
    )
    {
    }
}
