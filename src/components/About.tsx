const aboutStats = [
  { label: "Months of Experience", value: "9+" },
  { label: "Key Skills", value: "5+" },
  { label: "Companies Collaborated With", value: "2" },
];

const About = () => {
    return (
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            className="my-28 flex max-w-6xl flex-col justify-start space-y-10 relative isolate -z-10"
          >
            <span className="text-gradient clash-grotesk text-lg font-semibold tracking-tighter">
              👨‍💼 About
            </span>
            <h2 className="pb-2 font-light leading-normal tracking-tighter text-foreground sm:text-2xl lg:text-2xl xl:text-3xl">
            Recent Engineering Physics graduate from {" "}
              <span className="text-gradient font-semibold">
                Chalmers University
              </span>, specializing in generative AI and Python development. My master's thesis at {" "}
              <span className="text-gradient font-semibold">
                Volvo Group 
              </span> featured a groundbreaking {" "}
              <span className="text-gradient font-semibold">
                LLM-based agent 
              </span> for MF4 file analysis, capable of translating user requests into code and visualizations. Additionally, I developed an SQL analysis agent for dynamic query generation and data plotting. Skilled in ideation, prototyping, and delivering innovative solutions.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start "
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
        
    );
};

export default About;