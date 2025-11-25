export const POST_CATEGORY_QUERY = `*[_type == "category"]`
export const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
]|order(publishedAt desc)[0...12]
{_id, title, author->{name}, slug, publishedAt, "imageUrl": mainImage.asset->url,}`;

export const FILTERRED_POST_QUERY = `
*[
  _type == "post" 
  && $slug in categories[]->slug.current
]|order(publishedAt desc)[0...12]
{
  _id,
  title,
  slug,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  author->{name},
}`

export const GET_SINGLE_POST = `
*[_type == "post" && slug.current == $slug][0]
  {
  _id,
  title,
  publishedAt,
  mainImage,
  author->{name},
  body,
  slug,
  categories[]->{slug}
}
`;

export const GET_RELATED_POST =`
*[
  _type == "post" &&
  count(categories[]->slug.current[@ in $slugs]) > 0 &&
  slug.current != $currentSlug
] | order(publishedAt desc)[0...12] {
  title,
  slug,
  "imageUrl": mainImage.asset->url,
  categories[]->{title}
}

`
