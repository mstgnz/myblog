/*
  Warnings:

  - The primary key for the `abouts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `abouts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `blogs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `blogs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `parent_id` column on the `categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `comments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `comments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `contacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `contacts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `user_id` on the `blogs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category_id` on the `blogs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `blog_id` on the `comments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_category_id_fkey";

-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_user_id_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_blog_id_fkey";

-- AlterTable
ALTER TABLE "abouts" DROP CONSTRAINT "abouts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "abouts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD CONSTRAINT "blogs_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "categories" DROP CONSTRAINT "categories_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "parent_id",
ADD COLUMN     "parent_id" INTEGER,
ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "comments" DROP CONSTRAINT "comments_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "blog_id",
ADD COLUMN     "blog_id" INTEGER NOT NULL,
ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "contacts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
