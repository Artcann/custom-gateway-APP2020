import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("faq", { schema: "app2021" })
export class Faq {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "contenu" })
  contenu: string;

  @Column("text", { name: "titre" })
  titre: string;
}
