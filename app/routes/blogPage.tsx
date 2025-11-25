
import { GET_RELATED_POST, GET_SINGLE_POST } from "~/sanity/queries";
import type { Route } from "./+types/blogPage";
import { client } from "~/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityDocument } from "@sanity/client";
import { ChevronLeft } from "lucide-react";
import { formatDate } from "~/lib/utils";
import { PostBody } from "~/components/PostBody";
import RelatedPosts from "~/components/RelatedPosts";
import { Link } from "react-router";
import Footer from "~/components/Footer";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function loader({ params }: Route.LoaderArgs) {
    const currentSlug = params.slug;
    const posts = await client.fetch<SanityDocument>(GET_SINGLE_POST, params)
    const categories = await posts.categories ?? [];
    const slugs = categories.map((cat : {slug: {current : string}}) => cat.slug.current)
    const relatedPosts = await client.fetch(GET_RELATED_POST, {slugs, currentSlug})
  return { posts, relatedPosts };
}

export function meta({ loaderData}: Route.MetaArgs) {
    const posts = loaderData;
  return [
    { title: posts.posts.title },
    { name: "description", content: "Reliable cloud, network & security services for growing businesses." },
  ];
}

const BlogPage = ({loaderData}: Route.ComponentProps) => {
    const {posts, relatedPosts} = loaderData;
    let postImageUrl = null;
    if (posts.mainImage) {
        const builder = urlFor(posts.mainImage);
        postImageUrl = builder ? builder.width(750).height(310).url() : null;
    }
  return (
    <>
    <main className="max-w-5xl mx-auto font-serif">
            <Link to={'/blog'}>
            <button className="inline-flex items-center justify-between hover:bg-mute cursor-pointer bg-muted py-1 px-3 my-6" >
                <ChevronLeft/>
                <span className="font-medium text-sm">back to Blog</span>
            </button>
        </Link>
        <section className="">
        <div className="flex flex-col items-start justify-between gap-2">
            <img src={postImageUrl!} alt="" className="w-full rounded-lg image-rendering-[pixelated]" width={800}/>
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center justify-between gap-1">
                    <img src="/prime-user.svg" alt="profile icon" className="w-4"/>
                    <p className="font-medium text-sm">{posts.author.name}</p>
                </div>
                <div className="flex items-center justify-between gap-1">
                    <img src="/calendar.svg" alt="profile icon" className="w-4"/>
                    <p className="font-medium text-sm">{formatDate(posts.publishedAt)}</p>
                </div>
            </div>
            <h2 className="font-bold text-2xl">{posts.title}</h2>
            <article className="">
                <PostBody content={posts.body} postUrl={posts.slug.current}/>
            </article>
        </div>
        </section>
        <RelatedPosts post={relatedPosts}/>
    </main>
    <Footer/>
    </>
  )
}
export default BlogPage