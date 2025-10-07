import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import About from "~/components/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zahirul Blog" },
    { name: "description", content: "Welcome to my blog!" },
  ];
}

export default function HomePage() {
  return (
    <>
      <main>
        <About userName="Paulina" />
      </main>
    </>
  );
}
