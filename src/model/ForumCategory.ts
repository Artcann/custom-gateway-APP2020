import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ForumTopics } from "./ForumTopics";

@Entity("forum_category", { schema: "app2021" })
export class ForumCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "category_id" })
  categoryId: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "description" })
  description: string;

  @OneToMany(() => ForumTopics, (forumTopics) => forumTopics.category)
  forumTopics: ForumTopics[];
}
