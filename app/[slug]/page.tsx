import React from 'react'

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
        <h1>Blog Detail Page</h1>
        <p>{params.slug}</p>
    </div>
  )
}

export default BlogDetailPage
