"use client";

import { useState, useMemo } from "react";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectGrid } from "./ProjectGrid";

export function ProjectsClient({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => {
      const projectCategory = project.category || "";
      return projectCategory.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [projects, selectedCategory]);

  return (
    <>
      <ProjectFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <ProjectGrid projects={filteredProjects} />
    </>
  );
}


