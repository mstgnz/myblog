import { gql } from '@apollo/client';
import { Blog } from './blog.graphql';

export interface Comment {
    id: number;
    blog_id: number;
    firstname: string;
    lastname: string;
    comment: string;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    blog?: Blog;
}

export const COMMENT_COUNT = gql`
    query COMMENT_COUNT($where: comments_bool_exp) {
        comments_aggregate(where: $where) {
            aggregate {
                count
            }
        }
    }
`;

export const GET_COMMENTS = gql`
    query GET_COMMENTS(
        $where: comments_bool_exp
    ) {
        comments(
            where: $where
        ) {
            id
            blog_id
            firstname
            lastname
            comment
            active
            created_at
            updated_at
        }
    }
`;