"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setIsSubscribed(true);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="site-container px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Successfully Subscribed! ✨
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Thank you for joining our newsletter. You'll receive the latest updates and insights from Prosira Advertisers.
            </p>
            <Button 
              onClick={() => setIsSubscribed(false)}
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="site-container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 mb-4 sm:mb-6">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
              Stay Updated with 
              <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                {" "}Industry Insights
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest advertising trends, 
              case studies, and exclusive insights delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md sm:max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 sm:h-14 px-4 sm:px-6 text-base sm:text-lg bg-background/50 border-border/50 rounded-xl sm:rounded-2xl focus:border-primary/50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg font-bold bg-primary text-primary-foreground rounded-xl sm:rounded-2xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 text-center">
              Join 10,000+ marketing professionals. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
