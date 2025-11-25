import type { SanityDocument } from "@sanity/client";
import { client } from "~/sanity/client";
import type { Route } from "./+types/blog";
import { POST_CATEGORY_QUERY, POSTS_QUERY } from "~/sanity/queries";
import Blogs from "~/components/Blogs";
import BlogTopSection from "~/components/BlogTopSection";
import Pagination from "~/components/Pagination";
import Footer from "~/components/Footer";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Nimbus-IT-Blog" },
    { name: "description", content: "Reliable cloud, network & security services for growing businesses." },
  ];
}

export async function loader({request} : Route.LoaderArgs) {
  const url = new URL(request.url);
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const postsPerPage = 12
  
  const start = (currentPage - 1) * postsPerPage;
  const totalPosts = await client.fetch(`count(*[_type == "post"])`);
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const categories = await client.fetch<SanityDocument[]>(POST_CATEGORY_QUERY)
    const posts = await client.fetch<SanityDocument[]>(
      POSTS_QUERY.replace("$start", String(start)).replace("$[start + postperPage]", String(start + postsPerPage)).replace("$postperPage", String(postsPerPage))
    )
  return {categories, posts, totalPages, currentPage}
}

const Blog = ({ loaderData }: Route.ComponentProps) => {
    const {categories, posts, totalPages, currentPage} = loaderData;

  return (
    <>
        <BlogTopSection categories={categories}/>
        {posts.length > 0 && (
          <>
            <Blogs posts={posts}/>
            <Pagination totalPages={totalPages} currentPage={currentPage}/>
          </>
        )}
        <Footer/>
    </>
  )
}
export default Blog