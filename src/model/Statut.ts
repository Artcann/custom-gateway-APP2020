import { Column, Entity, OneToMany } from "typeorm";
import { User } from "./User";

@Entity("statut", { schema: "app2021" })
export class Statut {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @OneToMany(() => User, (user) => user.statut2)
  users: User[];
}
