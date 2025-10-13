import type { Route } from "../../+types/root";
import type { Post } from "types";
import Markdown from "react-markdown";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zahirul Blog" },
    { name: "description", content: "Welcome to my blog!" },
  ];
}

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;
  const res = await fetch("http://localhost:1337/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const posts = await res.json();
  let postData = posts?.data;
  postData = postData.find((post: Post) => post.slug === slug);
  return postData;
}

const BlogDetails = ({ loaderData }: Route.ComponentProps) => {
  const postData = loaderData;
  return (
    <main>
      {postData && (
        <article className="prose prose-headings:text-neutral-700 prose-headings:dark:text-neutral-50 dark:prose-invert">
          <Markdown>{postData.content}</Markdown>
        </article>
      )}
    </main>
  );
};
export default BlogDetails;
