import type { SanityDocument } from "@sanity/client"
import { Link } from "react-router"


const RelatedPosts = ({post} : SanityDocument) => {
  return (
    <section>
        <h3>Related Posts</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {post.map((post) => (
                <li className="shadow-2xl rounded-lg border border-muted">
                <div className="relative w-full h-full">
                    <img src={post.imageUrl} alt="blog texr" className="rounded-b-lg min-h-full object-cover"/>
                </div>
                <h2 className="text-2xl font-medium">{post.title}</h2>
                <Link to={`/blog/${post.slug.current}`}>Read more</Link>
            </li>
            ))}
            
        </ul>
    </section>
  )
}
export default RelatedPosts