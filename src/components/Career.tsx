import {
  GraduationCap,
  Plane,
  Star,
} from "lucide-react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SiVolvo } from "react-icons/si";


const careerData = [
  {
    date: "Jun 2024 - Sep 2024",
    icon: <SiVolvo />,
    title: "Summer Worker @ Volvo Group Technology",
    subtitle: "Gothenburg, SE",
    description: "Developed an LLM-based SQL agent for automated query generation, facilitating efficient data extraction and visualization."
  },
  {
    date: "Jan 2024 - Jun 2024",
    icon: < SiVolvo />,
    title: "Master's Thesis @ Volvo Group Technology",
    subtitle: "Gothenburg, SE",
    description: "Engineered an LLM-driven MF4 agent and application to streamline data analysis processes."
  },
  {
    date: "Jun 2023 - Aug 2023",
    icon: < Plane />,
    title: "Internship @ BHSOFT Company",
    subtitle: "Hanoi, VN",
    description: "Researched and implemented Generative Adversarial Networks (GANs) for the creation of realistic images."
  },
  {
    date: "Aug 2022 - Jun 2024",
    icon: < GraduationCap />,
    title: "Master's Degree in Complex Adaptive Systems",
    subtitle: "Chalmers University, Gothenburg, SE",
    description: "Specialized in Machine Learning and Artificial Intelligence."
  },
  {
    date: "Aug 2019 - Jun 2022",
    icon: < GraduationCap />,
    title: "Bachelor's Degree in Engineering Physics",
    subtitle: "Chalmers University, Gothenburg, SE",
    description: "Focused on theoretical mathematics and physics."
  },
];

const Career = () => {
    return (    <section id="career" data-scroll-section>
      <div data-scroll data-scroll-speed=".4" className="my-28 space-y-10 relative">
        <span className="text-gradient text-lg font-semibold tracking-tighter">
          ✨ Career
        </span> 
        <VerticalTimeline lineColor={'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))'}>
          {careerData.map((job, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work transition duration-300 hover:-translate-y-1.5"
              contentStyle={{ background: 'linear-gradient(to bottom right, hsla(237, 99%, 74%, 0.065), hsla(0, 0%, 100%, 0.05))' }}
              contentArrowStyle={{ borderRight: '7px solid  hsl(237, 99%, 74%)' }}
              date={job.date}
              icon={job.icon}
            >
              <h3 className="vertical-timeline-element-title font-semibold">{job.title}</h3>
              <h4 className="vertical-timeline-element-subtitle font-base">{job.subtitle}</h4>
              <p className="text-muted-foreground font-normal" style={{ fontSize: "14px" }}>
                {job.description}
              </p>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            className="vertical-timeline-element--work clash-grotesk transition duration-300 hover:-translate-y-1.5"
            iconStyle={{ background: 'hsla(237, 99%, 74%, 0.1)', color: '#fff' }}
            icon={<Star />}
          />
        </VerticalTimeline>
      </div>
    </section>
    );
};

export default Career;