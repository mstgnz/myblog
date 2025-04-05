import { gql } from '@apollo/client';

export const GET_BLOGS = gql`
  query GetBlogs($limit: Int!, $offset: Int!) {
    blogs(
      where: { active: { _eq: true } }
      order_by: { created_at: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      title
      slug
      short_text
      read_count
      created_at
      user {
        firstname
        lastname
      }
      category {
        id
        name
      }
    }
    blogs_aggregate(where: { active: { _eq: true } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    blogs(where: { slug: { _eq: $slug }, active: { _eq: true } }) {
      id
      title
      slug
      short_text
      long_text
      read_count
      created_at
      user {
        firstname
        lastname
      }
      category {
        id
        name
      }
      comments(where: { active: { _eq: true } }, order_by: { created_at: desc }) {
        id
        firstname
        lastname
        comment
        created_at
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      parent_id
      blogs {
        id
        title
        slug
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($blogId: uuid!, $limit: Int!, $offset: Int!) {
    comments(
      where: { blog_id: { _eq: $blogId }, active: { _eq: true } }
      order_by: { created_at: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      firstname
      lastname
      comment
      active
      created_at
    }
    comments_aggregate(where: { blog_id: { _eq: $blogId }, active: { _eq: true } }) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_POPULAR_BLOGS = gql`
  query GetPopularBlogs($limit: Int!) {
    blogs(
      where: { active: { _eq: true } }
      order_by: { read_count: desc }
      limit: $limit
    ) {
      id
      title
      slug
      read_count
      created_at
    }
  }
`;

export const GET_ABOUT = gql`
  query GetAbout {
    abouts(
      where: { is_visible: { _eq: true } }
      order_by: { display_order: asc }
    ) {
      id
      title
      content
      display_order
      is_visible
      created_at
    }
  }
`;

export const GET_CONTACTS = gql`
  query GetContacts($status: String, $limit: Int!, $offset: Int!) {
    contacts(
      where: { status: { _eq: $status } }
      order_by: { created_at: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      fullname
      email
      subject
      message
      status
      created_at
    }
    contacts_aggregate(where: { status: { _eq: $status } }) {
      aggregate {
        count
      }
    }
  }
`;
