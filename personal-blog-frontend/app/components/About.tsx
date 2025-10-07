import SocialMediaIcons from "./SocialMediaIcons";

type AboutProps = {
  userName: string;
};
const About = ({ userName = "Paulina" }: AboutProps) => {
  return (
    <section>
      <h1 className="mb-4 inline-block border-b-4 border-blue-400 text-4xl text-neutral-700 dark:text-neutral-50">
        Hi, I’m {userName} 👋
      </h1>
      <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
        I’m on a journey to become a front-end web developer. I love building
        little projects, trying out new coding techniques, and sharing what I
        learn along the way. When I’m not at my desk, you’ll find me reading,
        hiking through the mountains, or challenging myself on rock-climbing
        walls.
      </p>
      <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
        I started this blog to document my progress, keep myself accountable,
        and hopefully inspire anyone else who’s learning to code. Welcome to my
        corner of the internet, and thanks for stopping by!
      </p>
      <SocialMediaIcons iconBackground={true} />
    </section>
  );
};
export default About;
