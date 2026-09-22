import type { CSSProperties } from "react";
import Image from "next/image";
import {
  about,
  contact,
  hero,
  processIntro,
  projects,
  services,
  servicesIntro,
  steps,
  work,
} from "@/lib/site";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Roll } from "@/components/Roll";
import { SplitReveal } from "@/components/SplitReveal";
import { WorkIndex } from "@/components/WorkIndex";

const after = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <section className="wrap pb-28 pt-10 md:pb-44 md:pt-20">
        <SplitReveal as="h1" text={hero.headline} className="display max-w-[12ch]" />

        <div className="rule-sweep mt-12 md:mt-16" aria-hidden="true">
          <span className="rule-sweep-line" />
        </div>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-12">
          <p className="lead enter md:col-span-7" style={after(1200)}>
            {hero.intro}
          </p>
          <div className="enter md:col-span-4 md:col-start-9" style={after(1450)}>
            <p className="text-graphite">{hero.availability}</p>
            <p className="mt-6 flex flex-wrap gap-3">
              <a className="button" href="#work">
                <Roll>See my work</Roll>
              </a>
              <a className="button button-quiet" href="#contact">
                <Roll>Get in touch</Roll>
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="wrap scroll-mt-20 pb-28 md:pb-44">
        <Reveal>
          <div className="mb-12 grid gap-4 md:mb-20 md:grid-cols-12 md:items-end md:gap-8">
            <h2 className="display text-[length:clamp(2.75rem,7vw,6rem)] md:col-span-8">
              {work.heading}
            </h2>
            <p className="measure text-graphite md:col-span-4">{work.intro}</p>
          </div>
        </Reveal>
        <WorkIndex projects={projects} />
      </section>

      <section id="services" className="wrap scroll-mt-20 pb-28 md:pb-44">
        <Reveal>
          <div className="mb-12 grid gap-4 md:mb-20 md:grid-cols-12 md:items-end md:gap-8">
            <h2 className="display text-[length:clamp(2.75rem,7vw,6rem)] md:col-span-8">
              {servicesIntro.heading}
            </h2>
            <p className="measure text-graphite md:col-span-4">
              {servicesIntro.intro}
            </p>
          </div>
        </Reveal>

        <ul className="border-b border-rule">
          {services.map((service, index) => (
            <li key={service.name}>
              <Reveal delay={index * 90}>
                <div className="rule-draw grid gap-3 py-9 md:grid-cols-12 md:gap-8 md:py-14">
                  <h3 className="title md:col-span-5">{service.name}</h3>
                  <p className="measure text-lg text-graphite md:col-span-6 md:col-start-7">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-24 md:mt-40">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-8">
              <h2 className="title md:col-span-8">{processIntro.heading}</h2>
              <p className="measure text-graphite md:col-span-4">
                {processIntro.intro}
              </p>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <li key={step.name}>
                <Reveal delay={index * 120}>
                  <div className="rule-draw pt-6 md:pr-4">
                    <span className="numeral" aria-hidden="true">
                      {index + 1}
                    </span>
                    <h3 className="subtitle mt-6">{step.name}</h3>
                    <p className="mt-3 text-graphite">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="wrap scroll-mt-20 pb-28 md:pb-44">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5 md:order-2">
            <div className="relative mx-auto max-w-[360px] border border-rule p-2 md:max-w-none">
              <Image
                src={about.portrait.src}
                alt={about.portrait.alt}
                width={about.portrait.width}
                height={about.portrait.height}
                sizes="(min-width: 768px) 33vw, 80vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <div className="md:col-span-7 md:order-1">
            <Reveal>
              <h2 className="display text-[length:clamp(2.75rem,7vw,6rem)]">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="lead mt-8">{about.lead}</p>
              <p className="measure mt-6 text-graphite">{about.body}</p>
            </Reveal>

            <Reveal delay={220}>
              <dl className="mt-12 md:mt-16">
                {about.stack.map((row) => (
                  <div
                    key={row.group}
                    className="rule-draw grid gap-1 py-5 md:grid-cols-9 md:gap-8"
                  >
                    <dt className="text-graphite md:col-span-4">{row.group}</dt>
                    <dd className="md:col-span-5">{row.items}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="wrap scroll-mt-20 pb-28 md:pb-44">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="display text-[length:clamp(2.75rem,7vw,6rem)]">
                {contact.heading}
              </h2>
              <p className="measure mt-8 text-graphite">{contact.intro}</p>
            </Reveal>

            <Reveal delay={150}>
              <dl className="mt-12">
                <div className="rule-draw py-5">
                  <dt className="text-graphite">Email</dt>
                  <dd className="mt-1">
                    <a className="link" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="rule-draw py-5">
                  <dt className="text-graphite">Elsewhere</dt>
                  <dd className="mt-1 flex gap-4">
                    <a className="link" href={site.github} rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a className="link" href={site.x} rel="noopener noreferrer">
                      X
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}