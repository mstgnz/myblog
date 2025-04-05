# My Blog

## Project Overview

A blog application with admin panel and public site interface, built using GraphQL.

## Technical Architecture

- All requests will be handled through GraphQL
- File structure:
  - `schema/mutations.ts`: Contains all mutation definitions with descriptive names
  - `schema/queries.ts`: Contains all query definitions with descriptive names
  - `schema/types.ts`: Contains type definitions with TypeScript type safety

## Admin Panel Features

- Blog Management
  - Blog list view (showing titles)
  - Blog detail page
    - Comment management (approved and pending comments)
- Category Management (category names)
- Contact Form Submissions list

## Public Site Features

### Header

- Navigation links:
  - Home
  - About
  - Contact
  - Account

### Home Page

- Blog post listings with pagination
  - Displays title and short text
  - Links to detail page via slug
- Sidebar
  - Category list
  - Most read blog posts

### Blog Detail Page

- Full content display
- Comment section at the bottom

### Footer

- Navigation links:
  - Home
  - About
  - Contact
- Statistics (optional):
  - Total number of blogs
  - Total number of categories
