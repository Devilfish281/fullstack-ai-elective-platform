import { notFound } from "next/navigation";
import React from "react";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>; // Changed Code
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params; // Changed Code
  if (projectId !== "123") return notFound(); // Changed Code
  return <div>ProjectPage: {projectId} </div>;
}
