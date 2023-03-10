import {
  Entity,
  Column,
  Index,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { makeId, slugify } from '../common/utils/random-data-generator';
import BaseModel from './BaseModel';
import { User } from './UserModel';
import { Community } from './CommunityModel';
import { Comment } from './CommentModel';
import { Vote } from './VoteModel';
@ObjectType()
@Entity('posts')
export class Post extends BaseModel {
  @Field()
  @Index()
  @Column()
  identifier: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Index()
  @Column()
  slug: string;

  @Field()
  @Column({ nullable: true, type: 'text' })
  body: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  imageUrn: string;

  @Field()
  @Column()
  userId: string;

  @Field()
  @Column()
  communityId: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'userId', referencedColumnName: '_id' })
  user: User;

  @Field(() => Community)
  @ManyToOne(() => Community, (community) => community.posts, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'communityId', referencedColumnName: '_id' })
  community: Community;

  @Field(() => [Comment])
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @Field(() => [Vote])
  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[];

  @Field()
  @Column({ default: 0 })
  voteCount: number;

  @Field()
  @Column({ default: 0 })
  commentCount: number;

  @Field({ nullable: true })
  imageUrl: string;

  @Field()
  url: string;

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = makeId(7);
    this.slug = slugify(this.title);
  }
}
