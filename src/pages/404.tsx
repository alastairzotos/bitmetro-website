import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center gap-12 mt-12">
      <h4>Page not found</h4>
      <Button
        as={Link}
        href="/"
        size="md"
        variant="solid"
        color="success"
        className="w-[200px]"
      >
        Return Home
      </Button>
    </div>
  )
}
