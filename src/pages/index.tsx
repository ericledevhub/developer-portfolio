import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  AppWindow,
  SearchCheck,
  Database,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
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
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

{/* About Stats Constants */}
const aboutStats = [
  { label: "Months of Experience", value: "9+" },
  { label: "Key Skills", value: "5+" },
  { label: "Companies Collaborated With", value: "2" },
];

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

{/* Project LLM Agents Constants*/}
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
    title: "MF4 Agent Linear Regression Scatter Plot",
    description: "MF4 Agent Linear Regresion Scatter Plot",
    image: "/assets/llm_agents/MF4PersonalPortfolio2.webp",
    href: "https://github.com/ericledevhub/mf4agent",
  },
  {
    title: "MF4 Agent 2D Histogram Plot",
    description: "MF4 Agent 2D Histogram Plot",
    image: "/assets/llm_agents/MF42DHistgram.png",
    href: "https://github.com/ericledevhub/mf4agent",
  },
];

{/* Expertise Constants */}
const expertise = [
  {
    service: "LLM Agent Development",
    description:
      "Creating LLM agents using Langchain, Llama Index, and OpenAI Mistral to enhance user interactions.",
    icon: Code2,
  },
  {
    service: "LLM-Powered Python Applications",
    description:
      "Developing Python applications with LLM integration, using Streamlit, Chainlit, and Taipy.",
    icon: AppWindow,
  },
  {
    service: "Deployment",
    description:
      "Seamlessly deploying applications and services to production environments.",
    icon: MonitorSmartphone,
  },
  {
    service: "Data analytics",
    description:
      "Extracting insights from SQL databases to inform decision-making.",
    icon: Database,
  },
  {
    service: "Willingness To Learn ",
    description:
      "Continously learning and adapting to new frameworks and technologies.",
    icon: SearchCheck,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [carouselApiGANs, setCarouselApiGANs] = useState<CarouselApi | null>(null);
  const [currentGANs, setCurrentGANs] = useState<number>(0);
  const [countGANs, setCountGANs] = useState<number>(0);

  const [carouselApiLLMs, setCarouselApiLLMs] = useState<CarouselApi | null>(null);
  const [currentLLMs, setCurrentLLMs] = useState<number>(0);
  const [countLLMs, setCountLLMs] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  {/* About text me*/}
  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>Generative AI</span>
              <span className={styles.pill}>LLMs</span>
              <span className={styles.pill}>Python Applications</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Eric Le.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                  An innovative Generative AI developer with expertise in LLMs and data analysis. 
                  Skilled in developing and deploying python applications with a strong problem-solving mindset.  
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:ericledat00@outlook.com" target="_blank" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10 relative isolate -z-10"
          >
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ About
            </span>
            <h2 className="pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[32px]">
            Recent Engineering Physics graduate from Chalmers University, specializing in generative AI and Python development. My master's thesis at Volvo Group featured a groundbreaking LLM-based AI agent for MF4 file analysis, capable of translating user requests into code and visualizations. Additionally, I developed an SQL analysis agent for dynamic query generation and data plotting. Skilled in ideation, prototyping, and delivering innovative solutions.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
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
          <div data-scroll data-scroll-speed=".4" data-scroll-position="top" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              🚀 Featured Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Generative AI projects.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Dive into my portfolio of generative AI projects, from realistic image generation to LLM-based agent chatbots.<br></br>
              Explore some of my standout creations below:            
            </p>

            {/* Carousel GANs*/}
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
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
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
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
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
          </div>
        </section>


        {/* Section Expertise */}
        <section id="expertise" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Looking for more details?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I&apos;ve got you covered.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                Discover the expertise I bring to the table. 
                </p>
              </div>
              {expertise.map((expertise) => (
                <div
                  key={expertise.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <expertise.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {expertise.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {expertise.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s collaborate{" "}
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
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
