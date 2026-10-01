import * as Accordion from "@radix-ui/react-accordion";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, Plus, X } from "lucide-react";
import { useState } from "react";

import heroHealth from "../assets/hero-health.png";
import heroHotel from "../assets/hero-hotel.png";
import heroMento from "../assets/hero-mento.png";
import processBuild from "../assets/process-build.png";
import processDesign from "../assets/process-design.png";
import processStrategy from "../assets/process-strategy.png";
import projectMaison from "../assets/project-maison.png";
import projectMento from "../assets/project-mento.png";
import projectNivi from "../assets/project-nivi.png";
import projectVivaana from "../assets/project-vivaana.png";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash Verma — Website Designer & Strategist" },
      {
        name: "description",
        content: "Yash Verma builds strategic websites that convert visitors into customers.",
      },
      { property: "og:title", content: "Yash Verma — Website Designer & Strategist" },
      {
        property: "og:description",
        content: "Strategic website design and development focused on real business results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Mento Markets",
    result: "47% increase in booking rate. Repeat customers up 3x.",
    image: projectMento,
    href: "https://mentomarkets.com/",
  },
  {
    title: "Vivaana Heritage Hotels",
    result: "Booking up 23%. Repeat guest rate up 3x.",
    image: projectVivaana,
    href: "https://vivaana.com/",
  },
  {
    title: "Nivi's Art Studio",
    result: "",
    image: projectNivi,
    href: "https://nivisartstudio.com/",
  },
  {
    title: "Maison 1947",
    result: "Brand recognition up 60%. Average session duration 2x.",
    image: projectMaison,
    href: "https://maison1947.com/",
  },
];

const process = [
  {
    title: "Step 1 - Strategy",
    copy: "We start with a short conversation about your business, goals, and what the website needs to achieve. This helps define the structure before any design begins.",
    image: processStrategy,
  },
  {
    title: "Step 2 - Design",
    copy: "I design the full website in Figma so you can see exactly how everything will look. We refine the design together until it feels right.",
    image: processDesign,
  },
  {
    title: "Step 3 - Build & Launch",
    copy: "Once the design is approved, the website is developed into a fast, responsive site and prepared for launch. After testing, your new website goes live.",
    image: processBuild,
  },
];

