import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cgu", { schema: "app2021" })
export class Cgu {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "contenu" })
  contenu: string;

  @Column("text", { name: "titre" })
  titre: string;
}
