import type { SanityDocument } from "@sanity/client";
import { client } from "~/sanity/client";
import type { Route } from "./+types/blog";
import { Link, Navigate } from "react-router";
import { cn, formatDate } from "~/lib/utils";
import { POST_CATEGORY_QUERY, POSTS_QUERY } from "~/sanity/queries";
import { useState } from "react";
import Blogs from "~/components/Blogs";
import BlogTopSection from "~/components/BlogTopSection";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Nimbus-IT Blog" },
    { name: "description", content: "AI-Powered Video Editing in Your Browser" },
  ];
}

export async function loader() {
    const categories = await client.fetch<SanityDocument[]>(POST_CATEGORY_QUERY)
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
  return {categories, posts}
}

const Blog = ({ loaderData }: Route.ComponentProps) => {
    const {categories, posts} = loaderData;
    console.log({categories, posts})

  return (
    <>
        <BlogTopSection categories={categories}/>
        <Blogs posts={posts}/>
    </>
  )
}
export default Blog