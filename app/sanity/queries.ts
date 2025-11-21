export const POST_CATEGORY_QUERY = `*[_type == "category"]{title}`
export const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, author->{name}, slug, publishedAt, "imageUrl": mainImage.asset->url}`;