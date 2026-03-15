# Tauri

> Tauri is a framework, used to build desktop apps. </br>
> For frontend, use any frontend language. I prefer, React.</br>
> For backend, rust.(language).

> If my project has no backend, do I still need Rust?
> - Yes. Because tauri needs a backend layer of rust to actually make the `.exe`, `.deb`, `.AppImage` files. This file creation happens automatically.

---

1. [Installing](#installing-tauri)
2. [Production app](#making-the-production-app)
3. [App](#making-the-app)
4. [Folder structure](#tauri-folder-structure)

---

# Installing tauri

> You have a react project or any kind of project ready to go. Now you want to make a desktop app!</br>
> Inside the folder where package.json and or src is. Install tauri.
> ```jsx
> npm install --save-dev @tauri-apps/cli //tauri downloads only for current folder. Better option if new to this.
> npm install -g @tauri-apps/cli //tauri downloads globally, for all folders
>```

> making the tauri source folder
> ```jsx
> npx tauri init
>```
> starts making the tauri project. npx: runs node package binary. tauri: referring to tauri. init: tells tauri to crete new folder, src-tauri

>```jsx
>✔ What is your app name? //just the folder name/ internal name
>✔ What should the window title be? // ! important ! title shown at the top of the window when the app runs.
>✔ Where are your web assets (HTML/CSS/JS) located, relative to the "<current dir>/src-tauri/tauri.conf.json" file that will be created? · ../dist // `../` go up one folder, and run dist, the folder where my react/ frontend lives. dist is default for vite. 
>✔ What is the url of your dev server? · http://localhost:5173
>✔ What is your frontend dev command? · npm run dev //command Tauri runs to start your frontend in development mode. React with Vite: npm run dev
>✔ What is your frontend build command? · npm run build //command Tauri runs to create a production version of your frontend
>```
> If you made any error, or want to change these settings, head on to `src-tauri -> tauri.conf.json`

# Making the production app

> `npm run dev`, make sure project is running.</br>
> `npm run build`, makes the dist folder, the folder where codes actually run in build mode.</br>
> `npx tauri build`, builds the develpmental app.</br>
> `npm run tauri dev`, runs the developmental app, to preview.
>
> Tadah! It's your app!

> If you find any issue, copy the error lines along with the path where the line runs and AI it. 

# Making the App

> Head to `src-tauri` -> `tauri.conf.json`
> Look for
> ```jsx
>  "productName": "first turi calculator",
>  "version": "0.1.0",
>  "identifier": "com.first.tauri.calculator.dev",
>```
> Product Name: the name that shows on app display.
> Version: version number of app.
> identifier: has to be uniqe, no uppercase, only dots, numbers, letters. Google to learn more.
>
> `npx tauri build` 

## Finding the downloadable app link

> use `npm run tauri build`
> `src-tauri/target/release/bundle/`  find this path, better if you go to the path in your computer folders/path/explorer and find the file to download your app.


> For a Windows .exe
>GitHub Actions (recommended, free)
Push your code to GitHub and add a workflow file that builds on Windows automatically. It produces a .exe and .msi as downloadable artifacts. I can write the full workflow file for you if you want.

---

# tauri folder structure

## capabilities

## gen

## icons

> To change the default icon, take your image.format and put inside the icons folder, then run 
>```jsx
> npm exec tauri icon /home/to/your/image/path/image.format
>```

## src

## target

## .gitignore

## build.rs

>You almost never need to touch the rust build script. It just needs to exist so Tauri can do its setup work before your actual Rust code compiles. It's the reason your app icon, app name, and other bundle settings from tauri.conf.json actually make it into the final binary.

## Cargo.lock

> We never make changes here, the file auto updates. <br/>
>Why it exists: If you share your project with someone else, they get the exact same versions of every package, not just "close enough" versions. This prevents the classic "works on my machine" problem.

## Cargo.toml

> toml "Tom's Obvious Minimal Language" — it's just a configuration file format, like json but more human-readable. Rust's equivalent of package.json.
>```jsx
>[package] — your app name, version, author <br/>
> - name = "captains_todo"
> - version = "0.1.0"
> - description = "A Tauri App"
> - authors = ["us"]
> - edition = "2026" //dont change, google it, 
>```
> If you change this, you must also make changes in `src-tauri/tauri.conf.json`<br/>
>```json
>{
>  "productName": "Captains Todo",
>  "version": "1.0.0",
>  ...
>  "bundle": {
>    "identifier": "com.us.captainstodo"
>  }
>}
>```

> After changing, rebuild `npx tauri build` 

>[lib] — tells Rust to build a library (needed for Tauri's architecture) </br>
>[dependencies] — tauri, serde (serialization), etc. Like npm packages but for Rust </br>
>[profile.release] — optimizations when you run npx tauri build (smaller file, faster app) </br>

## tauri.conf.json

> Can change your app's name.

