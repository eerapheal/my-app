"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Global Investor Network
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center h-screen space-y-4 p-4 pt-10 z-50  text-blue-600">
              <Link href="/" className="text-xl font-bold  hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="text-xl font-bold  hover:text-gray-900">
                About
              </Link>
              <Link href="/how-it-works" className="text-xl font-bold  hover:text-gray-900">
                How It Works
              </Link>
              <Link href="/benefits" className="text-xl font-bold  hover:text-gray-900">
                Benefits
              </Link>
              <Link href="/success-stories" className="text-xl font-bold  hover:text-gray-900">
                Success Stories
              </Link>
              {status === "loading" ? (
                <p className="text-gray-500">Checking...</p>
              ) : session ? (
                <Button variant="outline" className="w-full text-xl font-bold " onClick={() => signOut()}>
                  Logout
                </Button>
              ) : (
                <Button variant="outline" className="w-full text-xl font-bold p-5" asChild>
                  <Link href="/apply">Apply Now</Link>
                </Button>
              )}
            </nav>
          )}

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-xl font-bold text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-xl font-bold text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/how-it-works" className="text-xl font-bold text-gray-500 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="/benefits" className="text-xl font-bold text-gray-500 hover:text-gray-900">
              Benefits
            </Link>
            <Link href="/success-stories" className="text-xl font-bold text-gray-500 hover:text-gray-900">
              Success Stories
            </Link>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {status === "loading" ? (
              <p className="text-gray-500">Checking...</p>
            ) : session ? (
              <Button variant="outline" className="ml-8 text-xl font-bold " onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Button className="ml-8 text-xl font-bold p-5" asChild>
                <Link href="/apply">Apply Now</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
