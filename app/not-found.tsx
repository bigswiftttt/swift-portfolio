import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="wrap py-28 md:py-44">
      <h1 className="display max-w-[12ch]">This page doesn't exist.</h1>
      <p className="measure mt-8 text-graphite">
        The link may be old or mistyped. Selected work and contact details are
        on the homepage.
      </p>
      <p className="mt-8">
        <Link href="/" className="button">
          Go to the homepage
        </Link>
      </p>
    </section>
  );
}