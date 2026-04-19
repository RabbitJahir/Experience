
# SEO

#### PedroTechnologies NextJS 16 SEO crash Course, youtube.

> ### Rendering pages, using server rendering, not client rendering (use client)

> ### Metadata in everypage, for best SEO, for static pages
>
> ```tsx
> `import {Metadata} from "next";`
>
>export const metadata: Metadata = {
>   title: "", // shows at the top bar
>   description: "", 
>   keywords: ["",""], // to match
>
>   openGraph: { // ogp.me, opengraph.xyz , Metaapps use openGraph, only twitter is different
>     title: "",
>     description: "",
>     siteName: "",
>     images: [
>       {
>         url: "",
>         width: "",
>         height: "",
>       }
>     ],
>     locale: "", //place where sharing
>     type: "", // type of link, website, article, porfolio etc. Be specific with everything for 100/100 effect.
>   }, 
>   twitter: {
>     card: "",
>     title: "",
>     description: "",
>     creator: "",
>     images: [""],  
>  }
>
>   robots: {
>     index: true, // search engines includes the page to see
>     follow: true, // bots follow links inside page
>     nocache: false, // search engines dont cache
>     googleBot: {  //different types of bots
>       index: true,
>       follow: true,
>       "max-snippet": -1,
>       "max-image-preview": "large",
>       "max-video-preview": -1,
>     }
>   }
>} 
>```

> ### for dynamic page metadata
> ```tsx
> export async function generateMetadata(){
>  
>}
>```
> Suppose the page has tons of items, clicking one shows a different UI/page, metadata cant be constant is such a state, for this dynamic metadata will vary depending on how we call/ use the dynamic logics. Read more about it.



> ### robots.ts file at root of project, app. Control Webcrawlers where they can and cant go, security.
> robots.ts with sitemap.ts
>
>```ts
> import {Metadata} from "next";
> export default function robots(): MetadataRoute.Robots{
> const baseurl = "main-website-url.com"; // from sitemap.ts
>   return {
>     rules: [
>       {
>         userAgent: "*", //select what kind of robots to control
>         allow: "/",
>         disallow: ["/contact/", "/api/" ],  
>       },
>       {
>         userAgent: "Googlebot", //select what kind of robots to control
>         allow: "/",
>         disallow: ["/contact/", "/terms-&-conditions/"], // add '/' at end 
>       },
>      ], 
>     sitemap: `${baseurl}/sitemap.xml`, // can be find online
>   };
>}
>```

> ### sitemap.ts tells search engines about pages, how to find them, and which are more important
>
> static sitemap, sitemap.ts with robots.ts
>```ts
> import {Metadata} from "next";
>
> export default function sitemap(): MetadataRoute.Sitemap{
>    const baseurl = "main-website-url.com"
>    return [ 
>       {
>         url: baseurl, // landing page
>         lastModified: new Date(), // modified today
>         changeFrequecy: "weekly", 
>         priority: 1,
>       } 
>       {
>         url: `${baseurl}/about`, // landing page
>         lastModified: new Date(), // modified today
>         changeFrequecy: "monthly", 
>         priority: 0.8,
>       } 
>   ];
>}