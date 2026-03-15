# Written by @RabbitJahir — official source: https://github.com/RabbitJahir/CSE58

## 📌 Usage Notice

This README is for learning only. Reproduction or redistribution without giving the Author's name is prohibited.

---

---

> **NOTE** AI can not create the best ideas, it will help enchane our ideas to it's maximum potential.

---

# Why React

>Basic idea
- Best for web apps, better SEO, SaaS(Software as a Service), smaller bundles, huge ecosystem.
- Flutter is best for making one codebase for many devices, ios, android, windows, linux. Basically better for multiplatformed apps.



---

> Link to Website: https://cse58.vercel.app/

> Link to another Website: https://captaintodo.vercel.app/

---

---

# React!

1. [Getting Npm & Node](#npm-and-node)
2. [Css, Tailwind](#css-framework-tailwind)
3. [Project structure & Folders](#index-dot-html)
4. [Libraries](#libraries)
5. [React Routing library](#react-router-dom)
6. [Hosting](#hosting)
7. [Progressive WebApp](#pwa)
8. [File Optimization](#optimization)
9. [Build Tools & Performance Testing](#build-tools)
10. [SEO](#seo-crawlers-ai)

---

---

# Npm and Node

> **How to install?** AI, google
>
> - check version with node -v, npm -v

> #### Steps
>
> - Making a folder, opening in VS code, in terminal
>   ```jsx
>    npm create vite@latest Client
>   ```
> - package name : client
> - Select framework: react
> - select variant: javascript
> - use vise 8 beta: no
> - Install with npm and start now: yes

> **Vite** is basically a server that installs React. It's super fast, easier to configure, reloads fast and is modern.  
> Yes, there are more servers.

> **NOTE**  
> if you want to install any css frameworks, or any other react liraries, install them inside the **Client** folder, go to Client in your terminal then install.

> to run the code in browser, go to client folder in terminal and type `npm run dev`, hit enter.

---

[TOP](#react)

---

---

# CSS Framework, Tailwind

> Tailwindcss is how we make our css more efficient.
> `<p className='text-white text-lg'>Learning to use Tailwind!</p>`

# Tailwind CSS Cheat Sheet

## 1. Text / Typography

| CSS Property                  | Tailwind Classes  |
| ----------------------------- | ----------------- |
| `color: white;`               | `text-white`      |
| `color: black;`               | `text-black`      |
| `color: red;`                 | `text-red-500`    |
| `font-size: 12px;`            | `text-xs`         |
| `font-size: 14px;`            | `text-sm`         |
| `font-size: 16px;`            | `text-base`       |
| `font-size: 18px;`            | `text-lg`         |
| `font-size: 24px;`            | `text-xl`         |
| `font-size: 30px;`            | `text-2xl`        |
| `font-weight: normal;`        | `font-normal`     |
| `font-weight: bold;`          | `font-bold`       |
| `text-align: left;`           | `text-left`       |
| `text-align: center;`         | `text-center`     |
| `text-align: right;`          | `text-right`      |
| `text-decoration: underline;` | `underline`       |
| `text-decoration: none;`      | `no-underline`    |
| `line-height: 1.5;`           | `leading-relaxed` |
| `letter-spacing: 2px;`        | `tracking-wider`  |
| `text-transform: uppercase;`  | `uppercase`       |
| `text-transform: lowercase;`  | `lowercase`       |
| `text-transform: capitalize;` | `capitalize`      |

---

## 2. Layout / Display

| CSS Property                      | Tailwind Classes  |
| --------------------------------- | ----------------- |
| `display: block;`                 | `block`           |
| `display: inline-block;`          | `inline-block`    |
| `display: inline;`                | `inline`          |
| `display: flex;`                  | `flex`            |
| `flex-direction: row;`            | `flex-row`        |
| `flex-direction: column;`         | `flex-col`        |
| `justify-content: start;`         | `justify-start`   |
| `justify-content: center;`        | `justify-center`  |
| `justify-content: end;`           | `justify-end`     |
| `justify-content: space-between;` | `justify-between` |
| `justify-content: space-around;`  | `justify-around`  |
| `align-items: start;`             | `items-start`     |
| `align-items: center;`            | `items-center`    |
| `align-items: end;`               | `items-end`       |
| `flex-wrap: wrap;`                | `flex-wrap`       |
| `flex-wrap: nowrap;`              | `flex-nowrap`     |
| `gap: 4px;`                       | `gap-1`           |
| `gap: 8px;`                       | `gap-2`           |

---

## 3. Spacing (Margin & Padding)

| CSS Property            | Tailwind Classes |
| ----------------------- | ---------------- |
| `margin: 0;`            | `m-0`            |
| `margin: 4px;`          | `m-1`            |
| `margin: 8px;`          | `m-2`            |
| `margin-top: 8px;`      | `mt-2`           |
| `margin-bottom: 16px;`  | `mb-4`           |
| `padding: 0;`           | `p-0`            |
| `padding: 4px;`         | `p-1`            |
| `padding: 8px;`         | `p-2`            |
| `padding-top: 16px;`    | `pt-4`           |
| `padding-bottom: 16px;` | `pb-4`           |

---

## 4. Background & Borders

| CSS Property               | Tailwind Classes      |
| -------------------------- | --------------------- |
| `background-color: red;`   | `bg-red-500`          |
| `background-color: blue;`  | `bg-blue-500`         |
| `background-color: green;` | `bg-green-500`        |
| `border: 1px solid black;` | `border border-black` |
| `border-radius: 4px;`      | `rounded`             |
| `border-radius: 9999px;`   | `rounded-full`        |
| `border-top: 2px;`         | `border-t-2`          |
| `border-bottom: 2px;`      | `border-b-2`          |

---

## 5. Width & Height

| CSS Property        | Tailwind Classes |
| ------------------- | ---------------- |
| `width: 100%;`      | `w-full`         |
| `width: 50%;`       | `w-1/2`          |
| `height: 100%;`     | `h-full`         |
| `height: 50%;`      | `h-1/2`          |
| `min-width: 100px;` | `min-w-[100px]`  |
| `max-width: 500px;` | `max-w-[500px]`  |

---

## 6. Positioning

| CSS Property          | Tailwind Classes |
| --------------------- | ---------------- |
| `position: relative;` | `relative`       |
| `position: absolute;` | `absolute`       |
| `position: fixed;`    | `fixed`          |
| `top: 0;`             | `top-0`          |
| `right: 0;`           | `right-0`        |
| `bottom: 0;`          | `bottom-0`       |
| `left: 0;`            | `left-0`         |
| `z-index: 10;`        | `z-10`           |

---

> Run the code inside **Client** folder
>
> ```jsx
> npm install tailwindcss @tailwindcss/vite
> ```

#### Setting up Tailwindcss

> go to `vite.config.js` folder  
> add this line
>
> ```jsx
> import tailwindcss from "@tailwindcss/vite";
> ```
>
> with other imports.  
> `tailwindcss() ` with other plugins.
>
> ```jsx
> plugins: [react(), tailwindcss()],
> ```
>
> something like this.

> Inside `index.css`  
>  delete everything and paste
>
> ```jsx
> @import "tailwindcss";
> ```

---

---

[TOP](#react)

---

---

# index dot html

> the entry point that a browser or any other hosting platform looks for. **No change** in index.html untill you understand everything.

> From index, we go to src folder.

> index.css is inside src, to import
 ` import './name.css' `

---

# src

> The main folder where we actually create files and write codes.

> **main.jsx** is the entry script to other scripts, this renders our app, auto imports libraries, we can add more when needed.

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
```

> **StrictMode** a safety wrapper, warns about open APIs, double renders to catch any side effect, it is safe to remove in production, but better to keep it. And this gets stripped automatically in builds. Third-party libraries can act weird when in strictmode.

> **createRoot** finds the div id=root from index.html. We see that App is wrapped in basically everything. So, App is the main place where we start coding, editing our webpage.

> **Important** to load every page that we want to edit in a file, first we load the code, then the code runs when we call it.

```jsx
import App_name from "./App_name.type";
```

> **NOTE**  
> we use import App_name because we use
>
> ```jsx
> export default App_name;
> ```
>
> at end of every jsx files.

---

---

# File Structure

> JSX, or JavaScript XML, is a syntax extension for JavaScript primarily used with React to create UI components by writing HTML-like code directly inside JavaScript files. So we use function to make a static web page, or javascript.

> **NamingFiles** Use PascalCase, only letters and numbers, nothing else, Button1, PascalCase3, not start with numbers,  
> because there are regular functions that start with small letters, use PascalCase as a react rule.

```jsx
function AppName(){
  return (
    <>
		main codes, the empty starting and ending tags are react fragments that dissapear in the final html, jsx rule, every components return must have
		one parent element.
		</>
	);
}
 export defaut AppName;
```

```jsx
const AppName = () => {
  return <div>you can use div, but everything has to be inside one.</div>;
};
export default AppName;
```

const is the modern way.

---

---

# public

> Use this folder to add pdfs for a clean structure, and just call them in the jsx files.

> We can add pdfs inside the jsx folders to download them, but we need to import each pdf. If we need to add a ton of pdfs, using public folder and calling them dynamically is better.

> We only need to use href to call the pdf from public and use download to make it downlodable, its way better to use public.  
> or just type the pdf name in href, this auto opens the file in a new windows and has a download button inside the window.  
> Same for favicon and images.

> `<a href="name-of.pdf"></a>`  
> `<a href="if-inside/a-folder/name-of.pdf"></a> `  
> we dont need to use `../` to go back or `/pages` href in react automatically goes inside public and looks for pdfs or images.

---

---

# node_modulus

- cross-spawn : helps to run and build tools across every platform, windows, linux, mac etc.
- chalk : terminal editing, coloring mainly
- ansi : chalk + ansi, to use proper terminal coloring
- argeparse : python tool, makes writing user-friendly command line.
- > acorn : shows error message with proper meaning, `npm install acorn`

- > lightingcss : makes css codes more optimized, so browser loads faster, lighting faster.

- > ajv : check if data matched their data types, auto formats email, date-time etc. fast and easy, for backends and inputs.

- zod : gives conditions for user inputs, mostly like if data matches with data type + with conditions, frontend only

- browserlist : tells the code which browsers auto support is needed.

- baseline-broswer-mapping : makes sure our css works in those browsers. gpt for more.

- brace-expansion : node utility, makes shortcuts using braces, gpt more more.

- > word-wrap : in npm, too break words by characters, can be used to display in broswer.

- > natural-compare : uses human friendly sorting method.

---

# libraries

- `npm install react-wrap-balancer` to auto balance titles or divs
- `npm install mathjs` better to install for any kind of math stuffs
- `npm install react-router-dom` navigation between pages
- `npm install tailwind-scrollbar-hide` hides scrollbar
- `npm install --save-dev vite-plugin-image-optimizer sharp svgo` auto-compress JPEGs and generate WebP/AVIF during builds—even for `/public` folder.
- `npm install --save-dev rollup-plugin-visualizer` see build files/file-sizes, visual diagram of step by step program run.

---

---

[TOP](#react)

---

---

# React-Router-Dom

> Any file you make, it must be PascalCase.

> Usually we do page routing, page refreshes and goes to new page.

> react routing creates a single page that allows navigation without any refresh, damn faster!

#### Making the react router

- First we install `npm install react-router-dom` in Client

> import The library in main.jsx
>
> ```jsx
> import { BrowserRouter } from "react-router-dom";
>
> createRoot(document.getElementById("root")).render(
>   <BrowserRouter>
>     <App />
>   </BrowserRouter>,
> );
> ```

> BrowserRouter is a component of the react-router-dom library.
>
> - We wrap our main router with `<BrowserRouter> </BrowserRouter> `
> - For now, App.jsx is the main file where we do our wiring .

> Add the routings in App.jsx:
>
> ```jsx
> 	import {Routes, Route} from 'react-router-dom';
>
> 	function App(){
> 	  return(
> 	    <>
> 	      <div>
> 	      <Routes>
> 		<Route path='/' element={ } />
> 		<Route path=' ' element={ } />
> 	      </Routes>
> 	      </div>
> 	    </>
> 	  );
> 	}
> ```

> Routes and Route are also components.
>
> - Route can only hold one single URL.
> - When we have multiple Route in the same page, we wrap all Route with wrapper component Routes.

> - `<Route path='/' element={} />`
> - `path` is how Route finds an element.
> - `'/'` is the HomePage of a website, The main page where a user lands when on a website, it's not mandatory but for learning, it is!
> - `element={ }` is the name of the page the path finds, for HomePage.jsx, `element={ <HomePage /> }`will be the element.

> For every Route added, we need to import the File and it's path in the current file, we need to define the paths to js, as every file is it's own component, jsx cant find them unless we tell jsx where it is.
>
> - `import HomePage from "./pages/HomePage"; `
> - This tells jsx to start looking from `'./' pages` inside src.

> Best practice, making a new folder inside src, named pages, and adding webpages inside that page and calling the pages in App.jsx .

### `Link`

> ```jsx
> import { Link } from "react-router-dom";
> ```
>
> Link is how we make links that connects to different pages.
>
> - As HomePage is now the entry page, we will use links inside homepage,

---

---

## Professional Routing

> Routing for bigger projects, better to learn this. **RouterProvider**

> **main.jsx**
>
> ```jsx
>import { StrictMode } from "react";
>import { createRoot } from "react-dom/client";
>import "./index.css";
>import { RouterProvider } from "react-router-dom";
>import router from "./router/router";
>
>createRoot(document.getElementById("root")).render(
>  <StrictMode>
>    <RouterProvider router={router} />
>  </StrictMode>
>);
> ```

> **App.jsx**
>
> Delete App.jsx and App.css

> Make a new folder named Pages/ MainPages, inside a new file named `Home`
>```jsx
>const Home = ()=>{
>  return(
>    <div>Home</div>
>  )
>}
>
>export default Home;
>```

> Make a new folder in **src**, name it `router`, inside router a new file, `router.jsx`
>
> ```jsx
>import { createBrowserRouter } from "react-router-dom";
>import Home from "../MainPage/Home";
>
>const router = createBrowserRouter([
>  {
>    path: "/",
>    element: <Home />,
>  },
>]);
>
>export default router;
> ```
>
> A sample Structure, **path names can never be same**, even when in same folder, but path has something extra, name of that folder, to make a unique ID. Element is the name of the page the browser will load.
> `path: "name"` has to be same as `<Link to="name">Name</Link>`

### children

> Parent and children, to open a block on the same page, shows contents of the children, in parent page.
> Better way, use open, setOpen, when a block is clicked it opens and reclick hides it.
>
> ```jsx
> import React, { useState } from "react";
> import { Link } from "react-router-dom";
> import OpdeMid from "./OpdeMid";
> import OpdeFinal from "./OpdeFinal";
>
> const Index = () => {
>  const [open, setOpen] = useState(null);
>
>  const toggle = (section) => {
>    if (open === section) {
>      setOpen(null);
>    } else {
>      setOpen(section);
>    }
>  };
>
>  return(
> 		<button onClick={() => toggle("OpdeMid")}>Mid Syllabus</button>
>      {open === "OpdeMid" && <OpdeMid />}
>
>    <button onClick={() => toggle("OpdeFinal")}>Final Syllabus</button>
>      {open === "OpdeFinal" && <OpdeFinal />}
> 	)
> }
>
> export default Index;
> ```

### a, Link, NavLink

>Never use buttons!

>```jsx
> <a href="/something.pdf">only for downloading pdfs from public folder</a>
>
> <Link to="/src/Home">For paths inside pages or links to other websites</Link>
>
> <NavLink to="/src/About">Similar to Link but with unique css properties: activeClassName and activeStyle, best for navbars <NavLink>
>```


> AI it, play with it, learn it, your way.

---

---

[TOP](#react)

---

---

# Hosting

### Auto Refresh Error

> When hosting vite, there may be an error, page shows 404 when refreshed. To solve this, add  
> **vercel. json** in **Client** folder and paste this .
>
> ```jsx
> {
>   "rewrites": [
>    { "source": "/(.*)", "destination": "/index.html" }
>  ]
> }
> ```
>
> - React Router uses client-side routing.
> - Pasting that code makes React Router takes over client-side and renders the correct page.
> When choosing root path in hosting platforms, choose the folder that has package.json


---

---

[TOP](#react)

---

# PWA

> To turn your website into a downloable, offline mode.

> installing plugin `npm install -D vite-plugin-pwa`

> In vite.config.js
>```jsx
>import { defineConfig } from 'vite'
>import react from '@vitejs/plugin-react'
>import { VitePWA } from 'vite-plugin-pwa'
>
>export default defineConfig({
>  plugins: [
>    react(),
>    VitePWA({
>      registerType: 'autoUpdate',  // auto-updates SW in background
>      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
>      manifest: {
>        name: 'My App',
>        short_name: 'MyApp',
>        description: 'My awesome app',
>        theme_color: '#ffffff',
>        background_color: '#ffffff',
>        display: 'standalone',       // hides browser UI — feels native
>        start_url: '/',
>        icons: [
>          {
>            src: 'pwa-192x192.png', //from public
>            sizes: '192x192',
>            type: 'image/png'
>          },
>          {
>            src: 'pwa-512x512.png', // from public
>            sizes: '512x512',
>            type: 'image/png',
>            purpose: 'any maskable'  // needed for Android adaptive icons
>          }
>        ]
>      },
>      workbox: {
>        // Cache all static assets (JS, CSS, HTML, images, avif, webp)
>        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,avif,webp}'],
>        // Cache API calls (optional — customize the URL pattern), can remove this entire runtimeCaching scope if no backend
>        runtimeCaching: [ 
>          {
>            urlPattern: /^https:\/\/your-api\.com\/.*$/,
>            handler: 'NetworkFirst',  // try network, fall back to cache
>            options: {
>              cacheName: 'api-cache',
>              expiration: {
>                maxEntries: 50,
>                maxAgeSeconds: 60 * 60 * 24  // 1 day
>              }
>            }
>          }
>        ]
>      }
>    })
>  ]
>})
>```

> Added logos in public folder `https://realfavicongenerator.net/` use this link.</br>
>public/ <br/>
>├── pwa-192x192.png<br/>
>├── pwa-512x512.png<br/>
>├── favicon.ico<br/>
>└── apple-touch-icon.png   ← important for iOS<br/>

> In main.jsx
>```jsx
>import { createRoot } from "react-dom/client";
>import "./index.css";
>import App from "./App.jsx";
>import { registerSW } from 'virtual:pwa-register';
>
>// Register service worker
>registerSW({
>  onNeedRefresh() {
>    if (confirm('New version available! Reload?')) {
>      updateSW(true);
>    }
>  },
>  onOfflineReady() {
>    console.log('App is ready to work offline');
>  },
>});
>
>createRoot(document.getElementById("root")).render(<App />);
>```

> Add meta tags for iphone in index.html
>```html
><head>
>  <meta name="apple-mobile-web-app-capable" content="yes" />
>  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
>  <meta name="apple-mobile-web-app-title" content="MyApp" />
>  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
>  <link rel="manifest" href="/manifest.webmanifest" />
></head>
>```

> In App.jsx to wrap up everything for better UI
>```jsx
>import { RouterProvider } from "react-router-dom";
>import router from "./router/router";
>import { useState, useEffect } from "react";
>
>const App = () => {
>  const [isOnline, setIsOnline] = useState(navigator.onLine);
>
>  useEffect(() => {
>    window.addEventListener('online', () => setIsOnline(true));
>    window.addEventListener('offline', () => setIsOnline(false));
>  }, []);
>
>  return (
>    <>
>      {!isOnline && (
>        <div className="bg-yellow-500 text-center p-2 text-sm">
>          You are offline — some features may be unavailable
>        </div>
>      )}
>      <RouterProvider router={router} />
>    </>
>  );
>};
>
>export default App;
>```

[TOP](#react)

---

---

# Optimization

### Optimize File Size & Formats (Vite Plugin)

> Install this library in Client folder.
>
> ```jsx
> npm install --save-dev vite-plugin-image-optimizer
> ```
>
> Auto-compress JPEGs and generate WebP/AVIF during builds—even for `/public` folder.

> Update `vite.config.js` The ImageOptimizer is inside `plugins[]`
>
> ```jsx
> import { defineConfig } from "vite";
> import react from "@vitejs/plugin-react";
> import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
>
> export default defineConfig({
>   plugins: [
>     react(),
>     ViteImageOptimizer({
>      include: ["**/*.{png,jpg,jpeg,webp,avif,svg}"], //all images in asset
>      includePublic: ["**/*.{png,jpg,jpeg,webp,avif,svg}"], //all imges in public
>
>      png: {
>        quality: 70,
>        compressionLevel: 9
>      },
>
>      jpeg: {
>        quality: 75,
>        progressive: true
>      },
>
>      webp: {
>        quality: 80
>      },
>
>      avif: {
>        quality: 55,
>        speed: 4
>      },
>
>      svg: {
>        multipass: true
>      }
>    }),
>   ],
> });
> ```

> Lazy Loading, Google it.

> Responsive image format switching in react
>
>```jsx
><picture>
>  <source srcset="image.avif" type="image/avif">
>  <source srcset="image.webp" type="image/webp">
>  <img src="image.jpeg" alt="image">
></picture>
>```
> avif/webp, smaller data with no resolution lost, faster loading.
> must have the avif and webp version in the folder.  

---

### Native Lazy Loading:

> loading="lazy" (browser-native, no JS needed) and fixed dimensions to prevent layout shifts.
>
> ```jsx
> <img
>   src="/S12/Calendar/calendar.jpeg"
>   alt="2A University Calendar"
>   loading="lazy"
>   width="800"
>   height="600"
> />
> ```

> ```jsx
> npm install --save-dev rollup-plugin-visualizer
> ```
>
> vite.config.js
>
> ```jsx
> import { defineConfig } from "vite";
> import { visualizer } from "rollup-plugin-visualizer";
>
> export default defineConfig({
>   plugins: [visualizer({ open: true })],
> });
> ```
>
> npm run build, and watch what happens.

> DONT just copy paste! **Learn!**

---

---

# Build Tools

> `npm run dev` runs file locally, usually at port 5173
>
> - Hot reload
> - Fast debugging
>   This is only for development, not for real performance testing.

> `npm run build` production version of the site.
>
> - Combines and optimizes files
> - Minifies JS and CSS
> - Removes development tools
> - `dist` folder is created.
>   Distribution, contains the final optimized version of your website that is ready to be deployed to a server.
>   Combines files, Minifies code, Removes development tools, Optimizes assets, Then it puts the final result in `dist/`

> `npm run preview` Runs a local server for the built site, usually at port 4173.
>
> - It lets you test the production build locally.
> - Always do build before preview.

> `ngrok http 5173/4173`
> ngrok is a tool to expose local server to the internet, for testing, only people with the link can access the path.
> Host project in ngrok, give to friends, try on different devices.
> How to install? AI, Google.

## Lighthouse

> Open Build Tools, look for lighthouse, run it, see the score, learn more about lighthouse. AI, Google.

---

---

[TOP](#react)

# SEO, CRAWLERS, AI

> React way of making a table.
> ```html
> <table className="tailwindcss">
>   <caption className="sr-only">
>     Topics this table is about
>   </caption>
>   <thead className="tailwindcss">
>     <tr>
>       <th></th>
>       <th></th>
>     </tr>
> <tbody>
>            {[
>              ["row1column1", "r1c2"],
>              ["r2c1", "r2c2"],
>              ["r3c1", "r3c2"],
>            ].map((row, idx) => (
>              <tr key={idx} className={rowClass(idx)}>
>                {row.map((cell, cIdx) => (
>                  <td key={cIdx} className="px-4 py-2">
>                    {cell}
>                  </td>
>                ))}
>              </tr>
>            ))}
>   </thead>
> </table>
> ```
>`caption` the tag crawlers, google, AI, etc looks for in a table for SEO purpose. `"sr-only"`. Screen-Read only, so the user cant see this, only the bots can.

> Adding meta tags in head of html files. Google types of meta tags, how to use them, what they do.

---

---

[TOP](#react)

---

---

<sub>© 2026 RabbitJahir. All rights reserved.</sub>
