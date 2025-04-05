export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone?: string;
  logo?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  blogs?: Blog[];
}

export interface Category {
  id: string;
  parent_id?: string;
  name: string;
  blogs?: Blog[];
  children?: Category[];
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  short_text: string;
  long_text: string;
  user_id: string;
  category_id: string;
  active: boolean;
  read_count: number;
  created_at: string;
  updated_at: string;
  author?: User;
  category?: Category;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  blog_id: string;
  firstname: string;
  lastname: string;
  comment: string;
  active: boolean;
  created_at: string;
  blog?: Blog;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface About {
  id: string;
  title: string;
  content: string;
  display_order: number;
  is_visible: boolean;
  created_at: string;
}

export interface Contact {
  id: string;
  fullname: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'replied' | 'archived';
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'replied' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface AboutContent {
  id: string;
  section_name: string;
  title: string;
  content: string;
  display_order: number;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactInfo {
  id: string;
  type: 'email' | 'phone' | 'address';
  value: string;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
} 