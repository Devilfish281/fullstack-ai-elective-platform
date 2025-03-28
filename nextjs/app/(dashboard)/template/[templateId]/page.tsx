import { notFound } from "next/navigation";
import React from "react";

interface TemplatePageProps {
  params: Promise<{ templateId: string }>; // Changed Code
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { templateId } = await params; // Changed Code
  if (templateId !== "123") return notFound(); // Changed Code
  return <div>TemplatePage: {templateId} </div>;
}
