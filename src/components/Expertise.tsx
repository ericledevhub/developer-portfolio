import {
  Code2,
  AppWindow,
  SearchCheck,
  Database,
  MonitorSmartphone,
} from "lucide-react";

import { motion } from "framer-motion";


const expertise = [
  {
    headericon: Code2,
    service: "LLM Agent Development",
    description: "Creating LLM agents using Langchain, Llama Index, OpenAI, and Mistral.",
    visualicons: [
        "/assets/graphics/langchain.svg", 
        "/assets/graphics/llamaindex.svg",
        "/assets/graphics/huggingface.svg",
        "/assets/graphics/chatgpt.svg",
        "/assets/graphics/mistral.svg",
    ],
    visualiconstext: [
        "langchain", 
        "llamaindex",
        "huggingface",
        "openai",
        "mistral",
    ],
  },
  {
    headericon: AppWindow,
    service: "Application Development",
    description:
      "Developing LLM-integrated applications, using backend and frontend framworks.",
    visualicons: [
        "/assets/graphics/streamlit.svg", 
        "/assets/graphics/chainlit.svg",
        "/assets/graphics/nodejs.svg",
        "/assets/graphics/react.svg",
        "/assets/graphics/typescript.svg",
        "/assets/graphics/tailwindcss.svg",
    ],
    visualiconstext: [
        "streamlit", 
        "chainlit",
        "nodejs",
        "react",
        "typescript",
        "tailwindcss",
    ],
  },
  {
    headericon: MonitorSmartphone,
    service: "Deployment",
    description:
      "Seamlessly deploying applications and services to production environments.",
    visualicons: [
        "/assets/graphics/kubernetes.svg", 
        "/assets/graphics/netlify.svg",
        "/assets/graphics/vercel.svg", 
    ],
    visualiconstext: [
        "kubernetes", 
        "netlify",
        "vercel",
    ],
  },
  {
    headericon: Database,
    service: "Data Analytics",
    description:
      "Extracting insights from SQL databases to inform decision-making.",
    visualicons: [
        "/assets/graphics/sqlite.svg",
        "/assets/graphics/postgres.svg", 
        "/assets/graphics/milvus.svg", 
        "/assets/graphics/pandas.svg", 
        "/assets/graphics/excel.svg", 
        "/assets/graphics/python.svg", 
    ],
    visualiconstext: [
        "sqlite",
        "postgres", 
        "milvus", 
        "pandas", 
        "excel",
        "python",
    ],
  },
  {
    headericon: SearchCheck,
    service: "Willingness To Learn ",
    description:
      "Continously learning and adapting to new frameworks and technologies.",
    visualicons: [
      "/assets/graphics/learn.svg",
      "/assets/graphics/criticalthinking.svg",

    ],
    visualiconstext: [
      "learning",
      "critical thinking", 
    ],
  },
];

const Expertise = () => {    
    return(
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
                  <expertise.headericon className="my-6 text-primary" size={20} />

                  <span className="text-lg tracking-tight text-foreground">
                    {expertise.service}
                  </span>

                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {expertise.description}
                  </span>
                    
                  <div className="flex gap-4 mt-2 justify-center pt-2"> {/* Added justify-center for horizontal centering */}
                    {expertise.visualicons.map((icon, idx) => (
                      <div key={idx} className="flex flex-col items-center"> {/* This keeps the icon and text centered vertically */}
                        <img 
                            src={icon} 
                            alt={expertise.visualiconstext[idx]} 
                            className="w-5 h-5" // You can adjust the size as needed
                        />

                        <span className="mt-1 text-[12px] text-muted-foreground">
                            {expertise.visualiconstext[idx]} {/* New span for text */}
                        </span>

                      </div>
                    ))}
                </div>

              </div>
              ))}

            </motion.div>
          </div>
        </section>
    );
};

export default Expertise;