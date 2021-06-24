import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ForumTopics } from "./ForumTopics";
import { User } from "./User";

@Index("topic_id", ["topicId"], {})
@Index("user_id", ["userId"], {})
@Entity("forum_posts", { schema: "app2021" })
export class ForumPosts {
  @PrimaryGeneratedColumn({ type: "int", name: "post_id" })
  postId: number;

  @Column("text", { name: "message" })
  message: string;

  @Column("int", { name: "topic_id" })
  topicId: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("datetime", { name: "created", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @ManyToOne(() => ForumTopics, (forumTopics) => forumTopics.forumPosts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "topic_id", referencedColumnName: "topicId" }])
  topic: ForumTopics;

  @ManyToOne(() => User, (user) => user.forumPosts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}
