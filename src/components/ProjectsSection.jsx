import { ArrowRight, ExternalLink, Github } from "lucide-react";
import p1Image from "@/assets/p3.webp";
import p2Image from "@/assets/p2.avif";
import p3Image from "@/assets/p3.jpg";
import p4Image from "@/assets/p4.png";
import p5Image from "@/assets/p5.webp";
import p6Image from "@/assets/p6.jpg";

const projects = [
 
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: p1Image,
    tags: ["React", "Node.js","RazorPay","Stripe","MongoDB","Cloudinary"],
    demoUrl: "#",
    githubUrl: "https://github.com/VarshaGnanasekar/E-Commerce",
  },
  {
    id: 2,
    title: "JOSAA",
    description:
      "A C-based console application that simulates the JOSAA seat allocation process based on candidate rank, category, and preferences, following real-world admission logic.",
    image: p2Image,
    tags: ["C"],
    demoUrl: "#",
    githubUrl: "https://github.com/VarshaGnanasekar/JOSAA",
  },
  {
    id: 3,
    title: "Hospital Management system",
    description:
      "The Hospital Management System is a Java-based console application that manages core hospital operations like patient registration, doctor assignment, and admin access.",

    image: p3Image,
    tags: ["Java",],
    demoUrl: "#",
    githubUrl: "https://github.com/VarshaGnanasekar/HospitalManagementSystem",
  },
  {
    id: 4,
    title: "Suduko-Solver",
    description:
     "This project is a Sudoku game built using Python and Pygame. It features an interactive 9x9 grid where users can play Sudoku with different difficulty levels (Easy to Expert).",
    image: p4Image,
    tags: ["Python","Pygame"],
    demoUrl: "#",
    githubUrl: "https://github.com/VarshaGnanasekar/sudokosaga",
  },
  {
    id: 5,
    title: "Quick-Quiz",
    description:
     "This project is a Quiz app that allows user to answer multiple questions and provides the final score of the user after completing the game .",
    image: p5Image,
    tags: ["HTML","CSS","JS"],
    demoUrl: "#",
    githubUrl: "https://github.com/VarshaGnanasekar/QUIZ_APP",
  },
  {
    id: 5,
    title: "Collect the square",
    description:
    "This is an interactive Pygame-based arcade game where the player controls a square character using keyboard arrows to collect randomly positioned red items within a limited time.",
    image: p6Image,
    tags: ["Python","Pygame"],
    demoUrl: "#",
    githubUrl: "https://github.com/VarshaGnanasekar/collect_the_squares",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/VarshaGnanasekar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};