import type { SanityDocument } from "@sanity/client"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router"

 interface RelatedPost {
    title: string
    imageUrl: string
    categories: { title: string }[]
    slug: {
        current: string
        }
    }

const RelatedPosts = ({ post }: { post: RelatedPost[] }) => {
  return (
    <section className="my-20 border-t border-muted">
        <h3 className="text-4xl font-bold my-6">Read Related Posts</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.map((post : RelatedPost) => (
                <li key={post.title} className="flex flex-col gap-4">
                <div className="relative w-full h-50 overflow-hidden rounded-lg">
                    <div className="absolute bg-indigo-500 rounded-lg top-1 right-1 px-2 py-1 flex items-center z-10">
                        {post.categories.map((category) => (
                        <span className="text-xs text-white">{category.title}</span>
                        ))}
                    </div>
                    <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg h-full object-cover transition-transform duration-300 hover:scale-105"/>
                </div>
                <div className="p-2 w-full">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <Link to={`/blog/${post.slug.current}`} className="inline-flex items-center text-sm text-black hover:text-black/60 uppercase text-nowrap font-semibold transition-colors">
                        <span>Continue reading...</span>
                        <ChevronRight/>
                    </Link>
                </div>
                
            </li>
            ))}
            
        </ul>
    </section>
  )
}
export default RelatedPosts