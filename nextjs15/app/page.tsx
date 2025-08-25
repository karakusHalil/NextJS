import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Button variant="default">Test</Button>
        <button>Test2</button>
        <Checkbox />
        <Input placeholder="Test" />
      </div>
    </>
  );
}
