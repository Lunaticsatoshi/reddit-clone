import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  identifier: Scalars['String'];
  post: Post;
  user: User;
  username: Scalars['String'];
  votes?: Maybe<Array<Vote>>;
};

export type Community = {
  __typename?: 'Community';
  bannerUrl: Scalars['String'];
  bannerUrn: Scalars['String'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  imageUrn: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  title: Scalars['String'];
  user: User;
  username: Scalars['String'];
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  statusCode: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserResponse;
};


export type MutationCreateUserArgs = {
  data: RegisterUserInput;
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  commentCount: Scalars['Float'];
  comments: User;
  community: Community;
  communityName: Scalars['String'];
  identifier: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  user: User;
  username: Scalars['String'];
  voteCount: Scalars['Float'];
  votes: Vote;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser?: Maybe<Scalars['String']>;
};

export type RegisterUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  isActive: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  posts?: Maybe<Array<Post>>;
  profilePicUrn: Scalars['String'];
  profileUrl: Scalars['String'];
  userId: Scalars['String'];
  username: Scalars['String'];
  votes?: Maybe<Array<Vote>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  user?: Maybe<User>;
};

export type Vote = {
  __typename?: 'Vote';
  comment: Comment;
  post: Post;
  user: User;
  username: Scalars['String'];
  voteType: VoteType;
};

/** Type of the vote */
export enum VoteType {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: string | null };


export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  getCurrentUser
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;