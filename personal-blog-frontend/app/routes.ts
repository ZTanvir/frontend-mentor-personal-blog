import { type RouteConfig,route, index } from "@react-router/dev/routes";

export default [
    index("routes/home-page.tsx"),
    route("/home","routes/home-page.tsx",{id:"home-route"}),
    route("/blog","routes/blog/blog-page.tsx"),
    route("/blog/:slug","routes/blog/blog-details.tsx"),
    route("/about","routes/about-page.tsx"),
    route("/newsletter","routes/newsletter-page.tsx")
] satisfies RouteConfig;
