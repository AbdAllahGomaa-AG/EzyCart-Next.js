"use client";
import { Routes } from "@/constants/enums";
import React, { useState } from "react";
import Link from "../link";
import Image from "next/image";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  //  links
  const links = [
    {
      id: crypto.randomUUID(),
      title: "Menu",
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title: "About",
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: "Contact",
      href: Routes.CONTACT,
    },
  ];

  //  render
  return (
    <>
      <nav className="relative shadow-md ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary/10 hover:text-primary focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
              >
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-6 w-6"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-6 w-6"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo + Links */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link href={Routes.ROOT}>
                  <h2 className="text-2xl font-semibold text-primary cursor-pointer ">EzyCart</h2>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-primary/10 hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Notifications */}
              <button
                type="button"
                className="relative rounded-full p-1 text-primary hover:bg-primary/10 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6"
                >
                  <path
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 
                  9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 
                  6.022c1.733.64 3.56 1.085 
                  5.455 1.31m5.714 0a24.255 
                  24.255 0 0 1-5.714 0m5.714 
                  0a3 3 0 1 1-5.714 0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    src="/images/AV.png"
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full bg-gray-800 cursor-pointer"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Your profile
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Settings
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-primary/10 hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
