'use client';

import { useQuery } from '@apollo/client';
import { GET_CATEGORIES, GET_POPULAR_BLOGS } from '../schema/queries';
import Link from 'next/link';
import { CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Post {
  id: number
  title: string
  slug: string
  date: string
}

interface Category {
  name: string
  count: number
}

interface SidebarProps {
  categories: Category[]
  popularPosts: Post[]
}

export function Sidebar({ categories, popularPosts }: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <HoverCard key={category.name}>
                <HoverCardTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8" asChild>
                    <Link href={`/category/${category.name.toLowerCase()}`}>
                      {category.name}
                    </Link>
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {category.count} articles
                    </span>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post) => (
            <div key={post.id} className="space-y-2">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays className="h-3 w-3" />
                <span>{post.date}</span>
              </div>
              <Separator className="mt-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  )
} 