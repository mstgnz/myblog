import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($blogId: uuid!, $firstname: String!, $lastname: String!, $comment: String!) {
    insert_comments_one(
      object: {
        blog_id: $blogId
        firstname: $firstname
        lastname: $lastname
        comment: $comment
        active: true
      }
    ) {
      id
      firstname
      lastname
      comment
      created_at
    }
  }
`;

export const CREATE_BLOG = gql`
  mutation CreateBlog(
    $title: String!,
    $slug: String!,
    $short_text: String!,
    $long_text: String!,
    $user_id: uuid!,
    $category_id: uuid!
  ) {
    insert_blogs_one(
      object: {
        title: $title,
        slug: $slug,
        short_text: $short_text,
        long_text: $long_text,
        user_id: $user_id,
        category_id: $category_id,
        active: true,
        read_count: 0
      }
    ) {
      id
      title
      slug
      created_at
    }
  }
`;

export const UPDATE_BLOG = gql`
  mutation UpdateBlog(
    $id: uuid!,
    $title: String,
    $slug: String,
    $short_text: String,
    $long_text: String,
    $category_id: uuid,
    $active: Boolean
  ) {
    update_blogs_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title,
        slug: $slug,
        short_text: $short_text,
        long_text: $long_text,
        category_id: $category_id,
        active: $active
      }
    ) {
      id
      title
      slug
      updated_at
    }
  }
