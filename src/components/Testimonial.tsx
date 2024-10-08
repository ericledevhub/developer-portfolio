// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge'
import { indigo } from '@mui/material/colors';
import { motion } from "framer-motion";

import { styled } from '@mui/material/styles';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 33,
  height: 33,
  border: `2px solid ${theme.palette.background.paper}`,
}));


{/* Testamonials Constants*/}
const reviews = [
    {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Behrooz Razaznejad',
        text: "In his Master's Thesis project, Eric has been working with exploring the adaptation of Large Language Models (LLMs) for Logged Vehicle Data Analyais. More specific the goal of Eric's Master's Thesis has been to customize and integrate an LLM-based system to automate the resource intensive data analysis process and enhance efficiancy by constructing a multicomponent agent that incoprates prompt enginnering techniques.",
        text2: "",
        role: 'Team Manager @ Volvo Group Technology',
        initials: "BR",
        avatar_color: "#7b82fe",
        title: "Master's Thesis Project Description",
      },

    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Behrooz Razaznejad',
      text: "Eric's performance has fully met the expectations set by his supervisor. Eric has put significant effort into developing the multi-component agent and almost single-handedly made all the implementations. He has been very quick in understanding the fundamentals of data analytics and translated that efficiently into the agentic architecture. ",
      text2: "Eric has also overdelivered in a few technical areas, such as developing a GUI layout, which will be very important for the future usage of the agent from a Volvo perspective.",
      role: 'Team Manager @ Volvo Group Technology',
      initials: "BR",
      avatar_color: "#7b82fe",
      title: "Master's Thesis Project Performance",
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Masoom Kumar',
        text: 'On the personal side, Eric is quite a direct person and does not hold back regarding his perspective about different aspects of his work. He is very passionate about his work and makes extraordinary efforts to ensure the outcomes of his projects are successful.',
      text2: "",
      role: 'Team Lead @ Volvo Group Technology',
      initials: "MK",
      avatar_color: indigo[900],
      title: "Personality",
    },
  ];


const Testimonials = () => {
return (
    <section id="testimonials" data-scroll-section>
      <div 
      data-scroll
      data-scroll-speed=".4"
      className="mx-auto flex flex-col justify-center h-screen my-18 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            staggerChildren: 0.5,
          }}
          viewport={{ once: true }}
          className=""
          >
            <div className="select-none px-4 bg-white/5 p-14 shadow-md backdrop-blur rounded-xl gap-4">
                <div className="py-2 px-15">
                    <Splide
                        options={{
                            perPage: 1,
                            autoplay: true,
                            speed: 2000,
                            rewind: true,
                            rewindByDrag: true,
                            type: 'loop',
                        }}
                    >
                        {reviews.map((review) => (
                            <SplideSlide 
                                className="relative flex flex-col items-center justify-center py-10 px-4 sm:px-12 lg:px-16" 
                                key={review.id}
                            >
                                <div className="absolute top-6 w-full transition duration-300 hover:-translate-y-0.5">
                                    <p className="text-lg md:text-xl font-semibold text-gradient text-center w-full">{review.title}</p>                    
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center mt-6 lg:mt-10 px-10">
                                    <div className="col-span-1 flex justify-center px-4 py-6 md:px-10 lg:px-12">

                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            badgeContent={
                                                <SmallAvatar src="/assets/graphics/volvo.jpg" className="transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"/>
                                            }
                                            >
                                            <Avatar                                     
                                                className="mb-4 font-bold transition duration-300 hover:-translate-y-0.5 hover:bg-white/10" 
                                                sx={{
                                                  bgcolor: review.avatar_color,
                                                  width: { xs: 80, sm: 100 },  
                                                  height: { xs: 80, sm: 100 }, 
                                                }}
                                                >
                                                    {review.initials}
                                            </Avatar>

                                        </Badge>
                                    </div>

                                    <div className="col-span-1 md:col-span-9 px-4">

                                        <div className="text-base px-6 md:px-10 lg:px-12 transition duration-300 hover:-translate-y-0.5">
                                            <p className="user-message clash-grotesk">{review.text}<br/><br/>{review.text2}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="user-info flex items-center text-center pt-8 p-4 transition duration-300 hover:-translate-y-0.5">
                                  <svg
                                    className="mr-2 h-8 w-8 text-gray-400 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 14"
                                  >
                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                  </svg>

                                  <p className="text-muted-foreground text-base sm:text-base">
                                    {review.name}, {review.role}
                                  </p>
                                </div>


                            </SplideSlide>
                        ))}

                    </Splide>
                </div>
            </div>

          </motion.div>
        </div>

    </section>
  );
};

export default Testimonials;

