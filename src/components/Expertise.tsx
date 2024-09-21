import {
  Code2,
  AppWindow,
  SearchCheck,
  Database,
  MonitorSmartphone,
} from "lucide-react";

import { motion } from "framer-motion";

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
    );
};

export default Expertise;