import teslaImg from "./tesla-clone.png"
import coinAppImg from "./coin-app.png"
import reactCartImg from "./react-cart.png"


    const featuredProjects = [
    {
     id: 1,
     title: "Tesla Clone",
     description: "This is a sample description of the project this is a tesla ui clone.This is a example project. In this project Lorem ipsum dolor sit amet, consectetur adipisicing.",
     url: "https://tesla-ui-clone-ten.vercel.app/",
     repo: "https://github.com/umar5678/Tesla-Clone",
     img: `${teslaImg}`,
      tech: ['html', 'scss', 'javascript', 'firebase']
    },

    {
        id: 2,
        title: "Coin App",
        description: "This is a sample description of the Coin app project.This is a example project. In this project Lorem ipsum dolor sit amet, consectetur adipisicing.",
        url: "https://react-crypto-app-seven-mu.vercel.app/",
        repo: "https://github.com/umar5678/coin-app",
        img: `${coinAppImg}`,
        tech : ["React", "scss", "javascript", "vercel"]
       },

       {
        id: 3,
        title: "React Cart",
        description: "This is a sample description of the project.This is a example project. In this project Lorem ipsum dolor sit amet, consectetur adipisicing.",
        url: "https://react-cart-five-cyan.vercel.app/",
        repo: "https://github.com/umar5678/react-cart",
        img: `${reactCartImg}`,
        tech : ['Styled Components', 'React','vercel']
       }
]

export default featuredProjects;