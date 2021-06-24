import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Carte } from "./Carte";
import { User } from "./User";

@Entity("caserne", { schema: "app2021" })
export class Caserne {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "ville", length: 255 })
  ville: string;

  @Column("text", { name: "addresse" })
  addresse: string;

  @OneToMany(() => Carte, (carte) => carte.caserne2)
  cartes: Carte[];

  @OneToMany(() => User, (user) => user.caserne2)
  users: User[];
}
