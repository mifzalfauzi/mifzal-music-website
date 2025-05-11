"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Newsletter signup:", email)
    // Show success state
    setIsSubmitted(true)
    // Reset form
    setEmail("")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8 tracking-wider">NEWSLETTER</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Subscribe to receive updates on new releases, upcoming shows, and exclusive content.
        </p>

        {isSubmitted ? (
          <div className="bg-muted p-8 rounded-md">
            <p className="font-medium mb-3 text-lg">Thank you for subscribing</p>
            <p className="text-muted-foreground">You've been added to our mailing list.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12"
              />
              <Button type="submit" variant="outline" className="h-12 px-8">
                SUBSCRIBE
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
