import { Features } from "@/components/features"
import HeroSection from "@/components/hero-section"
import { LogoCloud } from "@/components/logo-cloud"
import React from "react"
import Marquee from "@/components/ui/marquee"
import Container from "@/components/container"
import { UserIcon } from "lucide-react"
import Wrapper from "@/components/wrapper"
import { cn } from "@/lib/utils"
import FAQ from "@/components/faqs"
import LogoMarquee from "@/components/logo-marquee"
import Action from "@/components/action"


// ✅ Sample testimonial rows
const firstRow = [
  {
    name: "Alice Johnson",
    username: "@alice",
    body: "Medilogic completely changed the way I manage my appointments and prescriptions.",
  },
  {
    name: "Michael Lee",
    username: "@mlee",
    body: "Super easy to use and very reliable for online doctor consultations.",
  },
  {
    name: "Sophia Brown",
    username: "@sophiab",
    body: "Doctors are available 24/7, and prescription reminders keep me on track!",
  },
];

const secondRow = [
  {
    name: "John Doe",
    username: "@jdoe",
    body: "I’ve saved so much time thanks to Medilogic’s online consultations and dosage reminders.",
  },
  {
    name: "Sarah Parker",
    username: "@sparker",
    body: "Clean interface and really intuitive workflow for managing my health appointments.",
  },
  {
    name: "David Kim",
    username: "@davidk",
    body: "One of the best experiences I’ve had using a telemedicine app with 24/7 doctor access.",
  },
];


const Page = () => {
  return (
    <section>
      <HeroSection />
      <LogoCloud />
      <Features />

      {/* testimonials */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>

        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              What people are saying
            </h2>
            <p className="text-muted-foreground mt-6">
              See how Medilogic empowers healthcare for all.
            </p>
          </div>
        </Container>

        <Container>
          <div className="py-10 md:py-20 w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
              {/* first row → forward */}
              <Marquee pauseOnHover className="[--duration:20s] select-none">
                {firstRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                  </figure>
                ))}
              </Marquee>

              {/* second row → backward */}
              <Marquee reverse pauseOnHover className="[--duration:20s] select-none">
                {secondRow.map((review) => (
                  <figure
                    key={review.name}
                    className={cn(
                      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                      "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                    )}
                  >
                    <div className="flex flex-row items-center gap-2">
                      <UserIcon className="w-6 h-6" />
                      <div className="flex flex-col">
                        <figcaption className="text-sm font-medium">
                          {review.name}
                        </figcaption>
                        <p className="text-xs font-medium text-muted-foreground">
                          {review.username}
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">{review.body}</blockquote>
                  </figure>
                ))}
              </Marquee>

              {/* gradient fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>
       {/* Frequently asked section  */}
       <FAQ />
       
       {/* Call to Action  */}
       <Action />
       
      {/* Logo Marquee */}
      <LogoMarquee />

    </section>
    
  )
}

export default Page
