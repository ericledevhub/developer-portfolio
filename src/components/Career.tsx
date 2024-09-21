import {
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SiVolvo } from "react-icons/si";


const Career = () => {
    return (
        <section id="career" data-scroll-section>
        <div
            data-scroll
            data-scroll-speed=".4"
            className="my-28 space-y-10 relative"
            >
            <span className="text-gradient clash-grotesk text-lg font-semibold tracking-tighter">
              ✨ Career
            </span> 
            <VerticalTimeline lineColor={'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))'}>

              <VerticalTimelineElement
                className="vertical-timeline-element--work clash-grotesk transition duration-300 hover:-translate-y-1.5"
                contentStyle={{ background: 'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))'
                }}
                contentArrowStyle={{ borderRight: '7px solid  hsl(237, 99%, 74%)' }}
                date="Jun 2024- Sep 2024"
                icon={<SiVolvo />}
              >
                <h3 className="vertical-timeline-element-title font-semibold">Summer Worker @ Volvo Group Technology</h3>
                <h4 className="vertical-timeline-element-subtitle font-base">Gothenburg, SE</h4>
                <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                Developed an LLM-based SQL agent for automated query generation, facilitating efficient data extraction and visualization.
                </p>
              </VerticalTimelineElement>            
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work clash-grotesk transition duration-300 hover:-translate-y-1.5"
                contentStyle={{ background: 'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))'
                }}
                contentArrowStyle={{ borderRight: '7px solid  hsl(237, 99%, 74%)' }}
                date="Jan 2024- Jun 2024"
                icon={<SiVolvo />}
              >
                <h3 className="vertical-timeline-element-title font-semibold">Master's Thesis @ Volvo Group Technology</h3>
                <h4 className="vertical-timeline-element-subtitle font-base">Gothenburg, SE</h4>
                <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                Engineered an LLM-driven MF4 agent and application to streamline data analysis processes.
                </p>
              </VerticalTimelineElement>            
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work clash-grotesk transition duration-300 hover:-translate-y-1.5"
                contentStyle={{ background: 'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))'
                }}
                contentArrowStyle={{ borderRight: '7px solid  hsl(237, 99%, 74%)' }}
                date="Jun 2023- Aug 2023"
                iconStyle={{ background: 'hsla(237, 99%, 74%, 0.1', color: '#fff' }}
                icon={<Briefcase />}
              >
                <h3 className="vertical-timeline-element-title font-semibold">Internship @ BHSOFT Company</h3>
                <h4 className="vertical-timeline-element-subtitle font-base">Hanoi, VN</h4>
                <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                Researched and implemented Generative Adversarial Networks (GANs) for the creation of realistic images.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work clash-grotesk transition duration-300 hover:-translate-y-1.5"
                contentStyle={{ background: 'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))'
                }}
                contentArrowStyle={{ borderRight: '7px solid  hsl(237, 99%, 74%)' }}
                date="Aug 2022- Jun 2024"
                iconStyle={{ background: 'hsla(237, 99%, 74%, 0.1', color: '#fff' }}
                icon={<GraduationCap />}
              >
                <h3 className="vertical-timeline-element-title font-semibold">Master's Degree in Complex Adaptive Systems</h3>
                <h4 className="vertical-timeline-element-subtitle font-base">Chalmers University, Gothenburg, SE</h4>
                <p className="text-muted-foreground" style={{ fontWeight: 400 }}>
                Specialized in Machine Learning and Artificial Intelligence.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work clash-grotesk transition duration-300 hover:-translate-y-1.5"
                contentStyle={{ background: 'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))'
                }}
                contentArrowStyle={{ borderRight: '7px solid  hsl(237, 99%, 74%)' }}
                date="Aug 2019- Jun 2022"
                iconStyle={{ background: 'hsla(237, 99%, 74%, 0.1', color: '#fff' }}
                icon={<GraduationCap />}
              >
                <h3 className="vertical-timeline-element-title font-semibold">Bachelor's Degree in Engineering Physics </h3>
                <h4 className="vertical-timeline-element-subtitle font-base">Chalmers University, Gothenburg, SE</h4>
                <p className="text-muted-foreground " style={{ fontWeight: 400 }}>
                Focused on theoretical mathematics and physics.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work clash-grotesk transition duration-300 hover:-translate-y-1.5"
                iconStyle={{ background: 'hsla(237, 99%, 74%, 0.1', color: '#fff' }}
                icon={<Star />}
              />
            </VerticalTimeline>

          </div>
        </section>
    );
};

export default Career;