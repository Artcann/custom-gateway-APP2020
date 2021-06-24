import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("idUser", ["idUser"], {})
@Entity("sav", { schema: "app2021" })
export class Sav {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "idUser" })
  idUser: number;

  @Column("text", { name: "contenu" })
  contenu: string;

  @Column("int", { name: "type" })
  type: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("int", { name: "statut" })
  statut: number;

  @Column("int", { name: "destinataire" })
  destinataire: number;

  @ManyToOne(() => User, (user) => user.savs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idUser", referencedColumnName: "id" }])
  idUser2: User;
}
