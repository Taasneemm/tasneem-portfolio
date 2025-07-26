# Tasneem's Portfolio v2

![react-badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![tailwind-badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![nextjs-badge](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

## Overview

Version 2 of my developer portfolio. Built with React and Tailwind CSS using Next.js.

## Getting Started

Run the development server with `yarn dev`. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run a production build, use `yarn build` folowed by `yarn start`.

To clear the cache, delete the auto-generated `.next` folder.

## Deployment

The web app is deployed with Vercel. View the website [here](https://tasneemahmad.me).

## Project Structure

This project uses App Router by Next.js which uses a file-based routing system within the `app` directory. Routes can be created by making new directories inside of the `app` folder with a `page.tsx` file.

- **public**: Houses static assets like images and fonts. Files here are accessible directly from the root of the web server.

- **src**: Where the main source code resides.
  - **app**: Used with Next.js's App Router, containing the application's layouts, pages, and potentially other components.
  - **components**: Reusable UI elements are typically stored here. These are the building blocks of the application's visual interface.
  - **icons**: Contains SVG files used as icons throughout the app.
  - **models**: Contains TypeScript interfaces, types, and other data structures to represent data models.
