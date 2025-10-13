import type { Route } from "../../+types/root";
import type { Post } from "types";
import Markdown from "react-markdown";

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
        <section>
          <h1 className="text-3xl font-bold text-neutral-700 dark:text-neutral-50">
            {postData.title}
          </h1>
          <p className="my-1 text-neutral-600 dark:text-neutral-400">
            {new Date(postData.date).toDateString()}
          </p>
          <article className="prose dark:prose-invert">
            <Markdown>{postData.content}</Markdown>
          </article>
        </section>
      )}
    </main>
  );
};
export default BlogDetails;
