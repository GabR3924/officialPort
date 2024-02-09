import GithubIcon from '../assets/GitHub.svg'
import Gmail from '../assets/Gmail.svg'
// import Linkedin from '../assets/linkedin.svg'
import Group1 from '../assets/Group1.svg'
import Arrow from '../assets/Group1.svg'
import Account from '../assets/Account.svg'
import Home from '../assets/Home.svg'
import Product from '../assets/Product.svg'
import Typing from '../assets/Typing.svg'
import Hero from '../assets/innova.png'
import About from '../assets/SOBREMI.png'
import Proyectos from '../assets/PROYECTOS.png'
import Java from '../assets/Java.svg'
// import Javascript from '../assets/javascript.svg'
import Node from '../assets/Node.svg'
import Html from '../assets/Html.svg'
import Css from '../assets/Group.svg'
import Sql from '../assets/SQL.svg'
import Git from '../assets/Git.svg'
import Database from '../assets/Database.svg'
import Aws from '../assets/AWS.svg'
import React from '../assets/Vector.svg'
import Angular from '../assets/angular.svg'
import skill1 from '../assets/Sword.jpg'
import skill2 from '../assets/Loot.jpg'
import skill3 from '../assets/Loot3.jpg'
import skill4 from '../assets/loot4.jpg'
import skill5 from '../assets/Volume.jpg'
import skill6 from '../assets/Hallow.jpg'
import skill7 from '../assets/Loot5.jpg'
import skill8 from '../assets/Loot6.jpg'

export const Bio = {
    name: "Gabriela Rodriguez",
    roles: "FullStack Developer",
    icons: {
      github:GithubIcon,
      gmail:Gmail,
      // linkedin:Linkedin,
      group:Group1,
      arrow:Arrow,
    },
    menu: {
      home:Home,
      account:Account,
      product:Product,
      typing:Typing,
    },
    titles:{
      hero:Hero,
      about:About,
      proyectos:Proyectos,
    },
    description:
      "Soy una persona motivada y versátil, siempre dispuesta a aceptar nuevos desafíos. Con pasión por aprender, estoy comprometida en entregar resultados de alta calidad. Con una actitud positiva y una mentalidad de crecimiento, estoy lista para hacer una contribución significativa y lograr grandes cosas.",
    github: "https://github.com/GabR3924",
    resume:
      "https://drive.google.com/file/d/1rMrFiI68MnnQOz65x8z5Fevk86oxMMtu/view?usp=drive_link",
    linkedin: "https://www.linkedin.com/in/gabriela-rodriguez-24b4b0214/",
}

export const skills = {
  svg : {
    java:Java,
    // javascript:Javascript,
    html:Html,
    css:Css,
    react:React,
    node:Node,
    angular:Angular,
    git:Git,
    sql:Sql,
    aws:Aws,
    database:Database,
  },
  
}

export const habilidades = [
   {
    id:0,
    image:skill1,
    name: 'prueba1'
  },
  {
    id:1,
    image:skill2,
    name: 'prueba2'
  },
  {
    id:2,
    image:skill3,
    name: 'prueba3'
  },
  {
    id:0,
    image:skill4,
    name: 'prueba1'
  },
  {
    id:1,
    image:skill5,
    name: 'prueba2'
  },
  {
    id:2,
    image:skill6,
    name: 'prueba3'
  },
  {
    id:1,
    image:skill7,
    name: 'prueba2'
  },
  {
    id:2,
    image:skill8,
    name: 'prueba3'
  }
]

export const cualities = [
  {
    id: 0,
    title: "paciente",
    image: '../'
  }
]

export const projects = [
    {
      id: 0,
      title: "Soul Music",
      date: "Jun 2023 - Jul 2023",
      description:
        "El sitio web está dedicado a la reproducción de música y ofrece una amplia gama de funciones, incluyendo la creación de perfiles de usuario, la personalización de listas de reproducción, membresías con beneficios exclusivos y un completo panel de administración.",
      image:
        "https://portafoliouno.s3.us-east-2.amazonaws.com/github/music.png",
      tags: [
        "Docker",
        "AWS",      
        "React Js",
        "PostgreSQL",
        "Node Js",
        "Express Js",
        "Redux",
        "NodeMailer",
      ],
      category: "web app",
      github: "https://github.com/GabR3924",
      webapp: "https://soul-music-pf.netlify.app/home",
    },
    {
      id: 1,
      title: "GreenScreen",
      date: "ago 2023 - sep 2023",
      description:
        "Nuestro sitio web enfocado en recopilar reseñas y puntuaciones de peliculas, y series que ofrece una amplia gama de funciones, incluyendo la creación de perfiles de usuario, la personalización de listas de reproducción, donacioness con beneficios y un completo panel de administración.",
      image:
                "https://portafoliouno.s3.us-east-2.amazonaws.com/github/screen.png"
        ,
      tags: ["React Js", "PostgreSQL", "Node Js", "Express Js", "Redux", "Cloudinary","NodeMailer",
    ],
      category: "web app",
      github: "https://github.com/GabR3924",
      webapp: "https://movies-front-tau.vercel.app/",
     
    },
    {
      id: 2,
      title: "Pokemon App",
      date: "Oct 2022 - Present",
      description:
        "Pokedex, puedes encontrar este proyecto en mi github",
      image:
      "https://portafoliouno.s3.us-east-2.amazonaws.com/github/poke.webp",
      tags: [
        "React Js",
        "PostgreSQL",
        "Node Js",
        "Express Js",
        "Redux",
      ],
      category: "web app",
      github: "https://github.com/GabR3924/PI-pokemon",
      webapp: "https://vexa-app.netlify.app/",
    },
    
   
  ];
  