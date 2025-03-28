import { notFound } from "next/navigation";
import React from "react";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  if (params.projectId != "123") return notFound();

  return <div>ProjectPage: {params.projectId} </div>;
}
