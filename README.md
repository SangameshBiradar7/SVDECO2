# SVD Eco Services

The SVD Eco Services website presents hazardous-waste recovery, alternative-fuel production, and industrial partnership pathways for businesses in Karnataka.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## How to run the project

### 1. Open the project folder

Open a terminal in the project directory:

```powershell
cd C:\Users\pavit\Downloads\svd-eco\svd-eco
```

### 2. Install dependencies

Run this once after cloning or downloading the project:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Keep the terminal running while you use the website. Press `Ctrl + C` to stop the server.

The main routes are:

- `/` - company overview, solutions, process, and contact CTA
- `/about` - company mission, vision, values, and promise
- `/solutions` - waste recovery and alternative-fuel solutions
- `/industries` - industries and waste streams served
- `/contact` - contact details and location map

## Production build

To create and run a production version locally:

```bash
npm run lint
npm run build
npm run start
```

Then open [http://localhost:3000](http://localhost:3000).

To use a different port:

```bash
npm run start -- -p 4000
```

## Useful commands

```bash
npm run dev       # Start development mode
npm run lint      # Check code quality
npm run build     # Create a production build
npm run start     # Run the production build
```

## Project structure

- `src/app` - App Router routes, metadata, and global styles
- `src/components` - page sections and reusable content components
- `public/images` - local photography and visual assets

Images referenced by the UI must be added to `public/images` and referenced with a root-relative path such as `/images/example.jpg`.

## Deployment

This is a standard Next.js application and can be deployed to Vercel or any Node.js host that supports `npm run build` followed by `npm run start`.
