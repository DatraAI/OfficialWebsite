"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 px-4 flex items-center">
        <div className="container mx-auto max-w-[1136px] text-center">
          <p className="text-lg mb-4 font-medium">Your Expertise, Supercharged by AI</p>
          <h1 className="text-5xl font-bold mb-6">Turn Your Knowledge Into an AI Assistant</h1>
          <h2 className="text-xl text-gray-600 mb-12 font-normal">
            Upload 300 Q&As or past conversations, and Datra turns your expertise into a smart chatbot trained just for your business. It keeps learning, improving, and helping — from support to sales.
          </h2>
          <div className="flex justify-center gap-4 mb-16">
            <Button 
              variant="outline" 
              className="px-6 py-4 font-medium text-base text-[#5C68FF] border-[#5C68FF] hover:bg-[#5C68FF]/10 hover:text-[#5C68FF] rounded-[10px]" 
              size="lg"
              onClick={() => window.open('https://admin.datra.ai', '_blank')}
            >
              Try Datra Free
            </Button>
            <Button 
              className="px-6 py-4 font-medium text-base bg-[#5C68FF] hover:bg-[#5C68FF]/90 rounded-[10px]" 
              size="lg"
              onClick={() => window.open('https://calendly.com/ryan-datra/30min', '_blank')}
            >
              Book a Demo
            </Button>
          </div>
          <div className="w-full max-w-[1136px] mx-auto">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.loom.com/embed/ee0fad4eca2149978a8d628d63f46d00?sid=ef1c0be4-068d-4cca-8f6b-a4fae6d62145&autoplay=1"
                allowFullScreen
                title="Datra Demo Video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="min-h-[80vh] pt-24 pb-12 px-4 bg-gray-50 flex items-center">
        <div className="container mx-auto max-w-[1136px] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">🧠 Train Your AI with Q&A — No Code Needed</h2>
            <p className="text-lg text-gray-600 mb-6">
              Upload real conversations or expert Q&A to instantly fine-tune a domain-specific AI model. Whether you're in healthcare, SaaS, or eCommerce — your expertise powers the model.
            </p>
            <blockquote className="text-xl font-medium italic">
              "Your knowledge becomes an expert AI, trained in minutes."
            </blockquote>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Placeholder for admin panel visual */}
            <div className="aspect-video bg-gray-200 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-[80vh] pt-24 pb-12 px-4 flex items-center">
        <div className="container mx-auto max-w-[1136px] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">🔁 Feedback Loop That Makes It Smarter</h2>
            <p className="text-lg text-gray-600 mb-6">
              Datra captures meaningful new questions from conversations. You validate or edit them, and re-train your model — continuously improving performance over time.
            </p>
            <blockquote className="text-xl font-medium italic">
              "Every conversation makes your AI sharper."
            </blockquote>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {/* Placeholder for conversation flow visual */}
              <div className="aspect-video bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="min-h-[80vh] pt-24 pb-12 px-4 bg-gray-50 flex items-center">
        <div className="container mx-auto max-w-[1136px] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">⚡️ From Support to Sales — with Automations</h2>
            <p className="text-lg text-gray-600 mb-6">
              Set CTAs for specific questions to trigger actions like order lookups, demo scheduling, or product recommendations. With Datra, AI doesn't just answer — it converts.
            </p>
            <blockquote className="text-xl font-medium italic">
              "Turn conversations into outcomes."
            </blockquote>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Placeholder for chatbot visual */}
            <div className="aspect-video bg-gray-200 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto max-w-[1136px] text-center">
          <Image 
            src="/images/logo.png" 
            alt="Datra" 
            width={120}
            height={32}
            className="mx-auto mb-8 invert"
            priority
          />
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://twitter.com/datra" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://medium.com/@datra" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
            <a href="mailto:hi@datra.ai">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
          <p className="text-sm">
            © 2025 Datra, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
} 