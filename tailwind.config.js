import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui",
    addCommonColors: false,
    defaultTheme: "dark", 
    defaultExtendTheme: "dark", 
    layout: {
      radius: 0, 
    },
  })],
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'row-span-1',
    'row-span-2',
    'row-span-3',
    'sm:col-span-1',
    'sm:col-span-2',
    'sm:col-span-3',
    'sm:row-span-1',
    'sm:row-span-2',
    'sm:row-span-3',
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-3',
    'md:row-span-1',
    'md:row-span-2',
    'md:row-span-3',
    'lg:col-span-1',
    'lg:col-span-2',
    'lg:col-span-3',
    'lg:row-span-1',
    'lg:row-span-2',
    'lg:row-span-3',
  ],
}
