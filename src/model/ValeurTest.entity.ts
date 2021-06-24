import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("valeur_test", { schema: "app2021" })
export class ValeurTest {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_test" })
  idTest: number;

  @Column("text", { name: "trame" })
  trame: string;

  @Column("int", { name: "id_capteur" })
  idCapteur: number;
}
