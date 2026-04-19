## .next

## app

> where we develop

> `global.css`, the css that links in everypage

#### layout.tsx

>  `Metadata` SEO section

#### globals.css

> css that applies everywhere

#### components

> codes/ logics that requires  to be used in many pages,
> make once use anywhere

#### hooks

> same as components, but custom made logics, easier to maintain in bigger projects

## node_modulus

>

## public

> for images, svg, ico

## .gitignore

> ignored in github

## eslint.config.mjs

> dont touch till you understand

## next-env.d.ts

> auto generated.
> ne need to touch

## next.config.ts

> needed, but after you actually understand and learn next

> add enviromental variables, webpack configurations, enable/disbale features, customize nextjs settings

## package-lock.json

## package.json

> ```json
> {
>  "name": "next2",
>  "version": "0.1.0",
>  "private": true,
>  "scripts": {
>    "dev": "next dev --turbopack", // turbopack only affects in >development, makes dev faster, rust written
>    "build": "next build",
>    "start": "next start",
>    "lint": "eslint" `npm run lint`
>  },
>}
> ```

## postcss.config.mjs

- only because using tailwindcss

## tsconfig.json

---

# Understanding

> - next is folder based, want to make new pages? Create a new folder with the file named page.tsx, and call pages using folder name.
>   - page.tsx sturcture:
>     ```tsx
>     export default function page/folder_name(){
>     return(
>       <div></div>  
>     ) }
>```

