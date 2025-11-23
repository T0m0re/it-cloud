import type { SanityDocument } from "@sanity/client"
import { Link } from "react-router"
import { formatDate } from "~/lib/utils"

type SanityBlog = {
    posts: SanityDocument[]
}

const Blogs = ({posts}: SanityBlog) => {
  return (
    <section className="my-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((postDetails) => (
                            <li key={postDetails._id} className="shadow-2xl rounded-lg border border-muted">
                                <Link  to={postDetails.slug.current} className="inline-flex flex-col items-center justify-between h-full">
                                    <div className="flex flex-col items-start justify-between flex-nowrap gap-2 w-full px-2 pt-4 pb-4">
                                        <h2 className="text-2xl font-medium">{postDetails.title}</h2>
                                        <h2 className="text-sm font-light">Author: <span className="font-semibold">{postDetails.author.name}</span></h2>
                                        <p className="text-xs font-medium">{formatDate(postDetails.publishedAt)}</p>
                                    </div>
                                    <div className="relative w-full h-full">
                                        <img src={postDetails.imageUrl} alt="blog texr" className="rounded-b-lg min-h-full object-cover"/>
                                    </div>
                                </Link>
                            </li>
                        ))} 
                </ul>
            </section>
  )
}
export default Blogs