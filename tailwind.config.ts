import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'hero': '821px',
        'big': '1357px',
        'con': '1067px',
        'one': '728px',
        'nn': '990px'
      },
    },
  },
  plugins: [],
}
export default config
