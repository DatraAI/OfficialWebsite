"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-[1136px]">
        {/* Logo - always visible */}
        <Link href="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Datra" 
            className="w-auto h-auto max-w-[80%] min-w-[110px] object-contain"
            style={{ maxHeight: '32px' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <Link href="/howitworks" className="text-base font-normal">
              How Datra works?
            </Link>
            <Link href="#pricing" className="text-base font-normal">
              Pricing
            </Link>
          </nav>
          <Button 
            className="px-6 py-4 font-medium text-base bg-[#5C68FF] hover:bg-[#5C68FF]/90 rounded-[10px]"
            onClick={() => window.open('https://calendly.com/ryan-datra/30min', '_blank')}
          >
            Book a demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dialog */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4">
            {/* Close button */}
            <div className="h-16 flex items-center justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-6 pt-8">
              <Link 
                href="/howitworks" 
                className="text-xl font-normal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How Datra works?
              </Link>
              <Link 
                href="#pricing" 
                className="text-xl font-normal py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Button 
                className="w-full px-6 py-4 font-medium text-base bg-[#5C68FF] hover:bg-[#5C68FF]/90 rounded-[10px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a demo
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 