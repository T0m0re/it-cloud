import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('/about', 'routes/about.tsx'),
    route('/pricing', 'routes/pricing.tsx'),
    route('/case-studies', 'routes/case-studies.tsx'),
    route('/services', 'routes/services.tsx'),
     // blog
    route('/blog', 'routes/blog.tsx'),
    route('/blog/category/:slug', 'routes/category.tsx'),
    route('/blog/:slug', 'routes/blogPage.tsx'),
    route('/blog/category/:category/:slug', 'routes/categoryBlogPage.tsx'),

])] satisfies RouteConfig;
