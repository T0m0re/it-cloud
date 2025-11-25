import { client } from "~/sanity/client";
import {type LoaderFunctionArgs } from "react-router";
import { FILTERRED_POST_QUERY, POST_CATEGORY_QUERY, POSTS_QUERY } from "~/sanity/queries";
import type { Route } from "./+types/category";
import Blogs from "~/components/Blogs";
import type { SanityDocument } from "@sanity/client";
import BlogTopSection from "~/components/BlogTopSection";
import Pagination from "~/components/Pagination";
import Footer from "~/components/Footer";

export async function loader({params, request}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const { slug } = params;
  const currentPage = parseInt(url.searchParams.get("page") || "1");
  const postsPerPage = 12
  const start = (currentPage - 1) * postsPerPage;
  const totalPosts = await client.fetch(`count(*[_type == "post" && '${slug}' in categories[]->slug.current])`);
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
   const categories = await client.fetch<SanityDocument[]>(POST_CATEGORY_QUERY)

    const posts = await client.fetch(
      FILTERRED_POST_QUERY.replace(
        "$start", String(start)).replace("$[start + postperPage]", String(start + postsPerPage)).replace("$postperPage", String(postsPerPage)
      ), { slug });
    return {posts, categories, totalPages, currentPage }
}
const category = ({loaderData}: Route.ComponentProps) => {
    const {posts, categories, currentPage, totalPages} = loaderData;

  return (
    <>
        <BlogTopSection categories={categories}/>
        {posts.length > 0 && (
            <>
              <Blogs posts={posts}/>
              <Pagination currentPage={currentPage} totalPages={totalPages}/>
            </>
        )}
        <Footer/>
    </>
  )
}
export default category