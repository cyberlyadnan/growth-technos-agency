"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: any;
}

export default function BlogPostCard({ post }: Props) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="aspect-video relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
          <span>{post.readTime}</span>
          <span>{new Date(post.date).toLocaleDateString('en-US')}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.author}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag: string, i: number) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Button asChild size="sm" className="w-full">
          <Link href={`/blog/${post.id}`}>
            Read More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
