import { type RouteConfig,route, index,layout } from "@react-router/dev/routes";

export default [
    layout("routes/mainLayout.tsx",[
    index("routes/home-page.tsx"),
    route("/home","routes/home-page.tsx",{id:"home-route"}),
    route("/blog","routes/blog/blog-page.tsx"),
    route("/blog/:slug","routes/blog/blog-details.tsx"),
    route("/about","routes/about-page.tsx"),
    route("/newsletter","routes/newsletter-page.tsx")
    ])
   
] satisfies RouteConfig;
