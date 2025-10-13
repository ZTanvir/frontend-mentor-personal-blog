import type { Post } from "types";

type PostProps = {
  post: Post;
};

const BlogPost = ({ post }: PostProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-neutral-700 dark:text-neutral-50">
        {post.title}
      </h2>
      <p className="my-1 text-neutral-600 italic dark:text-neutral-400">
        {new Date(post.date).toDateString()}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400">{post.excerpt}</p>
      <hr className="mx-3 my-6 text-neutral-200 dark:text-neutral-700" />
    </section>
  );
};

export default BlogPost;
