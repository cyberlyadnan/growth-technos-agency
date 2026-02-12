"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface BlogSearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export default function BlogSearchFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: BlogSearchFilterProps) {
  return (
    <section className="sticky top-16 z-20 py-4 sm:py-6 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:pl-10 h-11 bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/50"
              aria-label="Search blog articles"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "rounded-full bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg shadow-primary/25"
                    : "rounded-full border-border/60 hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

