import {Injectable} from '@nestjs/common';

@Injectable()
export class MedicamentoService {
    medicamentos: Medicamento[] = [];

    crearMedicamento(medicamento: Medicamento): Medicamento {
        this.medicamentos.push(medicamento);
        return medicamento;
    }

    mostrarMedicamento(): Medicamento[] {
        return this.medicamentos
    }

    obtenerMedicamento(id: string): Medicamento[]{

        let resultado = this.medicamentos.filter((medicamento:Medicamento)=>{
            return medicamento.id==id
        });

        return resultado;
    }


    editarMedicamento(medicamento: Medicamento, id: string) {
        const objIndex = this.medicamentos.findIndex((obj => obj.id == id));

        this.medicamentos[objIndex].gramosAIngerir = medicamento.gramosAIngerir;
        this.medicamentos[objIndex].nombre = medicamento.nombre;
        this.medicamentos[objIndex].composicion = medicamento.composicion;
        this.medicamentos[objIndex].usadoPara = medicamento.usadoPara;
        this.medicamentos[objIndex].fechaCaducidad = medicamento.fechaCaducidad;
        this.medicamentos[objIndex].numeroPastillas = medicamento.numeroPastillas;
        
        return this.medicamentos;
    }

}
export interface Medicamento {
    id: string;
    gramosAIngerir: number;
    nombre: string;
    composicion: string;
    usadoPara: string;
    fechaCaducidad: string;
    numeroPastillas: number;
}

