import type { SanityDocument } from "@sanity/client";
import { client } from "~/sanity/client";
import type { Route } from "./+types/blog";
import { Link } from "react-router";
import { formatDate } from "~/lib/utils";
import { POST_CATEGORY_QUERY, POSTS_QUERY } from "~/sanity/queries";
import { useState } from "react";

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
    const [currentFilter, setCurrentFilter] = useState('all')
    const {categories, posts} = loaderData
    const filterSearch = (title: string) => {
        setCurrentFilter(title)
    }
  return (
    <main className="relative overflow-hidden" >
        <div className="container max-sm:mt-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between min-h-80">
                <div className="md:flex-1">
                    <h2 className="max-w-4/5 font-serif text-3xl md:text-4xl lg:text-6xl text-foreground leading-[0.9] tracking-tight animate-fade-in-up delay-100">Blog</h2>
                </div>
                <div className="md:flex-1 font-serif p-4 flex flex-col items-start justify-between gap-4">
                    <input type="text" placeholder="Type to start searching" className="max-w-xl rounded-lg bg-muted/50 w-full p-2 border-[0.5px] border-muted-foreground focus:outline-none "/>
                    <p className="text-sm leading-normal max-w-xl">Discover expert tips, tools, and strategies to help you find the right information faster. From advanced search techniques to the latest search engine updates, this category helps you stay sharp and efficient online.</p>
                </div>
            </div>

            <div className="flex font-serif items-center justify-center w-full">
                    <ul className="max-w-full flex items-center justify-between gap-4 bg-muted/50 p-2">
                        <li className="p-1 bg-white rounded-lg border border-border/50 text-black hover:bg-mute cursor-pointer text-nowrap">All posts</li>
                        {categories.map((cat, i) => (
                                <li key={i} className="p-1  rounded-lg border border-border/50 text-black hover:bg-mute cursor-pointer text-nowrap" onClick={() => filterSearch(cat.title)}>{cat.title}</li>
                        ))}
                    </ul>
            </div>
            

            <section className="my-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <li className="shadow-2xl rounded-lg border border-muted">
                        {posts.map((postDetails) => (
                            <Link key={postDetails._id} to={postDetails.slug.current} className="flex flex-col items-center justify-between">
                            <div className="flex flex-col items-start justify-between gap-2 w-full px-2 pt-4 pb-4">
                                <h2 className="text-2xl font-medium">{postDetails.title}</h2>
                                <h2 className="text-sm font-light">Author: <span className="font-medium">{postDetails.author.name}</span></h2>
                                <p className="text-xs font-light">{formatDate(postDetails.publishedAt)}</p>
                            </div>
                            <div className="relative w-full h-50">
                                <img src={postDetails.imageUrl} alt="blog texr" className="rounded-b-lg min-h-full object-cover"/>
                            </div>
                        </Link>
                        ))} 
                    </li>
                </ul>
            </section>
        </div>
    </main>
  )
}
export default Blog