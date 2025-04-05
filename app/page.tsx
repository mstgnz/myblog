"use client"

import Link from "next/link"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sidebar } from "@/components/Sidebar"

const mockPosts = [
  {
    id: 1,
    title: "Getting Started with shadcn/ui",
    shortText: "Learn how to build beautiful and accessible UIs with shadcn/ui and Next.js",
    slug: "getting-started-with-shadcn-ui",
    date: "2024-04-04",
    readTime: "5 min",
    category: "Next.js",
  },
  {
    id: 2,
    title: "Building a Blog with Next.js",
    shortText: "A comprehensive guide to building a modern blog with Next.js and TypeScript",
    slug: "building-blog-with-nextjs",
    date: "2024-04-03",
    readTime: "8 min",
    category: "React",
  },
  {
    id: 3,
    title: "The Power of Server Components",
    shortText: "Understanding React Server Components and their benefits in Next.js applications",
    slug: "power-of-server-components",
    date: "2024-04-02",
    readTime: "6 min",
    category: "React",
  },
]

const categories = [
  { name: "Next.js", count: 12 },
  { name: "React", count: 8 },
  { name: "TypeScript", count: 5 },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to My Blog
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Discover articles about web development, programming, and technology.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Blog Posts */}
        <main className="flex-1 min-w-0">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Latest Posts</h2>
          <div className="grid gap-6">
            {mockPosts.map((post) => (
              <Card key={post.id} className="group">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors mt-4">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base">{post.shortText}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="ml-auto group-hover:text-primary" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-[350px] shrink-0">
          <Sidebar
            categories={categories}
            popularPosts={mockPosts.map(({ id, title, slug, date }) => ({
              id,
              title,
              slug,
              date,
            }))}
          />
        </aside>
      </div>
    </>
  )
}
