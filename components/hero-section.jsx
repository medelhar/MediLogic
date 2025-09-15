import React from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Navbar } from './navbar'
import { SignedOut } from '@clerk/nextjs'


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <Navbar />
            <main
                className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
                <section>
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-medium md:text-6xl">
                                Care that Connects
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                                Medilogic provides innovative and reliable healthcare solutions, 
                                helping hospitals and patients connect seamlessly for better care.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12">
                                <form action="" className="mx-auto max-w-sm">
                                    <div
                                        className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.5rem)] border pr-2 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                        
                                    </div>
                                </form>

                                <div
                                    aria-hidden
                                    className="bg-radial from-primary/50 dark:from-primary/25 relative mx-auto mt-32 max-w-2xl to-transparent to-55% text-left">
                                    <div
                                        className="bg-background border-border/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                                        <div
                                            className="relative h-96 overflow-hidden rounded-[1.5rem] border p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                                    </div>
                                    <div
                                        className="bg-muted dark:bg-background/50 border-border/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                                        <div
                                            className="bg-background space-y-2 overflow-hidden rounded-[1.5rem] border p-2 shadow-xl dark:bg-white/5 dark:shadow-black dark:backdrop-blur-3xl">
                                            <AppComponent />

                                            <div className="bg-muted rounded-[1rem] p-4 pb-16 dark:bg-white/5"></div>
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-5"></div>
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    );
}

const AppComponent = () => {
  return (
    <div className="w-full max-w-md space-y-4 rounded-2xl bg-white/5 p-4 shadow-xl backdrop-blur-md">
      {/* Wellness Check */}
      <div className="space-y-3 rounded-xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-center gap-2 text-sky-400">
          <svg
  className="size-5"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
>
  <g fill="none">
    {/* Outer flame */}
    <path
      fill="#3b82f6"   /* Tailwind blue-500 */
      d="M26 19.34c0 6.1-5.05 11.005-11.15 10.641c-6.269-.374-10.56-6.403-9.752-12.705c.489-3.833 2.286-7.12 4.242-9.67c.34-.445.689 3.136 1.038 2.742c.35-.405 3.594-6.019 4.722-7.991a.694.694 0 0 1 1.028-.213C18.394 3.854 26 10.277 26 19.34"
    />
    {/* Inner flame */}
    <path
      fill="#60a5fa"   /* Tailwind blue-400 */
      d="M23 21.851c0 4.042-3.519 7.291-7.799 7.144c-4.62-.156-7.788-4.384-7.11-8.739C9.07 14.012 15.48 10 15.48 10S23 14.707 23 21.851"
    />
  </g>
</svg>


          <span className="text-sm font-semibold">Wellness Check</span>
        </div>

        <div className="space-y-2">
          <div className="text-base font-6xl text-foreground">
            How are you feeling today?
          </div>
          <div className="flex gap-2">
            <button className="rounded-md border border-white/20 px-3 py-1 text-sm hover:bg-white/10">
              Good
            </button>
            <button className="rounded-md border border-white/20 px-3 py-1 text-sm hover:bg-white/10">
              Okay
            </button>
            <button className="rounded-md border border-white/20 px-3 py-1 text-sm hover:bg-white/10">
              Not Well
            </button>
          </div>
          <div className="text-xs text-muted-foreground">
            🌡️ Temperature: 98.6°F
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="space-y-3 rounded-xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <svg
  className="size-5"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h3a1 1 0 1 0 0-2h-3V8a1 1 0 1 0-2 0v3H8a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3z" />
</svg>

          <span className="text-sm font-semibold">Upcoming Appointments</span>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-foreground">
            Dr. Anya Sharma
          </div>
          <div className="text-xs text-muted-foreground">General Physician</div>
          <div className="mt-2 w-full rounded-full bg-white/10">
            <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400"></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Consultation Prep</span>
            <span className="text-foreground font-medium">75% Complete</span>
          </div>
        </div>

        <a
          href="#"
          className="text-xs font-medium text-sky-400 hover:underline">
          View all appointments
        </a>
      </div>
    </div>
  );
};


