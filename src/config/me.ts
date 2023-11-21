import { ProjectImage } from "@/types";

export const meConfig = {
  name: "Alastair",
  tagline: "I develop webapps",
  briefDesc: `
    Hi, I'm Alastair, the founder of bitmetro.
    
    I have been developing software since I was 10 years old making games in my bedroom. Since then my interests have grown and I currently work as a full stack software engineer primarily using React and Node.js, with active involvement in DevOps/Infra/CICD. I also build programming languages, virtual assistants, browser plugins, and other curiosities.
  `,
  desc: `
    ## About

    Bitmetro started as a repository of my passion projects, but has since grown into a professional 
    software studio since the creation of [Charter](/project/charter).

    I started programming at 10 years old when I made my mum buy me a copy of [DarkBASIC](https://en.wikipedia.org/wiki/The_Game_Creators#DarkBASIC) which
    enabled me to make my own 3D video games. This set the foundation for my programming career; I learned how to think like a programmer and how, with some effort,
    I could turn my imagination into reality. I distinctly remember running around my house screaming with excitement when I figured out how to place ten
    3D cubes randomly on a flat plane and be able to move the camera around with the arrow-keys. My mind burst with imagination - these cubes could be monsters,
    they could be mountains, or anything else. I have the power to make things as I want.
    
    I then started programming in C++ at age 15 and I developed a passion for making programming languages. I think most programmers can testify that working with your
    own programming language is one of the coolest things you can do, and it paid dividends when I started working as a software engineer at Scottish Power, my first
    foray into the world of professional software development.

    There, I was tasked with optimising the way emails were delivered to customers. There were approximately 6 million recipients in total, and they all had to have
    emails customised to them based on data the company had on them. This logic was often long and convoluted, and the email management software wouldn't cut it. Luckily,
    I managed to reverse engineer its API and build a programming language almost identical to Typescript to generate API requests to create
    more complex logic and templating than the email manager UI was capable of.

    During this whole process I got more deeply involved in fullstack web development. I love fullstack because I can see a feature fully come to life, and I am fascinated
    by modern deployment technologies such as Docker and Kubernetes and how they can drastically improve the developer and user experience.

    Since then I have gone on to successfully contribute to many companies where I have grown tremendously from the talent that I was surrounded by. I owe everything to my
    colleagues for making me a more professional engineer with an eye for excellence and high standards.

    In my spare time I love travel, play guitar, read books, socialise, and of course, drink coffee ☕️.
  `,
  image: {
    src: '/me.jpg',
    description: "Alastair Zotos fullstack web developer",
  },
  photos: [
    {
      src: '/me/me-corfu.jpeg',
      description: 'In my home island of Corfu, Greece',
    },
    {
      src: '/me/me-elephant.jpeg',
      description: 'Playing with a baby elephant in Thailand',
    },
    {
      src: '/me/me-guitar.jpeg',
      description: 'Jamming with friends',
    }
  ] satisfies ProjectImage[]
}