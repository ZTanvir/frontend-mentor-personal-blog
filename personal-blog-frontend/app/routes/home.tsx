import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zahirul Blog" },
    { name: "description", content: "Welcome to my blog!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Personal</h1>
    </>
  );
}
