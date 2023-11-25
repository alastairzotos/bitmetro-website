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

      Admins can define schemas for their service offerings which makes registering new services an easy and low-friction activity. Using schemas gives admins
      control over various payment strategies, service fields and informational content, requests for user data upon booking, etc.

      Operators can access the CMS as well. Charter offers restricted access to the operators to manage their own accounts and offerings independently
      so they can have full control over their own services without having to go through the admins.

      Charter is a headless CMS and offers an API that can be hooked into from the frontend. For Corfu we created [Corfu Travel Guide](https://www.corfutravelguide.net)
      as a Charter frontend, though this is decoupled from the Charter CMS itself. Charter is not intended only for Corfu.

      Using Charter in our first season we have helped dozens of local businesses enter the online space, and have consistently received positive feedback about it's intuitiveness and ease of use.
      Customers have clearly found it easy and valuable too; in the first summer of launch we successfully processed over €10k in bookings.
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
      Pictobox came about to satisfy a need to easily save photos and graphics that inspire you to the cloud without hassle.

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
        src: 'https://www.youtube.com/watch?v=3DQPFCAtBpU',
        description: 'Pictobox Chrome Extension'
      },
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
    otherLinks: [
      {
        title: 'Chrome Web Store',
        url: 'https://chromewebstore.google.com/detail/pictobox/minfkineennibjkfgcgijneocbdahmho',
      }
    ],
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
      Callisto makes it easy and straightforward to build virtual assistants using its plugin-based architecture and context-sensitive conversations.

      Callisto can live on your company's servers, on your phone, your Raspberry Pi, or your Docker container. By default Callisto comes as a blank slate, but by
      installing plugins from the Callisto Registry using the Callisto CLI we can configure Callisto to do just what we need it to do and nothing else.

      The beauty of Callisto is the ease by which we can make plugins.

      It's as simple as creating a \`plugin.yaml\` file in which we define our interactions, supplying an interaction ID, the prompts 
      that Callisto offers the user, and a Regex for potential user inputs.

      Here's an example of a plugin to get the weather. The user can ask about the weather where they are or they can ask about a specific location:

      ~~~yaml
      __title__: plugin.yaml
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

      onInteraction('no-location', async (time = 'today') => {
        const location = await askQuestion('Where would you like to know the weather for?');
      
        return await getWeather(time!, location!);
      })      
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
    description: `
      PhraseGen grew out of a need to generate higher quality Google Ads keywords than could be created by a typical keyword multiplier.

      A keyword multiplier would take two lists of words and generate every combination of each word from the first list followed by every word from the second.
      Then we would show our ads to people searching for these search terms.

      While this works for simple search terms, it doesn't target more niche ones.

      Targeting keywords on PPC ad platforms works best when we have many specific, long-tail keywords. Targeting broad search terms
      such as "phones" may result in many impressions but low click-through-rates and especially low conversion rates.
      They are also more expensive because you are bidding against many other advertisers for the same ad slot.

      Long tail, specific keywords are cheaper due to lack of competition from bidders, and are more likely to convert because
      users searching for highly specific things are signaling a strong intent that they are interested in what they're searching for. 

      So there needed to be a solution where we could generate large sets of narrow, long-tail search terms without too much effort, and that's
      how PhraseGen was born.

      With PhraseGen, we can create phrases and variables containing lists of keywords, and the system will expand them out to all combinations. For example:
      ~~~yaml
      __title__: PhraseGen example

      Inputs:
       - buy @item in @city
       - @item for sale in @city
  
      @item variable:
       - flowers
       - pots
       - chairs

      @city variable:
       - london
       - paris
       - athens
      ~~~

      The result would be
      ~~~text
      __title__: View expanded keywords
      buy flowers in london
      buy pots in london
      buy chairs in london
      buy flowers in paris
      buy pots in paris
      buy chairs in paris
      buy flowers in athens
      buy pots in athens
      buy chairs in athens
      flowers for sale in london
      pots for sale in london
      chairs for sale in london
      flowers for sale in paris
      pots for sale in paris
      chairs for sale in paris
      flowers for sale in athens
      pots for sale in athens
      chairs for sale in athens
      ~~~

      PhraseGen can also be used as an [NPM package](https://www.npmjs.com/package/@bitmetro/phrase-gen) and through the API.
    `,
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
    description: `
      Persona is an ExpressJS and React library for making user authentication easy into integrate into your applications.

      It was created to satisfy a need to be avoid vendor lock-in and to own your own data, while keeping simplicity and customisation in mind.

      Though tools like Firebase offer easy authentication, they are hard to integrate into existing applications where the data may be stored elsewhere.

      Using it is straightforward. On the server-side, we create a \`Persona\` instance that takes our configuration, where we tell it which
      authentication modes we wish to use (Google, Facebook or Email/Password). We then pass it our Express app instance for it to setup
      the endpoints that the frontend will use.

      In order to keep ownership of our data, we must pass it a \`PersonaAdapter\` instance which we create to get or create users.

      For example:
      ~~~ts
      __title__: index.ts
      const app = express();

      // Create our persona instance
      const persona = new Persona<User>({
        jwtSigningKey: process.env.JWT_SIGNING_KEY!,

        // Pass an adapter to handle user data (see below)
        adapter: new MyAdapter(),

        config: {

          // Make login with email/password available, and ask for the users first name when registering
          emailPasswordConfig: {
            userDetails: ['first_name'],
          },

          // Make login with Google and Facebook available
          credentials: {
            google: {
              id: process.env.GOOGLE_CLIENT_ID!,
              secret: process.env.GOOGLE_CLIENT_SECRET!,
            },
            facebook: {
              id: process.env.FB_APP_ID!,
              secret: process.env.FB_APP_SECRET!,
            }
          }
        }
      });

      persona.setupExpress(app);
      ~~~

      ~~~ts
      __title__: adapter.ts

      // The Persona instance will call these methods to get and create users
      // In them, we can interact with our own database
      export class MyAdapter implements PersonaAdapter<User> {
        async getUserByEmail(email: string) {
          return await mockDb.getUserByEmail(email);
        }
      
        async createUser(email: string, details: UserDetails) {
          return await mockDb.createUser({ email, firstName: details.first_name! });
        }
      }
      ~~~

      We can then hook up the frontend using the \`PersonaProvider\`. For example, in NextJS:
      ~~~ts
      __title__: _app.tsx

      export default function App({ Component, pageProps }: AppProps) {
        const router = useRouter();
      
        return (
          <PersonaProvider
            apiUrl='http://localhost:3001'
            onRegister={() => router.push('/register')}
            onLogin={() => router.push('/')}
            theme={extendPersonaTheme({
              // Customise the theme
            })}
          >
            <Component {...pageProps} />
          </PersonaProvider>
        )
      }      
      ~~~

      Now Persona will provide us with a \`usePersona()\` hook to access the logged in user and the logout function, as
      well as the \`<LoginForm />\` and \`<RegisterForm />\` components:
      ~~~ts
      __title__: index.tsx

      export default function Home() {
        const { loggedInUser, logout } = usePersona<User>();
      
        return (
          <>
            {
              loggedInUser
                ? <p>Hello {loggedInUser.firstName}</p>
                : <LoginForm />
            }

            {loggedInUser && (
              <button onClick={logout}>
                Logout
              </button>
            )}
          </>
        )
      }      
      ~~~

      To protect our routes, we must add a Bearer token using the \`getAccessToken()\` function:
      ~~~ts
      const fetchSecretData = async () => {
        const res = await fetch('http://localhost:3001/secret', {
          headers: {
            Authorization: \`Bearer \${getAccessToken()}\`
          }
        });
      
        return await res.text();
      }
      ~~~

      And on the server, we can use the Persona middleware to ensure only authenticated requests get through:
      ~~~ts
      app.get('/secret', persona.authGuard, (req, res) => {
        // Handle the request
      });
      ~~~

      We can also make our own auth middleware using the \`persona.verifyAccessToken(string)\` and
      \`persona.authorize(Request)\` methods.
    `, 
    link: 'https://github.com/alastairzotos/persona',
    github: 'https://github.com/alastairzotos/persona',
    primaryImage: {
      src: '/projects/persona/logo-2.jpeg',
      description: ''
    },
    images: [
      {
        src: '/projects/persona/login-form.png',
        description: 'Default login form when email/password and social logins are enabled',
      },
      {
        src: '/projects/persona/custom.png',
        description: 'An example of how the form can be customised in any (ugly) way we like',
      },
      {
        src: '/projects/persona/register-form.png',
        description: 'The registration form for when email/password authentication is enabled and configured to ask for a first name',
      },
    ],
    techStack: [
      'Typescript',
      'React',
      'NestJS',
      'NodeJS',
    ]
  },
  {
    id: 'react-page-editor',
    name: "React Page Editor",
    subtitle: "Intuitive Drag-and-Drop page editor for React",
    description: `
      React Page Editor was made because existing solutions for drag-and-drop page editors were limited at the time.

      The desire was for an editor that was intuitive to use, could use components supplied by the developer, be able to change typed
      component props within the UI, and return a JSON object that could then be used to render the page.
      This JSON object could be saved in a database, so the editor could be used as a frontend for a website CMS for instance.

      Existing solutions at the time were limited in what components could be used, how flexible they were for editing those components, or only
      outputted raw HTML.
    `,
    link: "https://github.com/alastairzotos/react-page-editor",
    github: "https://github.com/alastairzotos/react-page-editor",
    primaryImage: {
      src: "https://camo.githubusercontent.com/c6b669357ec18fa1acf164aee5611970579e010a47a9ffc636c2fc54d14edaab/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f556f654e6673484e5054674935726d5173412f67697068792e676966",
      description: "Using the React Page Editor",
    },
    images: [
      {
        src: "https://camo.githubusercontent.com/c6b669357ec18fa1acf164aee5611970579e010a47a9ffc636c2fc54d14edaab/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f556f654e6673484e5054674935726d5173412f67697068792e676966",
        description: "Using the React Page Editor",
      }
    ],
    techStack: [
      'React',
      'Typescript',
    ]
  }
]
