import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 'charter',
    name: 'Charter',
    subtitle: 'A booking engine and CMS to bring value to the tourism sector',
    description: `
      ## Test
      foo

      #### foo
      bar [click me](https://google.com)
    `,
    primaryImage: {
      src: '/projects/charter/home.png',
      description: 'Charter CMS and booking engine',
    },
    images: [
      {
        src: '/projects/charter/home.png',
        description: 'Home screen of Charter',
      },
      {
        src: '/projects/charter/operator.png',
        description: 'A tourism operator and the services they provide',
      },
      {
        src: '/projects/charter/schemas.png',
        description: 'Creating a service schema. Here we choose what fields these services should show',
      },
      {
        src: '/projects/charter/price-select.png',
        description: 'Selecting the pricing strategy for this service type. Here we choose "Per age cohort"',
      },
      {
        src: '/projects/charter/service-create.png',
        description: 'Creating a service',
      },
      {
        src: '/projects/charter/fields.png',
        description: 'Setting the field values',
      },
      {
        src: '/projects/charter/prices.png',
        description: 'Setting the prices for each age cohort',
      },
      {
        src: '/projects/charter/site-view.png',
        description: 'How the service looks to the end user',
      },
      {
        src: '/projects/charter/booking.png',
        description: 'How the booking form looks to the end user',
      },
    ],
    link: 'https://charter.bitmetro.io',
    github: 'https://www.github.com/alastairzotos/charter',
    techStack: [
      'Typescript',
      'React',
      'NodeJS',
      'NestJS',
      'NextJS',
      'MongoDB',
      'MUI',
      'Stripe',
    ]
  },
  {
    id: 'pictobox',
    name: 'Pictobox',
    subtitle: 'A Chrome extension to save images to the cloud',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    primaryImage: {
      src: '/projects/pictobox/main.png',
      description: 'Pictobox main page',
    },
    images: [
      {
        src: '/projects/pictobox/extension.png',
        description: 'Using the Chrome extension to save images to Pictobox',
      },
      {
        src: '/projects/pictobox/main.png',
        description: 'Viewing our saved images',
      },
      {
        src: '/projects/pictobox/view.png',
        description: 'Viewing indidivual images',
      },
    ],
    link: 'https://pictobox.bitmetro.io',
    techStack: [
      'Typescript',
      'React',
      'NodeJS',
      'NestJS',
      'MUI',
      'MongoDB',
      'Stripe'
    ]
  },
  {
    id: 'callisto',
    name: 'Callisto',
    subtitle: 'A framework for building virtual assistants',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'https://callisto.bitmetro.io',
    github: 'https://www.github.com/alastairzotos/callisto',
    primaryImage: {
      src: '/projects/callisto/logo.png',
      description: 'Callisto logo',
    },
    images: [
      {
        src: '/projects/callisto/usage.png',
        description: 'Talking to a Callisto client',
      },
      {
        src: '/projects/callisto/cli.png',
        description: 'Using the Callisto CLI to download a plugin to our local Callisto server',
      },
    ],
    techStack: [
      'Typescript',
      'NodeJS',
      'Sockets',
    ]
  },
  {
    id: 'phrase-gen',
    name: 'PhraseGen',
    subtitle: 'Advanced keyword multiplier for PPC targeting',
    description: 'Foobar',
    link: 'https://phrase-gen.bitmetro.io',
    github: 'https://www.github.com/alastairzotos/phrase-gen',
    primaryImage: {
      src: '/projects/phrase-gen/logo.png',
      description: 'PhraseGen logo',
    },
    images: [
      {
        src: '/projects/phrase-gen/simple.png',
        description: 'An example of a simple keyword expansion',
      },
      {
        src: '/projects/phrase-gen/complex.png',
        description: 'An example of generating hundreds of targeted keywords',
      },
    ],
    techStack: [
      'Typescript',
      'React',
      'Antd',
      'NextJS',
      'NodeJS',
      'NestJS',
      'MongoDB',
    ]
  }
]
