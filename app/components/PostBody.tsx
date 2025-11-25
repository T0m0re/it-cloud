import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "~/sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { toast } from "sonner"

const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

export function PostBody({ content, postUrl }: { content: any, postUrl: string }) {

const copyText = (value: string) => {
  navigator.clipboard.writeText(value)
  toast("copied to clipboard.")
};

const shareBlog = (platform: string, url: string) => {
  const encodedURL = encodeURIComponent(url);
  const encodedText = encodeURIComponent('Check out this article!');

  let shareLink = "https://twitter.com/intent/tweet?url=$goal.com";

  if (platform === "twitter") {
    shareLink = `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedText}`;
  } else if (platform === "linkedin") {
    shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`;
  }
  console.log(shareLink)
  window.open(shareLink, "_blank", "noopener,noreferrer");
};

  return (
    <div className="prose-lg max-w-none dark:prose-invert flex items-start justify-between max-sm:flex-col max-sm:gap-4">
        <div className="flex-3">
            <PortableText value={content} components={portableTextComponents} />
        </div>
      <aside className="md:sticky md:top-28 lg:top-20 flex-1 flex md:flex-col md:items-end-safe gap-6">
        <button className="twitter cursor-pointer" onClick={()=>{shareBlog('twitter', `home/blog/${postUrl}`)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z" stroke-width="1"/></svg>
        </button>
        <button className="linkedin cursor-pointer" onClick={()=>{shareBlog('linkedin', `home/blog/${postUrl}`)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="#000" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z"/></svg>
        </button>
        <button className="copy cursor-pointer" onClick={()=>copyText(`home/blog/${postUrl}`)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"/><path fill="#000" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"/></svg>
        </button>
      </aside>
    </div>
  );
}

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).width(500).quality(100).url()}
        alt={value.alt || ""}
        className="rounded-xl my-1 shadow-sm"
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
