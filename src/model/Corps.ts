import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("corps", { schema: "app2021" })
export class Corps {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "type", length: 11 })
  type: string;

  @Column("int", { name: "nbMilitaire" })
  nbMilitaire: number;

  @Column("int", { name: "nbOpex" })
  nbOpex: number;

  @OneToMany(() => User, (user) => user.corps2)
  users: User[];
}
