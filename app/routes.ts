import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/MainLayout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("projects", "routes/projects.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
