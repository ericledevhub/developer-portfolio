import { useEffect, useRef, Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";



{/* GANs Project Constants*/}
const projects_about_GANs = [
    {
      title: "Pokemon Sketch Coloring",
      description: "Sketch Coloring",
      image: "/assets/gans/bulbasor_sketch.webm",
      href: "https://github.com/ericledevhub/GenerativeAI-GANs/tree/main/PIX2PIX",
    },
    {
      title: "Collection Style Transfer",
      description: "Collection Style Transfer",
      image: "/assets/gans/example_collection_artistic_styles.png",
      href: "https://github.com/ericledevhub/GenerativeAI-GANs/tree/main/CYCLEGAN",
    },
    {
      title: "Horse to Zebra",
      description: "Horse To Zebra",
      image: "/assets/gans/horse2zebra.webm",
      href: "https://github.com/ericledevhub/GenerativeAI-GANs/tree/main/CYCLEGAN",
    },
    {
      title: "Semantic to facades",
      description: "Semantic to facades",
      image: "/assets/gans/example_facades.png",
      href: "https://github.com/ericledevhub/GenerativeAI-GANs/tree/main/PIX2PIX",
    },
  ];
  
  const projects_about_llm_agents = [
    {
      title: "SQL Agent Distribution",
      description: "SQL Agent Distribution Plot",
      image: "/assets/llm_agents/ChinookDatabasePersonalPortfolio1.webp",
      href: "https://github.com/ericledevhub/sqlagent",
    },
    {
      title: "SQL Agent Pie Chart",
      description: "SQL Agent Pie Chart Plot",
      image: "/assets/llm_agents/ChinnokDatabasePersonalPortfolioPieChart.png",
      href: "https://github.com/ericledevhub/sqlagent",
    },
    {
      title: "MF4 Agent 2D Histogram Plot",
      description: "MF4 Agent 2D Histogram Plot",
      image: "/assets/llm_agents/MF42DHistgram.png",
      href: "https://github.com/ericledevhub/mf4agent",
    },
    {
      title: "MF4 Agent Linear Regression Scatter Plot",
      description: "MF4 Agent Linear Regresion Scatter Plot",
      image: "/assets/llm_agents/MF4PersonalPortfolio2.webp",
      href: "https://github.com/ericledevhub/mf4agent",
    },
  ];

  const Projects = () => {
    const [carouselApiGANs, setCarouselApiGANs] = useState<CarouselApi | null>(null);
    const [currentGANs, setCurrentGANs] = useState<number>(0);
    const [countGANs, setCountGANs] = useState<number>(0);
  
    const [carouselApiLLMs, setCarouselApiLLMs] = useState<CarouselApi | null>(null);
    const [currentLLMs, setCurrentLLMs] = useState<number>(0);
    const [countLLMs, setCountLLMs] = useState<number>(0);


    useEffect(() => {
        if (!carouselApiGANs) return;

        setCountGANs(carouselApiGANs.scrollSnapList().length);
        setCurrentGANs(carouselApiGANs.selectedScrollSnap() + 1);

        carouselApiGANs.on("select", () => {
        setCurrentGANs(carouselApiGANs.selectedScrollSnap() + 1);
        });
    }, [carouselApiGANs]);

    useEffect(() => {
        if (!carouselApiLLMs) return;

        setCountLLMs(carouselApiLLMs.scrollSnapList().length);
        setCurrentLLMs(carouselApiLLMs.selectedScrollSnap() + 1);

        carouselApiLLMs.on("select", () => {
        setCurrentLLMs(carouselApiLLMs.selectedScrollSnap() + 1);
        });
    }, [carouselApiLLMs]);

    return (  
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          {/* Project Div*/}
          <div 
            data-scroll 
            data-scroll-speed=".4" 
            data-scroll-position="top" 
            className="my-32"
          >
            <span className="text-gradient clash-grotesk text-lg font-semibold tracking-tighter">
              🚀 Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Generative AI projects.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Dive into my portfolio of generative AI projects, from realistic image generation to LLM-based agent chatbots.<br></br>
              Explore some of my standout creations below:            
            </p>

            {/* Carousel GANs*/}
            <motion.div
              initial={{ opacity: 0, y: -20, x:-20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
            >
            <div className="mt-14">
              <Carousel setApi={setCarouselApiGANs} className="w-full">
                <CarouselContent>
                  {projects_about_GANs.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>

                        <div className="relative group">
                          <CardContent 
                            className="absolute bottom-0 w-full bg-background/50 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                              {project.description}
                            </CardTitle>
                          </CardContent>
                        </div>
                        
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-4 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {currentGANs} / {countGANs}
                </span>{" "}
                  Realistic Image Generation Slides
              </div>

              {/* Carousel LLM*/}
              <Carousel setApi={setCarouselApiLLMs} className="w-full mt-14">
                <CarouselContent>
                  {projects_about_llm_agents.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>

                        <div className="relative group">
                          <CardContent 
                            className="absolute bottom-0 w-full bg-background/50 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                              {project.description}
                            </CardTitle>
                          </CardContent>
                        </div>

                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-4 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {currentLLMs} / {countLLMs}
                </span>{" "}
                  LLM Agent Slides
              </div>
              
            </div>

          </motion.div>
          </div>
        </section>
    );
};

export default Projects;