import { type RouteConfig,route, index } from "@react-router/dev/routes";

export default [
    index("routes/home-page.tsx"),
    route("/home","routes/home-page.tsx",{id:"home-route"}),
    route("/blog","routes/blog-page.tsx"),
    route("/about","routes/about-page.tsx"),
    route("/newsletter","routes/newsletter-page.tsx")
] satisfies RouteConfig;
