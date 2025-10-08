import type { Route } from "../+types/root";
import { Form } from "react-router";
import checkCircleIcon from "../../public/assets/images/check-circle.svg";
import iconError from "../../public/assets/images/icon-error.svg";

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let email = formData.get("email") as string;
  const emailPattern: RegExp =
    /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}

const NewsLetterPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <main>
      <section>
        <h1 className="mb-4 text-4xl font-bold text-neutral-700 dark:text-neutral-50">
          Newsletter
        </h1>
        <p className="mb-2 text-neutral-700 dark:text-neutral-50">
          Want to stay updated on my latest articles, coding tutorials, and
          personal adventures? Sign up for my newsletter! It’s a simple way to
          keep track of new posts and occasional coding tips I discover. Just
          drop your email in the sign-up box, and I’ll send you updates whenever
          there’s something new to share.
        </p>
        <p className="mb-2 font-bold text-neutral-700 dark:text-neutral-50">
          I’d love to have you along for the ride and also hear about your own
          journey!
        </p>
      </section>
      <Form method="post" className="my-2">
        <div className="mb-2 flex flex-col gap-1">
          <label
            className="text-neutral-700 dark:text-neutral-50"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className={`${
              actionData === undefined
                ? "border-neutral-300"
                : actionData === true
                  ? "border-green-500"
                  : "border-red-400"
            } bg:border-neutral-600 w-full rounded-md border bg-neutral-50 px-3 py-2 text-neutral-700 placeholder-neutral-600 focus:outline-blue-400 dark:bg-neutral-800 dark:text-neutral-300 dark:placeholder-neutral-300 dark:focus:outline-neutral-600`}
            type="text"
            name="email"
            id="email"
            placeholder="email@example.com"
          />
          {actionData !== undefined &&
            (actionData === true ? (
              <p className="flex gap-1 text-green-500">
                <img src={checkCircleIcon} alt="green check icon" />
                You’re subscribed! Check your inbox for updates.
              </p>
            ) : (
              <p className="flex gap-1 text-red-400">
                <img src={iconError} alt="green check icon" />
                Please enter a valid email address..
              </p>
            ))}
        </div>
        <button
          className="rounded-2xl bg-blue-400 px-6 py-3 text-neutral-900 hover:cursor-pointer hover:bg-blue-500"
          type="submit"
        >
          Stay updated
        </button>
      </Form>
      <p className="text-neutral-700 dark:text-neutral-50">
        Unsubscribe anytime. No spam, I promise 🙂
      </p>
    </main>
  );
};
export default NewsLetterPage;
