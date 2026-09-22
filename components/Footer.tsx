import { site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.github },
  { label: "X", href: site.x },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Footer() {
  return (
    <footer className="wrap border-t border-rule py-10 text-[0.9375rem] text-graphite">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
        <ul className="flex flex-wrap gap-x-6">
          {links.map((item) => (
            <li key={item.label}>
              <a className="nav-link py-3" href={item.href}>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}