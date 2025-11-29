"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FolderKanban, MessageSquare, TrendingUp, Sparkles } from "lucide-react";

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    services: 0,
    projects: 0,
    inquiries: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [servicesSnapshot, projectsSnapshot, inquiriesSnapshot] = await Promise.all([
          getDocs(collection(db, "services")),
          getDocs(collection(db, "projects")),
          getDocs(collection(db, "inquiries")),
        ]);

        setStats({
          services: servicesSnapshot.size,
          projects: projectsSnapshot.size,
          inquiries: inquiriesSnapshot.size,
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Services",
      value: stats.services,
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-500",
      href: "/dashboard/services",
    },
    {
      title: "Projects",
      value: stats.projects,
      icon: FolderKanban,
      gradient: "from-purple-500 to-pink-500",
      href: "/dashboard/projects",
    },
    {
      title: "Inquiries",
      value: stats.inquiries,
      icon: MessageSquare,
      gradient: "from-green-500 to-emerald-500",
      href: "/dashboard/inquiries",
    },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-foreground/60">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="relative overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-foreground/70">{stat.title}</CardTitle>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                {stats.loading ? (
                  <div className="h-12 flex items-center">
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-foreground/60">Total {stat.title.toLowerCase()}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Quick Actions
          </CardTitle>
          <CardDescription>Manage your content efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/dashboard/services"
              className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Briefcase className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Manage Services</h3>
              <p className="text-sm text-foreground/60">Add, edit, or delete services</p>
            </a>
            <a
              href="/dashboard/projects"
              className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <FolderKanban className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Manage Projects</h3>
              <p className="text-sm text-foreground/60">Add, edit, or delete projects</p>
            </a>
            <a
              href="/dashboard/inquiries"
              className="p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <MessageSquare className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">View Inquiries</h3>
              <p className="text-sm text-foreground/60">Review and respond to inquiries</p>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

