"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Global Investor Network
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/how-it-works" className="text-base font-medium text-gray-500 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="/benefits" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Benefits
            </Link>
            <Link href="/success-stories" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Success Stories
            </Link>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {status === "loading" ? (
              <p className="text-gray-500">Checking...</p>
            ) : session ? (
              <Button variant="outline" className="ml-8" onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Button variant="outline" className="ml-8" asChild>
                <Link href="/apply">Apply Now</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
