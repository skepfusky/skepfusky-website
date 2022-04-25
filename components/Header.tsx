import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-600">
      <div className="my-0 mx-auto max-w-screen-2xl p-5">
        <nav className="flex gap-x-4">
          <Link href="/projects" passHref>PROJECTS</Link>
          <Link href="/works" passHref>WORKS</Link>
          <Link href="/about-me" passHref>ABOUT THIS LOSER</Link>
          <Link href="/contact" passHref>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
