import { gql } from '@apollo/client';
import { User } from './user.graphql';
import { Category } from './category.graphql';
import { Comment } from './comment.graphql';

export interface Blog {
    id: number;
    user_id: number;
    category_id: number;
    title: string;
    slug: string;
    short_text: string;
    long_text: string;
    active: boolean;
    read_count: number;
    created_at: Date;
    updated_at: Date;
    user?: User;
    category?: Category;
    comments?: Comment[];
}

interface BlogResponseArray {
  blogs: Blog[]
}

interface BlogResponseSingle {
  blogs_by_pk: Blog
}

interface BlogAggregate {
  blogs_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface BlogInsertMutation {
  insert_blogs: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface BlogUpdateMutation {
  update_blogs: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface BlogDeleteMutation {
  delete_blogs: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

export const BLOG_COUNT = gql`
    query BLOG_COUNT($where: blogs_bool_exp) {
        blogs_aggregate(where: $where) {
            aggregate {
                count
            }
        }
    }
`;

export const GET_BLOGS = gql`
    query GET_BLOGS(
        $where: blogs_bool_exp
        $limit: Int
        $offset: Int
        $orderBy: order_by = asc
    ) {
        blogs(
            where: $where
            limit: $limit
            offset: $offset
            order_by: { id: $orderBy }
        ) {
            id
            user_id
            category_id
            title
            slug
            short_text
            long_text
            active
            read_count
            created_at
            updated_at
        }
    }
`;

export const GET_BLOG = gql`
    query GET_BLOG(
        $id: uuid!
    ) {
        blogs_by_pk(id: $id) {
            id
            user_id
            category_id
            title
            slug
            short_text
            long_text
            active
            read_count
            created_at
            updated_at
        }
    }
`;

export const CREATE_BLOG = gql`
    mutation CREATE_BLOG($user_id: uuid!, $category_id: uuid!, $title: String!, $slug: String!, $short_text: String!, $long_text: String!, $active: Boolean!) {
        insert_blogs(object: { user_id: $user_id, category_id: $category_id, title: $title, slug: $slug, short_text: $short_text, long_text: $long_text, active: $active }) {
            affected_rows
            returning {
                id
            }
        }
    }
`;

export const UPDATE_BLOG = gql`
    mutation UPDATE_BLOG($id: uuid!, $user_id: uuid!, $category_id: uuid!, $title: String!, $slug: String!, $short_text: String!, $long_text: String!, $active: Boolean!) {
        update_blogs(pk_columns: { id: $id }, _set: { user_id: $user_id, category_id: $category_id, title: $title, slug: $slug, short_text: $short_text, long_text: $long_text, active: $active }) {
            affected_rows
            returning {
                id
            }
        }
    }
`;

export const DELETE_BLOG = gql`
    mutation DELETE_BLOG($id: uuid!) {
        delete_blogs(id: $id) {
            affected_rows
            returning {
                id
            }
        }
    }
`;