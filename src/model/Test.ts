import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("idRh", ["idRh"], {})
@Index("idUser", ["idUser"], {})
@Entity("test", { schema: "app2021" })
export class Test {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("time", { name: "heure" })
  heure: string;

  @Column("int", { name: "idUser" })
  idUser: number;

  @Column("int", { name: "idRh", nullable: true })
  idRh: number | null;

  @Column("int", { name: "statut", default: () => "'0'" })
  statut: number;

  @Column("int", { name: "id_carte", nullable: true })
  idCarte: number | null;

  @ManyToOne(() => User, (user) => user.tests, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idRh", referencedColumnName: "id" }])
  idRh2: User;

  @ManyToOne(() => User, (user) => user.tests2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idUser", referencedColumnName: "id" }])
  idUser2: User;
}
