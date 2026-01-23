"use client";

import { useState, useMemo } from "react";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectGrid } from "./ProjectGrid";

export function ProjectsClient({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (!projects || projects.length === 0) {
      return [];
    }
    
    if (selectedCategory === "All") {
      return projects;
    }
    
    return projects.filter((project) => {
      const projectCategory = (project.category || "").trim();
      const selectedCategoryTrimmed = selectedCategory.trim();
      
      // Normalize both strings for comparison (trim, lowercase, handle variations)
      const normalizedProjectCategory = projectCategory.toLowerCase().replace(/\s+/g, " ");
      const normalizedSelectedCategory = selectedCategoryTrimmed.toLowerCase();
      
      // Exact match
      if (normalizedProjectCategory === normalizedSelectedCategory) {
        return true;
      }
      
      // Partial match (e.g., "Web Development" matches "Web Development" or contains it)
      if (normalizedProjectCategory.includes(normalizedSelectedCategory) || 
          normalizedSelectedCategory.includes(normalizedProjectCategory)) {
        return true;
      }
      
      return false;
    });
  }, [projects, selectedCategory]);

  return (
    <>
      <ProjectFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <ProjectGrid projects={filteredProjects} />
    </>
  );
}


