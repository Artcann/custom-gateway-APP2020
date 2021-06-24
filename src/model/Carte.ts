import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Caserne } from "./Caserne";
import { CarteCapteur } from "./CarteCapteur";

@Index("caserne", ["caserne"], {})
@Entity("carte", { schema: "app2021" })
export class Carte {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("int", { name: "statut" })
  statut: number;

  @Column("int", { name: "caserne" })
  caserne: number;

  @ManyToOne(() => Caserne, (caserne) => caserne.cartes, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "caserne", referencedColumnName: "id" }])
  caserne2: Caserne;

  @OneToMany(() => CarteCapteur, (carteCapteur) => carteCapteur.idCarte2)
  carteCapteurs: CarteCapteur[];
}
