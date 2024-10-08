import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (<footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
    <div className="container mx-auto flex flex-row items-center justify-between py-6">
      <span className="flex flex-row items-center space-x-4">
        <p className="text-xs text-muted-foreground">
          Gothenburg, {" "}
          <Link
            href="#"
            onClick={(e) => e.preventDefault()}    
            className="text-foreground transition hover:text-primary text-sm font-semibold"
          >
            Sweden
          </Link>
        </p>
        <hr className="hidden h-6 border-l border-muted md:flex" />
        <span className="flex hidden flex-row items-center space-x-2 md:flex">
          <p className="text-xs text-muted-foreground">Local time:</p>
          <p className="text-sm font-semibold">{time} UTC+1</p>
        </span>
      </span>
      <div className="flex flex-row space-x-2">
        <Link
          href="mailto:ericledat00@outlook.com"
          target="_blank"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} className="border border-gray-300 px-3 py-1 mt-1">
            <MailIcon className="h-3 w-3 md:mr-2" />
            <span className="hidden md:flex text-xs">ericledat00@outlook.com</span>
          </Button>
        </Link>
        <Link
          href="https://github.com/ericledevhub"
          target="_blank"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
        <Button variant={"outline"} className="border border-gray-300 hover:bg-gray-800 hover:text-white px-3 py-1 mt-1">
          <GitHubLogoIcon className="h-3 w-3 md:mr-2" />
            <span className="hidden md:flex text-xs">GitHub</span>
          </Button>
        </Link>
        <Link
          href="https://linkedin.com/in/eric-le-"
          target="_blank"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} className="border border-gray-300 hover:text-white px-3 py-1 mt-1" >
          <LinkedInLogoIcon className="h-3 w-3 md:mr-2" />
            <span className="hidden md:flex text-xs">LinkedIn</span>
          </Button>
        </Link>
      </div>
    </div>
    <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
  </footer>  
  );
}
