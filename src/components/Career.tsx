import {
  GraduationCap,
  Plane,
  Star,
  Volume2,
} from "lucide-react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SiVolvo } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";

const careerData = [
  {
    date: " 27 Sep 2024 - 28 Sep 2024",
    icon: <LiaHackerrank />,
    title: "LLM Hackathon, Organized by Gradient Descent | KTH Royal Institute of Technology",
    subtitle: "Stockholm, SE",
    description: "At this hackathon, I built an LLM-powered PDF assistant that generates summaries, explains concepts, and visualizes tables, making information more accessible and user-friendly."
  },
  {
    date: " 11 Sep 2024",
    icon: <Volume2 />,
    title: "Speaker at the Generative AI Conference for Automotive, Hosted by Automotive IQ",
    subtitle: "Detroit, USA",
    description: "Delivered a remote presentation of my master's thesis, accompanied by my supervisor, who represented Volvo in person at the event."
  },
  {
    date: "Jun 2024 - Sep 2024",
    icon: <SiVolvo />,
    title: "Summer Worker at Volvo Group Technology",
    subtitle: "Gothenburg, SE",
    description: "As a summer worker, I developed an LLM-based SQL agent that automates query generation, simplifying data extraction and visualization."
  },
  {
    date: "Jan 2024 - Jun 2024",
    icon: < SiVolvo />,
    title: "Master's Thesis at Volvo Group Technology",
    subtitle: "Gothenburg, SE",
    description: "For my master’s thesis, I created an LLM-driven MF4 agent to streamline data analysis, providing practical solutions that enhance decision-making at Volvo."
  },
  {
    date: "Jun 2023 - Aug 2023",
    icon: < Plane />,
    title: "Internship at BHSOFT Company",
    subtitle: "Hanoi, VN",
    description: "As a summer intern, I researched and implemented Generative Adversarial Networks (GANs) for the creation of realistic images."
  },
  {
    date: "Aug 2022 - Jun 2024",
    icon: < GraduationCap />,
    title: "Master's Degree in Complex Adaptive Systems",
    subtitle: "Chalmers University, Gothenburg, SE",
    description: "I graduated with a master’s in Machine Learning and AI, focusing on innovative solutions for complex systems."
  },
  {
    date: "Aug 2019 - Jun 2022",
    icon: < GraduationCap />,
    title: "Bachelor's Degree in Engineering Physics",
    subtitle: "Chalmers University, Gothenburg, SE",
    description: "I earned my bachelor’s in Engineering Physics, where I really developed my analytical skills and found a passion for tackling complex problems head-on."
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