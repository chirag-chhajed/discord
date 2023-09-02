import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex ">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button variant={"ghost"}>Click me</Button>
    </div>
  );
}
