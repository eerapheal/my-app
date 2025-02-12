"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function ApplyPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Convert form data to JSON
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      toast({
        title: "Application submitted!",
        description: "We'll be in touch soon.",
      });

      router.push("/");
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Your application was not submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6d1ea] to-pink-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
          Apply for Investment
        </h1>
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <Input id="fullName" name="fullName" required />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <Input id="address" name="address" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
          <div>
            <label htmlFor="occupation" className="block text-lg font-medium text-gray-700">
              Occupation
            </label>
            <Input id="occupation" name="occupation" required />
          </div>
          <div>
            <label htmlFor="expectedAmount" className="block text-lg font-medium text-gray-700">
              Expected Investment Amount
            </label>
            <Input id="expectedAmount" name="expectedAmount" type="number" required />
          </div>
          <div>
            <label htmlFor="businessIdea" className="block text-lg font-medium text-gray-700">
              Tell us about your business or idea
            </label>
            <Textarea id="businessIdea" name="businessIdea" rows={5} required />
          </div>
          <Button type="submit" className="w-full text-lg font-medium md:text-xl md:font-semibold" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Apply Now"}
          </Button>
        </form>
      </div>
    </div>
  );
}
