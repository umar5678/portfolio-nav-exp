import teslaImg from "./tesla-clone.jpg";
import coinAppImg from "./coin-app.jpg";
import reactCartImg from "./react-cart.jpg";
import nikeShoeImg from "./nikeshoe.jpg";

const featuredProjects = [
  {
    id: 1,
    title: "Tesla Clone",
    description:
      "Project Tesla UI Clone: A demonstration project showcasing a clone of the Tesla user interface. Developed using HTML, SCSS, JavaScript, and Firebase, and hosted on GitHub. Explore this example project to see a replica of Tesla's sleek user interface design.",
    url: "https://tesla-ui-clone-ten.vercel.app/",
    repo: "https://github.com/umar5678/Tesla-Clone",
    img: `${teslaImg}`,
    tech: ["html", "scss", "javascript", "firebase"],
  },
  {
    id: 2,
    title: "NikeShoe",
    description:
      "NikeShoe Project: A web application project centered around Nike shoe products. Built with Tailwind CSS and React, it is deployed on Vercel for a seamless online experience. Discover this project to explore Nike's footwear collection in a dynamic and user-friendly interface.",
    url: "https://nike-shoe-rho.vercel.app/",
    repo: "https://github.com/umar5678/NikeShoe",
    img: `${nikeShoeImg}`,
    tech: ["html", "Tailwindcss", "React", "vercel"],
  },

  {
    id: 3,
    title: "Coin App",
    description:
      "Cion App: An application project, developed using React, SCSS, and JavaScript. The app is deployed on Vercel for easy access. Dive into this project to experience its interactive features and functionalities.",
    url: "https://react-crypto-app-seven-mu.vercel.app/",
    repo: "https://github.com/umar5678/coin-app",
    img: `${coinAppImg}`,
    tech: ["React", "scss", "javascript", "vercel"],
  },

  {
    id: 4,
    title: "React Cart",
    description:
      "React Add to Cart Project: A web application showcasing an interactive 'Add to Cart' feature. Crafted with Styled Components and React, this project is hosted on GitHub for easy access. Explore and understand the shopping cart functionality with this example.",
    url: "https://react-cart-five-cyan.vercel.app/",
    repo: "https://github.com/umar5678/react-cart",
    img: `${reactCartImg}`,
    tech: ["Styled Components", "React", "vercel"],
  },
];

export default featuredProjects;
