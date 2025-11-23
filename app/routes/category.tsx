import { client } from "~/sanity/client";
import {type LoaderFunctionArgs } from "react-router";
import { FILTERRED_POST_QUERY, POST_CATEGORY_QUERY } from "~/sanity/queries";
import type { Route } from "./+types/category";
import Blogs from "~/components/Blogs";
import type { SanityDocument } from "@sanity/client";
import BlogTopSection from "~/components/BlogTopSection";

export async function loader({params}: LoaderFunctionArgs) {
   const { slug } = params;
   const categories = await client.fetch<SanityDocument[]>(POST_CATEGORY_QUERY)
    const posts = await client.fetch(FILTERRED_POST_QUERY, { slug });
    return {posts, categories }
}
const category = ({loaderData}: Route.ComponentProps) => {
    const {posts, categories} = loaderData;

  return (
    <>
        <BlogTopSection categories={categories}/>
        <Blogs posts={posts}/>
    </>
  )
}
export default category