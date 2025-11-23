import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "~/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

export function PostBody({ content }: { content: any }) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  );
}

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).width(500).quality(100).url()}
        alt={value.alt || ""}
        className="rounded-xl my-3 shadow-sm "
      />
    ),

    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
        <code>{value.code}</code>
      </pre>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-10 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mt-6 mb-2">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>
    ),

    normal: ({ children }: any) => (
      <p className="leading-7 my-2">{children}</p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-8 my-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 my-4">{children}</ol>
    ),
  },

  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,

    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};
