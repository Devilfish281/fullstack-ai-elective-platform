import { notFound } from "next/navigation";
import React from "react";

interface TemplatePageProps {
  params: {
    templateId: string;
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { templateId } = await Promise.resolve(params);
  if (templateId !== "123") return notFound();
  return <div>TemplatePage: {templateId} </div>;
}
