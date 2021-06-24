import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Capteur } from "./Capteur";
import { Carte } from "./Carte";

@Index("capteur_carte", ["idCapteur"], {})
@Index("carte_capteur", ["idCarte"], {})
@Entity("carte_capteur", { schema: "app2021" })
export class CarteCapteur {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_carte" })
  idCarte: number;

  @Column("int", { name: "id_capteur" })
  idCapteur: number;

  @ManyToOne(() => Capteur, (capteur) => capteur.carteCapteurs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_capteur", referencedColumnName: "id" }])
  idCapteur2: Capteur;

  @ManyToOne(() => Carte, (carte) => carte.carteCapteurs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_carte", referencedColumnName: "id" }])
  idCarte2: Carte;
}
