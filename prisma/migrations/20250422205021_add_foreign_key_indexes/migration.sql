-- CreateIndex
CREATE INDEX "blogs_user_id_idx" ON "blogs"("user_id");

-- CreateIndex
CREATE INDEX "blogs_category_id_idx" ON "blogs"("category_id");

-- CreateIndex
CREATE INDEX "categories_parent_id_idx" ON "categories"("parent_id");

-- CreateIndex
CREATE INDEX "comments_blog_id_idx" ON "comments"("blog_id");
