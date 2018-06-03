import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PacienteEntity} from "../paciente/paciente.entity";

@Entity('Medicamento')
export class MedicamentoEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    gramosAIngerir: string;

    @Column({length: 50})
    nombre: string;

    @Column({length: 50})
    composicion: string;

    @Column({length: 50})
    usadoPara: string;

    @Column({length: 50})
    fechaCaducidad: string;

    @Column({length: 50})
    numeroPastillas: string;

    @ManyToOne(type => PacienteEntity, pacienteEntity => pacienteEntity.medicamentos)
    paciente: PacienteEntity;

}