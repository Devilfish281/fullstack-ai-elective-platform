import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-red-500 text-white">
        Hello Matthew from new project
      </div>
      <Button variant="destructive">Click me ME</Button>
      <h1>Next.js + TypeScript</h1>
      <Image src="/logo.png" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
