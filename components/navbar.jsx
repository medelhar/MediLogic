'use client'

import React from 'react'
import Link from 'next/link'
import { useUser, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import {
  Menu,
  X,
  ShieldCheck,
  Stethoscope,
  Calendar,
  User,
} from 'lucide-react'

// Menu Items
const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'Solution', href: '#solution' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
]

export const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  const { user } = useUser()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : ''}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            
            {/* ---------- Brand / Logo ---------- */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <div className="text-xl font-bold">
                  MEDI
                  <span className="text-secondary-500 font-light hover:!text-primary-300">
                    LOGIC
                  </span>
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                aria-expanded={menuState}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            {/* ---------- Desktop Menu ---------- */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------- Actions (Mobile + Desktop) ---------- */}
            <div
              className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex
              mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl
              border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit
              lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none
              dark:shadow-none dark:lg:bg-transparent"
            >
              {/* ---------- Mobile Menu Items ---------- */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ---------- Role-based Buttons ---------- */}
              <div className="flex items-center space-x-2">
                <SignedIn>
                  {user?.publicMetadata?.role === 'ADMIN' && (
                    <Link href="/admin">
                      <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" />
                        Admin Dashboard
                      </Button>
                      <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                        <ShieldCheck className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}

                  {user?.publicMetadata?.role === 'DOCTOR' && (
                    <Link href="/doctor">
                      <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                        <Stethoscope className="h-4 w-4" />
                        Doctor Dashboard
                      </Button>
                      <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                        <Stethoscope className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}

                  {user?.publicMetadata?.role === 'PATIENT' && (
                    <Link href="/appointments">
                      <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        My Appointments
                      </Button>
                      <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}

                  {user?.publicMetadata?.role === 'UNASSIGNED' && (
                    <Link href="/onboarding">
                      <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Complete Profile
                      </Button>
                      <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                        <User className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </SignedIn>

                {/* ---------- Auth Buttons ---------- */}
                <SignedOut>
                  <SignInButton>
                    <Button variant="secondary">Sign In</Button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: 'w-10 h-10',
                        userButtonPopoverCard: 'shadow-xl',
                        userPreviewMainIdentifier: 'font-semibold',
                      },
                    }}
                    afterSignOutUrl="/"
                  />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
