# installing

- `npx create-next-app@latest` , use default settings. Wait untill installation is done, might take some time.

# Structure

## .next

>

## app

> where we develop

> `global.css`, the css that links in everypage

### layout.tsx

>  `Metadata` SEO section

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
> ```

## postcss.config.mjs

- only because using tailwindcss

## tsconfig.json
