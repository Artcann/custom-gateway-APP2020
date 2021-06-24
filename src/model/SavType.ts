import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sav_type", { schema: "app2021" })
export class SavType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("varchar", { name: "destinataire", length: 255 })
  destinataire: string;

  @Column("int", { name: "num_destinataire" })
  numDestinataire: number;
}
