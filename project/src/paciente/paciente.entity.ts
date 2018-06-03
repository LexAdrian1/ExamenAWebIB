import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MedicamentoEntity} from "../medicamentos/medicamento.entity";

@Entity('Paciente')
export class PacienteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    nombres: string;

    @Column({length: 65})
    apellidos: string;

    @Column({length: 25})
    hijos: number;

    @Column({length: 50})
    tieneSeguro: boolean;

    @OneToMany(type => MedicamentoEntity, medicamentoEntity => medicamentoEntity.paciente)
    medicamentos: MedicamentoEntity[];

}