const faqs = [
  [
    "What service do I provide?",
    "Website strategy, design, and development — from the first idea through to a finished, responsive website.",
  ],
  [
    "How do we start a project?",
    "We begin with a short call to understand your business, goals, audience, and what your website needs to achieve.",
  ],
  [
    "What do you need to get started?",
    "Your brand assets, existing content, business goals, and any references that help explain the direction you have in mind.",
  ],
  [
    "What happens when the design is done?",
    "Once the design is approved, it is developed, tested across devices, and prepared for launch.",
  ],
  [
    "I have an agency, can I outsource to you?",
    "Yes. I work with agencies as a focused design and development partner for website projects.",
  ],
  [
    "Do you issue refund?",
    "Because each project is custom and work begins after approval, completed project stages are non-refundable.",
  ],
  [
    "What is your pricing?",
    "Pricing depends on the scope, complexity, and timeline. Book an intro call to receive a tailored quote.",
  ],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="page-shell flex h-24 items-center justify-between md:h-28">
        <a href="#top" className="text-[17px] font-medium">
          Yash Verma
        </a>
        <nav
          className="hidden items-center gap-12 text-[15px] md:flex"
          aria-label="Main navigation"
        >
          <button onClick={() => scrollTo("#featuredprojects")}>Projects</button>
          <button onClick={() => scrollTo("#about")}>Who am I?</button>
          <button onClick={() => scrollTo("#process")}>Process</button>
          <button onClick={() => scrollTo("#faq")}>Faq</button>
        </nav>
        <Button
          variant="text"
          className="h-11 w-11 p-0 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
        {menuOpen && (
          <nav className="absolute inset-x-0 top-20 z-30 mx-5 flex flex-col border border-border bg-background p-5 text-lg shadow-soft md:hidden">
            {[
              ["Projects", "#featuredprojects"],
              ["Who am I?", "#about"],
              ["Process", "#process"],
              ["Faq", "#faq"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => id && scrollTo(id)}
                className="border-b border-border py-4 text-left last:border-0"
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="page-shell pb-24 pt-2 md:pb-32">
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          <div className="hero-frame max-sm:aspect-[.78/1]">
            <img src={heroMento} alt="Mento Markets website shown on a laptop" />
          </div>
          <div className="hero-frame max-sm:aspect-[.78/1]">
            <img src={heroHotel} alt="Heritage hotel website shown on a laptop" />
          </div>
          <div className="hero-frame max-sm:aspect-[.78/1]">
            <img src={heroHealth} alt="Healthcare website shown on a laptop" />
          </div>
        </div>
        <div className="mt-12 grid items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto]">
          <h1 className="max-w-[900px] text-[clamp(2.65rem,5vw,4.6rem)] font-normal leading-[1.04]">
            Building website that converts visitors to buyers.
            <span className="text-accent">No Bullsh*t.</span>
          </h1>
          <a href="https://calendar.app.google/7vDsHvbscRV7w4EQ6" target="_blank" rel="noreferrer">
            <Button className="px-6">Start Your Project</Button>
          </a>
        </div>
      </section>

      <section className="section-dark py-24 md:py-36">
        <div className="page-shell">
          <h2 className="max-w-4xl text-[clamp(2.5rem,5.2vw,5rem)] leading-[1.02]">
            Your website is silently costing you customers.
          </h2>
          <div className="mt-14 grid gap-10 border-t border-dark-border pt-10 md:grid-cols-2 md:gap-24">
            <div className="space-y-8 text-xl leading-relaxed text-dark-muted md:text-2xl">
              <p>Most websites look good. They don't work.</p>
              <p>You spent money on design &amp; marketing. But somehow, visitors don't buy.</p>
              <p className="text-dark-foreground">
                That's not a design problem. That's a strategy problem pretending to be a design
                problem.
              </p>
            </div>
            <div className="divide-y divide-dark-border">
              {[
                ["96%", "of beautiful websites don't convert visitors into customers."],
                ["45%", "average conversion increase when strategy comes before design."],
                ["3X", "more qualified leads after a redesign built on real customer insight."],
              ].map(([number, text]) => (
                <div key={number} className="grid grid-cols-[110px_1fr] gap-6 py-7 first:pt-0">
                  <strong className="text-5xl font-normal text-accent md:text-6xl">{number}</strong>
                  <p className="self-end text-lg text-dark-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="page-shell py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="section-label">Who builds your website?</p>
            <div
              className="portrait-placeholder mt-8"
              role="img"
              aria-label="Portrait of Yash Verma"
            >
              <img
                src="/portrait-yash.jpg"
                alt="Yash Verma portrait"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
          <div className="pt-0 md:pt-16">
            <h2 className="text-[clamp(2rem,4vw,4rem)] leading-[1.08]">
              I'm Yash Verma, founder and website strategist at Santhoshdesign.
            </h2>
            <div className="mt-10 space-y-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>A boutique design studio that makes websites work harder for your business.</p>
              <p>
                I lead a small, focused team of designers and developers who work exclusively on
                website design and development. Every project gets our full attention. We don't take
                on more than we can deliver well.
              </p>
              <p>
                Outside of client work, I share design insights with a community of 169,000+
                designers on Instagram — covering design and AI. That community keeps us sharp,
                current, and close to what real designers and businesses need.
              </p>
              <p>I have also mentored 300+ students on how to grow their design career.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="featuredprojects" className="border-t border-border py-24 md:py-36">
        <div className="page-shell">
          <p className="section-label">Featured Projects</p>
          <div className="mt-12 grid gap-x-6 gap-y-16 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} website project`} />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    {project.result && (
                      <p className="mt-2 text-muted-foreground">{project.result}</p>
                    )}
                  </div>
                  <ArrowUpRight className="mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button variant="outline">Load More Projects</Button>
          </div>
        </div>
      </section>

      <section id="process" className="section-soft py-24 md:py-36">
        <div className="page-shell">
          <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.04]">
            Here is our entire work process
          </h2>
          <div className="mt-16 space-y-24 md:space-y-32">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-20"
              >
                <div className={index % 2 ? "md:order-2" : ""}>
                  <img
                    src={step.image}
                    alt={`${step.title} illustration`}
                    className="w-full rounded-[8px]"
                  />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">0{index + 1}</span>
                  <h3 className="mt-4 text-4xl md:text-5xl">{step.title}</h3>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    {step.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="page-shell py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-24">
          <h2 className="text-[clamp(2.7rem,5vw,5rem)] leading-[1.03]">Still any questions?</h2>
          <Accordion.Root type="single" collapsible className="border-t border-border">
            {faqs.map(([question, answer], index) => (
              <Accordion.Item
                key={question}
                value={`faq-${index}`}
                className="border-b border-border"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-7 text-left text-xl">
                    {question}
                    <Plus
                      className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
                      size={20}
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-2xl pb-7 text-lg leading-relaxed">{answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <footer className="section-dark py-20 md:py-28">
        <div className="page-shell">
          <h2 className="text-[clamp(3rem,8vw,7.5rem)] leading-none">Contact</h2>
          <div className="mt-14 grid border-l border-t border-dark-border sm:grid-cols-2">
            {[
              [
                "BOOK A INTRO CALL",
                "Google Calendar",
                "https://calendar.app.google/7vDsHvbscRV7w4EQ6",
              ],
              ["EMAIL ME AT", "Yash's Email", "mailto:"],
              ["PHONE", "Yash's Phone", "tel:"],
              [
                "INSTAGRAM",
                "instagram.com/santhoshdesign",
                "https://www.instagram.com/santhoshdesign/",
              ],
              ["TOPMATE", "topmate.io/santhoshb/", "https://topmate.io/santhoshb/"],
            ].map(([label, value, href]) => (
              <a
                key={label}
                href={href}
                className="group min-h-40 border-b border-r border-dark-border p-6 transition-colors hover:bg-dark-surface md:p-8"
              >
                <span className="text-xs text-dark-muted">{label}</span>
                <div className="mt-8 flex items-end justify-between gap-4 text-xl md:text-2xl">
                  <span>{value}</span>
                  <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
          <a
            href="#top"
            className="mt-10 flex items-center justify-between border-t border-dark-border pt-7 text-sm text-dark-muted"
          >
            <span>Yash Verma</span>
            <span className="flex items-center gap-2">
              Back to top <ArrowDown className="rotate-180" size={16} />
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}
