import React from 'react'

export async function generateStaticParams() {
  return []
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  return (
    <div>
        <h1>Blog Detail Page</h1>
        <p>{slug}</p>
    </div>
  )
}

export default BlogDetailPage
