import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("chat_ibfk_2", ["idReceiver"], {})
@Index("id_sender", ["idSender"], {})
@Entity("chat", { schema: "app2021" })
export class Chat {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_sender" })
  idSender: number;

  @Column("int", { name: "id_receiver" })
  idReceiver: number;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("text", { name: "message" })
  message: string;

  @ManyToOne(() => User, (user) => user.chats, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_sender", referencedColumnName: "id" }])
  idSender2: User;

  @ManyToOne(() => User, (user) => user.chats2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_receiver", referencedColumnName: "id" }])
  idReceiver2: User;
}
