import type { Route } from "../../+types/root";
import { Link } from "react-router";
import type { Post } from "types";
import BlogPost from "~/components/Post";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zahirul Blog" },
    { name: "description", content: "Welcome to my blog!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const res = await fetch("http://localhost:1337/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const posts = await res.json();
  return posts?.data;
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const posts = loaderData;
  return (
    <main>
      <h1 className="mb-4 text-3xl font-bold text-neutral-700 dark:text-neutral-50">
        My Articles
        <span className="ml-2 inline-block min-w-14 border-b-3 border-b-blue-400"></span>
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Below are all my recent blog posts. Click on any title to read the full
        article.
      </p>
      <hr className="mx-3 my-6 text-neutral-200 dark:text-neutral-700" />
      <div>
        {posts &&
          posts.map((post: Post) => (
            <Link to={`/blog/${post.slug}`} key={post.id}>
              <BlogPost post={post} />
            </Link>
          ))}
      </div>
    </main>
  );
};
export default BlogPage;