`;

export const INCREMENT_BLOG_READ_COUNT = gql`
  mutation IncrementBlogReadCount($id: uuid!) {
    update_blogs_by_pk(
      pk_columns: { id: $id }
      _inc: { read_count: 1 }
    ) {
      id
      read_count
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation DeleteBlog($id: uuid!) {
    delete_blogs_by_pk(id: $id) {
      id
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!, $parent_id: uuid) {
    insert_categories_one(
      object: {
        name: $name,
        parent_id: $parent_id
      }
    ) {
      id
      name
      parent_id
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: uuid!, $name: String, $parent_id: uuid) {
    update_categories_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name,
        parent_id: $parent_id
      }
    ) {
      id
      name
      parent_id
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: uuid!) {
    delete_categories_by_pk(id: $id) {
      id
    }
  }
`;

export const CREATE_ABOUT = gql`
  mutation CreateAbout(
    $title: String!,
    $content: String!,
    $display_order: Int!,
    $is_visible: Boolean!
  ) {
    insert_abouts_one(
      object: {
        title: $title,
        content: $content,
        display_order: $display_order,
        is_visible: $is_visible
      }
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

export const UPDATE_ABOUT = gql`
  mutation UpdateAbout(
    $id: uuid!,
    $title: String,
    $content: String,
    $display_order: Int,
    $is_visible: Boolean
  ) {
    update_abouts_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title,
        content: $content,
        display_order: $display_order,
        is_visible: $is_visible
      }
    ) {
      id
      title
      content
      display_order
      is_visible
    }
  }
`;

export const DELETE_ABOUT = gql`
  mutation DeleteAbout($id: uuid!) {
    delete_abouts_by_pk(id: $id) {
      id
    }
  }
`;

export const CREATE_CONTACT = gql`
  mutation CreateContact(
    $fullname: String!,
    $email: String!,
    $subject: String!,
    $message: String!
  ) {
    insert_contacts_one(
      object: {
        fullname: $fullname,
        email: $email,
        subject: $subject,
        message: $message,
        status: "pending"
      }
    ) {
      id
      fullname
      email
      subject
      status
      created_at
    }
  }
`;

export const UPDATE_CONTACT_STATUS = gql`
  mutation UpdateContactStatus($id: uuid!, $status: String!) {
    update_contacts_by_pk(
      pk_columns: { id: $id }
      _set: { status: $status }
    ) {
      id
      status
    }
  }
`;

export const CREATE_CONTACT_MESSAGE = gql`
  mutation CreateContactMessage($name: String!, $email: String!, $subject: String!, $message: String!) {
    insert_contact_messages_one(
      object: {
        name: $name,
        email: $email,
        subject: $subject,
        message: $message
      }
    ) {
      id
      name
      email
      subject
      status
      created_at
    }
  }
`;

export const UPDATE_CONTACT_MESSAGE_STATUS = gql`
  mutation UpdateContactMessageStatus($id: uuid!, $status: String!) {
    update_contact_messages_by_pk(
      pk_columns: { id: $id }
      _set: { status: $status }
    ) {
      id
      status
      updated_at
    }
  }
`;

export const UPDATE_ABOUT_CONTENT = gql`
  mutation UpdateAboutContent($id: uuid!, $title: String!, $content: String!) {
    update_about_content_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title,
        content: $content
      }
    ) {
      id
      title
      content
      updated_at
    }
  }
`;

export const UPDATE_CONTACT_INFOS = gql`
  mutation UpdateContactInfo($id: uuid!, $value: String!) {
    update_contact_info_by_pk(
      pk_columns: { id: $id }
      _set: { value: $value }
    ) {
      id
      type
      value
      updated_at
    }
  }
`; 

export const CREATE_ABOUT_SECTION = gql`
  mutation CreateAboutSection(
    $section_name: String!
    $title: String!
    $content: String!
    $display_order: Int!
    $is_visible: Boolean!
  ) {
    createAboutSection(
      section_name: $section_name
      title: $title
      content: $content
      display_order: $display_order
      is_visible: $is_visible
    ) {
      id
      section_name
      title
      content
      display_order
      is_visible
      created_at
      updated_at
    }
  }
`;

export const UPDATE_ABOUT_SECTION = gql`
  mutation UpdateAboutSection(
    $id: ID!
    $section_name: String
    $title: String
    $content: String
    $display_order: Int
    $is_visible: Boolean
  ) {
    updateAboutSection(
      id: $id
      section_name: $section_name
      title: $title
      content: $content
      display_order: $display_order
      is_visible: $is_visible
    ) {
      id
      section_name
      title
      content
      display_order
      is_visible
      updated_at
    }
  }
`;

export const DELETE_ABOUT_SECTION = gql`
  mutation DeleteAboutSection($id: ID!) {
    deleteAboutSection(id: $id) {
      id
    }
  }
`; 

export const CREATE_CONTACT_INFO = gql`
  mutation CreateContactInfo(
    $type: String!
    $value: String!
    $is_visible: Boolean!
  ) {
    createContactInfo(
      type: $type
      value: $value
      is_visible: $is_visible
    ) {
      id
      type
      value
      is_visible
      created_at
      updated_at
    }
  }
`;

export const UPDATE_CONTACT_INFO = gql`
  mutation UpdateContactInfo(
    $id: ID!
    $type: String
    $value: String
    $is_visible: Boolean
  ) {
    updateContactInfo(
      id: $id
      type: $type
      value: $value
      is_visible: $is_visible
    ) {
      id
      type
      value
      is_visible
      updated_at
    }
  }
`;

export const DELETE_CONTACT_INFO = gql`
  mutation DeleteContactInfo($id: ID!) {
    deleteContactInfo(id: $id) {
      id
    }
  }
`;


export const CREATE_CONTACT_MESSAGES = gql`
  mutation CreateContactMessage(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    createContactMessage(
      name: $name
      email: $email
      subject: $subject
      message: $message
    ) {
      id
      name
      email
      subject
      message
      status
      created_at
      updated_at
    }
  }
`;

export const UPDATE_CONTACT_MESSAGE_STATUSS = gql`
  mutation UpdateContactMessageStatus(
    $id: ID!
    $status: String!
  ) {
    updateContactMessageStatus(
      id: $id
      status: $status
    ) {
      id
      status
      updated_at
    }
  }
`; 