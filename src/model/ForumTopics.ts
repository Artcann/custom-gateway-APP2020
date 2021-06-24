import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ForumPosts } from "./ForumPosts";
import { User } from "./User";
import { ForumCategory } from "./ForumCategory";

@Index("category_id", ["categoryId"], {})
@Index("user_id", ["userId"], {})
@Entity("forum_topics", { schema: "app2021" })
export class ForumTopics {
  @PrimaryGeneratedColumn({ type: "int", name: "topic_id" })
  topicId: number;

  @Column("varchar", { name: "subject", length: 255 })
  subject: string;

  @Column("int", { name: "category_id" })
  categoryId: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("datetime", { name: "created" })
  created: Date;

  @OneToMany(() => ForumPosts, (forumPosts) => forumPosts.topic)
  forumPosts: ForumPosts[];

  @ManyToOne(() => User, (user) => user.forumTopics, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToOne(
    () => ForumCategory,
    (forumCategory) => forumCategory.forumTopics,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: ForumCategory;
}
