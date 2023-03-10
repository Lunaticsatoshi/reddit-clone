import {
  Entity,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { makeId } from '../common/utils/random-data-generator';
import BaseModel from './BaseModel';
import { User } from './UserModel';
import { Post } from './PostModel';
import { Vote } from './VoteModel';
@ObjectType()
@Entity('comments')
export class Comment extends BaseModel {
  @Field()
  @Index()
  @Column()
  identifier: string;

  @Field()
  @Column()
  body: string;

  @Field()
  @Column()
  userId: string;

  @Field(() => User)
  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'userId', referencedColumnName: '_id' })
  user: User;

  @Field(() => Post)
  @ManyToOne(() => Post, (post) => post.comments, { nullable: false, onDelete: "CASCADE" })
  post: Post;

  @Field(() => [Vote], { nullable: true })
  @OneToMany(() => Vote, (vote) => vote.comment)
  votes: Vote[];

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = makeId(8);
  }
}
