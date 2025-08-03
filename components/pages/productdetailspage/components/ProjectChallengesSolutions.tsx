// ProjectChallengesSolutions.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectChallengesSolutionsProps {
  challenges: string[];
  solutions: string[];
}

export const ProjectChallengesSolutions: React.FC<ProjectChallengesSolutionsProps> = ({ challenges, solutions }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-8"
  >
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-error-600 dark:text-error-400">Challenges</h3>
        <ul className="space-y-3">
          {challenges.map((challenge, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0" />
              {challenge}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-success-600 dark:text-success-400">Solutions</h3>
        <ul className="space-y-3">
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
              {solution}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);