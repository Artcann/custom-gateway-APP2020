import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CarteCapteur } from "./CarteCapteur";

@Entity("capteur", { schema: "app2021" })
export class Capteur {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @OneToMany(() => CarteCapteur, (carteCapteur) => carteCapteur.idCapteur2)
  carteCapteurs: CarteCapteur[];
}
