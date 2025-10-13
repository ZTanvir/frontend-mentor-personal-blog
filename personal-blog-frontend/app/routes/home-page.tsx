import type { Route } from "../+types/root";
import About from "~/components/About";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zahirul Blog" },
    { name: "description", content: "Welcome to my blog!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const res = await fetch("http://localhost:1337/api/posts?sort=date:desc");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const posts = await res.json();
  return posts?.data;
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  const posts = loaderData;
  const postLimit = 5;
  return (
    <>
      <main>
        <About userName="Paulina" />
        <hr className="mx-3 my-6 text-neutral-200 dark:text-neutral-700" />
        <div>
          <h2 className="mb-6 text-3xl font-bold text-neutral-700 dark:text-neutral-50">
            Latest Articles
            <span className="ml-2 inline-block min-w-14 border-b-3 border-b-blue-400"></span>
          </h2>
          {posts.slice(0, postLimit).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <section className="mb-5">
                <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-50">
                  {post.title}
                </h3>
                <p className="mt-1 text-neutral-600 italic dark:text-neutral-400">
                  {new Date(post.date).toDateString()}
                </p>
              </section>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
