import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zahirul Blog" },
    { name: "description", content: "Welcome to my blog!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Personal</h1>
    </>
  );
}
