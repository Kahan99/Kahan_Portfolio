import bg from "../assets/images/bg.png";
import brain from "../assets/images/brain.png";
import foto from "../assets/images/foto.png";
import cart from "../assets/images/cart.png";
import geeks from "../assets/images/geeks.png";
import white from "../assets/images/whiteboard.png";
import cp from "../assets/projects/mockups/cp.png";
import giphy from "../assets/images/giphy.png";
import airbnb from "../assets/images/airbnb.png";
export const projects = [
  {
    name: "Personal Portfolio Website",
    slug: "personal-portfolio-website",
    description:
      "Designed and deployed a responsive personal website to showcase skills and contact information. Hosted on GitHub Pages.",
    features: [
      "Responsive design",
      "Showcase of skills and projects",
      "Contact information integration",
      "Deployed on GitHub Pages"
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://github.com/Kahan99/kahan-portfolio", // Update with actual link if available
    image: foto // Use an available image as a placeholder
  },
  {
    name: "iSchool E-Learning Platform",
    slug: "ischool-e-learning-platform",
    description:
      "Full-stack e-learning platform with quizzes, course modules, admin dashboard, and payment gateway.",
    features: [
      "Quizzes and course modules",
      "Admin dashboard",
      "Payment gateway integration (RazorPay)",
      "User authentication"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "RazorPay"],
    liveLink: "#", // Update with actual link if available
    image: brain // Use an available image as a placeholder
  },
  {
    name: "Decentralized Identity Verification System",
    slug: "decentralized-identity-verification-system",
    description:
      "Built an Ethereum smart contract-based identity verification platform for secure, immutable data storage.",
    features: [
      "Ethereum smart contract integration",
      "Secure, immutable data storage",
      "Web3.py backend",
      "Decentralized identity verification"
    ],
    techStack: ["Python", "Ethereum", "Web3.py"],
    liveLink: "#", // Update with actual link if available
    image: white // Use an available image as a placeholder
  }
];
