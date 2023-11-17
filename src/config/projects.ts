import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 'charter',
    name: 'Charter',
    subtitle: 'A booking engine and CMS to bring value to the tourism sector',
    description: `
      Charter is a booking engine that came about to modernise the tourism industry in Corfu, Greece. Many great tourism-related
      businesses didn't have an online presence, so we set out to make it easier for them to expand their offerings.
      
      Charter is a CMS and a booking engine that lets you manage the accounts of local operators, be they boat tours, car rentals, 
      restaurants, or whatever you decide on.

      Admins can define schemas for their service offerings which makes registeting new services an easy and low-friction activity. Using schemas gives admins
      control over various payment strategies, service fields and informational content, requests for user data upon booking, etc.

      Operators can access the CMS as well. Charter offers restricted access to the operators to manage their own accounts and offerings independently
      so they can have full control over their own services without having to go through the admins.

      Charter is a headless CMS and offers an API that can be hooked into from the frontend. For Corfu we created [Corfu Travel Guide](https://www.corfutravelguide.net)
      as a Charter frontend, though this is decoupled from the Charter CMS itself. Charter itself is not intended only for Corfu.

      Using Charter in our first season we have helped dozens of local businesses enter the online space, and have consistently received positive feedback about it's intuitiveness and ease of use.
      Customers have clearly found it easy and valuable too, for in the first summer of launch we successfully processed over €10k in bookings.
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
    subtitle: 'A browser extension to save images to the cloud',
    description: `
      Pictobox came about to satisfy a need to easily keep photos and graphics that inspire without hassle, and in a device agnostic way.

      As a browser extension it takes little effort and friction to keep track of the images you find on the internet for future inspiration, whether you're
      an artist, graphic designer, interior designer, or just a visual person.

      Your images are copied and stored in bitmetro's servers, so you don't have to worry about the host removing their copy after you have saved it.

      Organise your images using tags and easily browse through them with intuitive search capabilities.
    `,
    primaryImage: {
      src: '/projects/pictobox/logo-icon.png',
      description: 'Pictobox logo',
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
    description: `
      Callisto makes it easy and straightforward to build virtual assistants using its plugin-based architecture and context-sensitive request processing.

      Callisto can live on your company's servers, on your phone, your Raspberry Pi, or your Docker container. By default Callisto comes as a blank slate, but by
      installing plugins from the Callisto Registry using the Callisto CLI we can configure Callisto to do just what we need it to do and nothing else.

      The beauty of callisto is the ease by which we can write plugins.

      It's as simple as creating a *plugin.yaml* file in which we define our interactions, supplying an interaction ID, the prompts 
      that Callisto offers the user, and a Regex for potential user inputs.

      Here's an example of a plugin to get the weather. The user can ask about the weather where they are or at a specific location:

      ~~~yaml
      __title__: plugin.yaml
      resolve: ./dist/index.js
      interactions:
        - id: with-location
          prompts:
            - Try asking me for the weather in Berlin
            - Try asking for the weather in Shanghai
          inputs: 
            - what's the weather like( today| tomorrow)? in (.+)
        
        - id: no-location
          prompts:
            - Try asking me for the weather
            - Try asking what the weather is like tomorrow
          inputs:
            - what's the weather like( today| tomorrow)?
            - what's( today| tomorrow)'s weather like?
      ~~~

      We can then write some code to handle these interactions.
      In this case, we can respond to getting the weather directly if we know the user's location, but if we don't,
      we can send back a question and handle their request once we have an answer. Notice how we can extract the time (today or tomorrow)
      and location from the Regex directly into our handlers.


      ~~~ts
      __title__: index.ts
      onInteraction('with-location', async (time = 'today', location) => await getWeather(time!, location!))

      onInteraction('no-location', (time = 'today') => new Promise<string>((resolve) => {
        sendQuestion('Where do you live?', async location => resolve(await getWeather(time!, location!)!))
      }))
      ~~~

      Callisto can handle many simultaneous conversations by running each on its own websocket connection and running each plugin as an isolated
      child process per connection.

      An open source [web client](https://callisto.bitmetro.io) lets us talk to Callisto using voice commands.
    `,
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
  },
  {
    id: 'persona',
    name: 'Persona',
    subtitle: 'Easy Authentication for Node and React',
    description: 'Foobar',
    link: 'https://github.com/alastairzotos/persona',
    github: 'https://github.com/alastairzotos/persona',
    primaryImage: {
      src: '/projects/persona/logo-2.jpeg',
      description: ''
    },
    images: [],
    techStack: [
      'Typescript',
      'React',
      'NestJS',
      'NodeJS',
    ]
  },
  {
    id: 'page-editor',
    name: "React Page Editor",
    subtitle: "Intuitive Drag-and-Drop page editor for React",
    description: "Todo",
    link: "https://github.com/alastairzotos/react-page-editor",
    github: "https://github.com/alastairzotos/react-page-editor",
    primaryImage: {
      src: "https://camo.githubusercontent.com/c6b669357ec18fa1acf164aee5611970579e010a47a9ffc636c2fc54d14edaab/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f556f654e6673484e5054674935726d5173412f67697068792e676966",
      description: "Using the React Page Editor",
    },
    images: [],
    techStack: [
      'React',
      'Typescript',
    ]
  }
]
