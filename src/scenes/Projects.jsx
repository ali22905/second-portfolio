import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc, skills, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div onClick={() => {window.open(link, '_blank')}} style={{cursor: 'pointer'}} variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {desc}
        </p>
        <p className="mt-7" style={{color: "#DC4492", fontWeight: 'bold'}}>
          {skills}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I am showing you here a lot of my work.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project link="https://social-ali.vercel.app/home" skills="React - Nodejs - MongoDB" desc="share your thoughts, images, and best moments with your friends and others on this beautiful social media website" title="Social-Ali" />
          <Project link="https://shapeit-navy.vercel.app/" skills="React - APIs - MUI" desc="Shape It Gym is an online platform that provides access to over 2000 exercises for all muscle groups. Whether you have access to gym equipment or prefer home workouts, this platform caters to both options." title="Shape it gym" />

          {/* ROW 2 */}
          <Project link="https://ali-dashboard-rust.vercel.app/" desc="This is a website that serves as a dashboard for analyzing data. It includes various widgets and pages to visualize and interpret data. Additionally, there is a user authentication system using Python and Django." skills="React - Redux - Django" title="Dashboard" />
          <Project link="https://ali-minecraft.vercel.app/" skills="React - ThreeJs - zustand" desc="A simple minecraft game 😊 with ThreeJS." title="Ali Minecraft" />

          {/* ROW 3 */}
          <Project link="https://az-store.onrender.com/home" skills="TypeScript - ExpressJs - Pug" desc="I developed this Node.js e-commerce website in March 2021 as a practice project after completing a Node.js course, so I fully focused on functionalities not the UI. This was my first attempt at creating a Node.js website independently" title="AZ-store" />
          <Project link="https://memories-p0ne.onrender.com/" skills="React - Nodejs - MERN" desc="share your favorite memories among others on this simple memories sharing webstie." title="memories" />
          <Project link="https://prock1.onrender.com/home" skills="Html - Css - JavaScript" desc="A sea looking landing page." title="Prock" />
          
          {/* ROW 4 */}
          <Project link="https://template-002.web.app/" skills="Html - Css - JavaScript" desc="An owl looking landing page" title="Kasper landing" />
          <Project link="https://az-calculator.web.app/" skills="Html - Sass - JavaScript" desc="" title="Calculator" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
