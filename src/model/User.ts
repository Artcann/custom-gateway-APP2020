import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Chat } from "./Chat";
import { ForumPosts } from "./ForumPosts";
import { ForumTopics } from "./ForumTopics";
import { Notification } from "./Notification";
import { Sav } from "./Sav";
import { Test } from "./Test";
import { Caserne } from "./Caserne";
import { Corps } from "./Corps";
import { Statut } from "./Statut";

@Index("caserne", ["caserne"], {})
@Index("corps", ["corps"], {})
@Index("id", ["id"], { unique: true })
@Index("login", ["login"], { unique: true })
@Index("user_statut", ["statut"], {})
@Entity("user", { schema: "app2021" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "prenom", length: 255 })
  prenom: string;

  @Column("date", { name: "naissance" })
  naissance: string;

  @Column("varchar", { name: "grade", nullable: true, length: 255 })
  grade: string | null;

  @Column("varchar", { name: "nationalite", nullable: true, length: 255 })
  nationalite: string | null;

  @Column("int", { name: "caserne", nullable: true })
  caserne: number | null;

  @Column("int", { name: "corps", nullable: true })
  corps: number | null;

  @Column("int", { name: "statut" })
  statut: number;

  @Column("varchar", { name: "matricule", nullable: true, length: 255 })
  matricule: string | null;

  @Column("varchar", { name: "mail", nullable: true, length: 255 })
  mail: string | null;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "login", unique: true, length: 255 })
  login: string;

  @OneToMany(() => Chat, (chat) => chat.idSender2)
  chats: Chat[];

  @OneToMany(() => Chat, (chat) => chat.idReceiver2)
  chats2: Chat[];

  @OneToMany(() => ForumPosts, (forumPosts) => forumPosts.user)
  forumPosts: ForumPosts[];

  @OneToMany(() => ForumTopics, (forumTopics) => forumTopics.user)
  forumTopics: ForumTopics[];

  @OneToMany(() => Notification, (notification) => notification.idUser2)
  notifications: Notification[];

  @OneToMany(() => Sav, (sav) => sav.idUser2)
  savs: Sav[];

  @OneToMany(() => Test, (test) => test.idRh2)
  tests: Test[];

  @OneToMany(() => Test, (test) => test.idUser2)
  tests2: Test[];

  @ManyToOne(() => Caserne, (caserne) => caserne.users, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "caserne", referencedColumnName: "id" }])
  caserne2: Caserne;

  @ManyToOne(() => Corps, (corps) => corps.users, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "corps", referencedColumnName: "id" }])
  corps2: Corps;

  @ManyToOne(() => Statut, (statut) => statut.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "statut", referencedColumnName: "id" }])
  statut2: Statut;
}
