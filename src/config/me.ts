import { ProjectImage } from "@/types";

export const meConfig = {
  name: "Alastair",
  tagline: "I develop webapps",
  briefDesc: `I'm Alastair, the founder of bitmetro.`,
    desc: `
      Bitmetro began as a collection of personal projects and has evolved into a professional software studio, notably following the launch of [Charter](/project/charter).

      My programming journey started at age 10 with [DarkBASIC](https://en.wikipedia.org/wiki/The_Game_Creators#DarkBASIC), sparking a lifelong passion for software development. By 15, I was working in C++ and building custom programming languages, a skill that proved invaluable during my tenure at Scottish Power, where I engineered scalable solutions for personalized communications to millions of customers.

      I specialize in fullstack web development, leveraging modern technologies like Docker and Kubernetes to deliver robust, scalable applications. My professional growth has been shaped by collaborating with talented teams and a commitment to high standards of excellence.

      Outside of work, I enjoy traveling, playing guitar, reading, socializing, and coffee.
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