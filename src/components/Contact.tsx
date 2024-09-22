import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contact = () => {
    return (    
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m open to new opportunities and eager to
              discuss new exciting projects.
            </p>
            <Link href="mailto:ericledat00@outlook.com" target="_blank" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
    );
};

export default Contact;