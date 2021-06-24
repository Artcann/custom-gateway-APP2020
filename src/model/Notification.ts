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
@Entity("notification", { schema: "app2021" })
export class Notification {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "idUser" })
  idUser: number;

  @Column("text", { name: "contenu" })
  contenu: string;

  @Column("datetime", { name: "date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column("int", { name: "importance", nullable: true })
  importance: number | null;

  @Column("int", { name: "portée", nullable: true })
  portE: number | null;

  @ManyToOne(() => User, (user) => user.notifications, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idUser", referencedColumnName: "id" }])
  idUser2: User;
}
