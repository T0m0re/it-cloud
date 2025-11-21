import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('/about', 'routes/about.tsx'),
    route('/pricing', 'routes/pricing.tsx'),
    route('/case-studies', 'routes/case-studies.tsx'),
    route('/services', 'routes/services.tsx'),
    route('/blog', 'routes/blog.tsx'),
])] satisfies RouteConfig;
