import SocialMediaIcons from "~/components/SocialMediaIcons";
import imageWorkspaceLarge from "../../public/assets/images/image-workspace-large.jpg";
import imageWorkspaceSmall from "../../public/assets/images/image-workspace-small.jpg";
import type { Route } from "../+types/root";

const aboutMeData = [
  {
    id: crypto.randomUUID(),
    text: `Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for
          creativity and problem-solving. That’s what led me to the world of
          front-end web development. There’s something magical about seeing an
          idea come to life in the browser—whether it’s a simple layout
          experiment or a complex interface for a bigger project.`,
  },
  {
    id: crypto.randomUUID(),
    text: `When I’m not coding, I love getting lost in a good book. My taste is
          pretty eclectic: I’ll happily read everything from fantasy novels to
          biographies of tech pioneers. Reading helps me unwind and often sparks
          new ideas for my coding projects.`,
  },
  {
    id: crypto.randomUUID(),
    text: `Another big passion of mine is the great outdoors. Hiking allows me to
          disconnect from the digital world and reconnect with nature. I love
          challenging hikes with rewarding views at the top. And if I’m not on
          the trails, you might catch me rock climbing. The combination of
          mental focus and physical endurance is a perfect parallel to tackling
          tough coding challenges!`,
  },
];

const bookList = [
  {
    id: crypto.randomUUID(),
    name: `"The Pragmatic Programmer"`,
    details: `by Andrew Hunt and David Thomas
            (for helpful insights into software development)`,
  },
  {
    id: crypto.randomUUID(),
    name: `"Ready Player One"`,
    details: ` by Ernest Cline (for some futuristic escapism)`,
  },
  {
    id: crypto.randomUUID(),
    name: `"The Hobbit"`,
    details: `by J.R.R. Tolkien (for a bit of fantasy fun)`,
  },
  {
    id: crypto.randomUUID(),
    name: `"Educated"`,
    details: `by Tara Westover (for incredible inspiration)`,
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zahirul Blog" },
    { name: "description", content: "Welcome to my blog!" },
  ];
}

const AboutPage = () => {
  return (
    <main className="mb-auto">
      <section>
        <h1 className="mb-4 inline-block border-b-4 border-blue-400 text-4xl font-bold text-neutral-700 dark:text-neutral-50">
          About Me
        </h1>
        {aboutMeData.map((item) => (
          <p
            className="mb-4 text-lg text-neutral-600 dark:text-neutral-400"
            key={item.id}
          >
            {item.text}
          </p>
        ))}
        <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
          Some of my favorite books:
        </p>
        <ul
          role="list"
          className="mb-4 list-inside list-disc pl-4 marker:text-neutral-400 dark:marker:text-neutral-600"
        >
          {bookList.map((item) => (
            <li
              className="text-lg text-neutral-600 dark:text-neutral-400"
              key={item.id}
            >
              <span className="font-bold">{item.name}</span>{" "}
              <span className="">{item.details}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
          I absolutely love my workspace as a place that inspires me to do my
          best work, so I thought I’d share it with you:
        </p>
        <picture>
          <source
            media="(min-width:640px )"
            srcSet={`${imageWorkspaceLarge}`}
          />
          <img
            src={`${imageWorkspaceSmall}`}
            alt=""
            className="my-4 rounded-xl"
          />
        </picture>

        <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
          I hope this blog not only documents my growth but also helps others
          see that coding can be for everyone. Thanks for joining me on this
          journey!
        </p>
        <div className="mb-6">
          <h3 className="mb-4 text-2xl font-bold text-neutral-700 dark:text-neutral-50">
            Follow me
          </h3>
          <SocialMediaIcons iconBackground={true} />
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
