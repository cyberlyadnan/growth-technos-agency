"use client";
import { Button } from "@/components/ui/button";
import { Filter, Sparkles } from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "Digital Marketing",
  "Branding",
  "Mobile Development",
  "UI/UX Design",
];

export function ProjectFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="relative py-8 bg-gradient-to-b from-background/95 to-background border-b border-border/50 sticky top-16 z-40 backdrop-blur-sm">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-foreground/70 mr-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className={`relative overflow-hidden transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg shadow-primary/20"
                  : "border-border/50 hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {selectedCategory === category && (
                <Sparkles className="w-3 h-3 mr-1.5" />
              )}
              {category}
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
