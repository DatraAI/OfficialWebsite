"use client"

import React from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HowItWorks() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 px-4 flex items-center">
        <div className="container mx-auto max-w-[1136px] text-center">
          <div className="max-w-[1000px] mx-auto">
            <p className="text-lg mb-4 font-medium">Step-by-step instruction</p>
            <h1 className="text-4xl font-bold mb-6">How Datra Works?</h1>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm max-w-[800px] mx-auto">
                <div className="text-2xl font-bold text-gray-400 mb-4">🟦 Step 01</div>
                <h3 className="text-2xl font-bold mb-2">Train Your AI Expert</h3>
                <h4 className="text-xl text-gray-600 mb-4">Upload or input 300 Q&As from your domain.</h4>
                <p className="text-gray-600 mb-4">
                  Whether it's past customer chats or expert knowledge, Datra uses your content to fine-tune a specialized AI model tailored to your use case.
                </p>
                <blockquote className="text-lg font-medium italic text-gray-600">
                  "Your knowledge is the training data. We handle the AI magic."
                </blockquote>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm max-w-[800px] mx-auto">
                <div className="text-2xl font-bold text-gray-400 mb-4">🟩 Step 02</div>
                <h3 className="text-2xl font-bold mb-2">Boost with Domain Documents</h3>
                <h4 className="text-xl text-gray-600 mb-4">Enhance accuracy using your internal files.</h4>
                <p className="text-gray-600 mb-4">
                  Upload manuals, PDFs, policies, SOPs, or any domain material. Datra applies RAG (Retrieval-Augmented Generation) to make your AI answer even more precisely.
                </p>
                <blockquote className="text-lg font-medium italic text-gray-600">
                  "Give your AI the right context — it'll speak your language."
                </blockquote>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm max-w-[800px] mx-auto">
                <div className="text-2xl font-bold text-gray-400 mb-4">🟨 Step 03</div>
                <h3 className="text-2xl font-bold mb-2">Deploy Your AI Anywhere</h3>
                <h4 className="text-xl text-gray-600 mb-4">Launch your AI assistant on WhatsApp, Slack, Shopify, or more.</h4>
                <p className="text-gray-600 mb-4">
                  Your model becomes a chatbot ready to serve your customers — wherever they are.
                </p>
                <blockquote className="text-lg font-medium italic text-gray-600">
                  "Turn a static FAQ into a dynamic, intelligent assistant."
                </blockquote>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm max-w-[800px] mx-auto">
                <div className="text-2xl font-bold text-gray-400 mb-4">🟥 Step 04</div>
                <h3 className="text-2xl font-bold mb-2">Get Smarter Through Feedback</h3>
                <h4 className="text-xl text-gray-600 mb-4">Every conversation makes your AI better.</h4>
                <p className="text-gray-600 mb-4">
                  Datra auto-extracts new Q&A from chats. You approve/edit them in your admin panel and trigger another round of fine-tuning.
                </p>
                <blockquote className="text-lg font-medium italic text-gray-600">
                  "A living AI — trained by your real users."
                </blockquote>
              </div>
              
              {/* Step 5 */}
              <div className="bg-white p-8 rounded-lg shadow-sm max-w-[800px] mx-auto">
                <div className="text-2xl font-bold text-gray-400 mb-4">🟪 Step 05</div>
                <h3 className="text-2xl font-bold mb-2">Automate with CTAs & Workflows</h3>
                <h4 className="text-xl text-gray-600 mb-4">Turn conversations into action.</h4>
                <p className="text-gray-600 mb-4">
                  Set up CTAs for specific questions, then connect to tools like order lookup, CRM actions, or even recommend products.
                </p>
                <blockquote className="text-lg font-medium italic text-gray-600">
                  "From support to sales — fully automated."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen pt-32 pb-16 px-4 flex items-center bg-gray-50">
        <div className="container mx-auto max-w-[1136px] text-center">
          <div className="max-w-[1000px] mx-auto">
            <h1 className="text-4xl font-bold mb-6">🎉 You're Ready to Launch Your AI Expert</h1>
            <h2 className="text-xl text-gray-600 mb-8 font-normal">
              You've just seen how easy it is to build your own vertical AI — trained with your knowledge, enhanced by your documents, and always learning from your users. Now it's time to put it to work.
            </h2>
            
            <div className="mb-8">
              <p className="text-lg font-medium italic text-gray-600">
                "Datra believes every domain deserves its own Jarvis."
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-2">👉 Start building your AI expert today</h3>
              <p className="text-lg text-gray-600 mb-8">No coding. No AI background needed. Just your expertise.</p>
              
              <Button 
                className="px-6 py-4 font-medium text-base bg-[#5C68FF] hover:bg-[#5C68FF]/90 rounded-[10px]" 
                size="lg"
                onClick={() => window.open('https://calendly.com/ryan-datra/30min', '_blank')}
              >
                Get a testing account
              </Button>
            </div>
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