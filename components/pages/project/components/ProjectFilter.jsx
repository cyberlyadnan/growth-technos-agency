"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// const categories = [/*...*/];
const categories = [
  "All",
  "Web Development",
  "Digital Marketing",
  "Branding",
  "Mobile Development",
  "UI/UX Design",
];

export function ProjectFilter() {
  const [selected, setSelected] = useState("All");
  return (
    <div className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 justify-center flex-wrap">
          {categories.map(category => (
            <Button key={category}
              variant={selected === category ? "default" : "outline"}
              onClick={() => setSelected(category)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />{category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
