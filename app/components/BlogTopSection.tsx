import type { SanityDocument } from "@sanity/client";
import { useState } from "react"
import { Link } from "react-router"
import { cn } from "~/lib/utils"


interface BlogTopSectionProps {
    categories: SanityDocument[]
}

const BlogTopSection = ({ categories }: BlogTopSectionProps) => {
    const [currentFilter, setCurrentFilter] = useState('all')
  return (
        <main className="relative overflow-hidden" >
        <div className="container max-sm:mt-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between min-h-80">
                <div className="md:flex-1 flex flex-col justify-between gap-4">
                    <h2 className="max-w-4/5 font-serif text-3xl md:text-4xl lg:text-6xl text-foreground leading-[0.9] tracking-tight animate-fade-in-up delay-100">Blog</h2>
                    <p className="text-md leading-normal max-w-xl">Discover expert tips, tools, and strategies to help you find the right information faster. From advanced search techniques to the latest search engine updates, this category helps you stay sharp and efficient online.</p>
                </div>
                <div className="md:flex-1 font-serif p-4 flex flex-col items-start justify-between gap-4">
                    <input type="text" placeholder="Type to start searching" className="max-w-xl rounded-lg bg-muted/50 w-full p-2 border-[0.5px] border-muted-foreground focus:outline-none "/>
                    
                </div>
            </div>

            <div className="bg-muted/50 flex font-serif items-center justify-center w-full overflow-x-auto scrollbar-x-none">
                    <ul className="max-w-full flex items-center justify-between gap-4  p-2">
                        <li className={cn("p-1 rounded-lg border border-border text-black hover:bg-mute cursor-pointer text-nowrap", currentFilter === "all" && "bg-white")} onClick={() => setCurrentFilter('all')}>
                            <Link to='/blog'>
                                All posts
                            </Link>
                        </li>
                        {categories.map((cat, i) => (
                            <li key={i} className={cn("p-1 rounded-lg border border-border text-black hover:bg-mute cursor-pointer text-nowrap", currentFilter === cat.title && "bg-white")} onClick={() => setCurrentFilter(cat.title)}>
                                <Link to={`/blog/category/${cat.slug.current}`}>{cat.title}</Link>
                                </li>
                        ))}
                    </ul>
            </div>
            {/* <Blogs posts={posts}/> */}
        </div>
    </main>
  )
}
export default BlogTopSection