import { notFound } from "next/navigation";
import React from "react";

interface TemplatePageProps {
  params: {
    templateId: string;
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  if (params.templateId != "123") return notFound();

  return <div>TemplatePage: {params.templateId} </div>;
}
