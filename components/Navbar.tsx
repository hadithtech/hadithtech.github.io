"use client";

import { AlertOctagon, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useMotionValueEvent, useScroll } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const navbar = document.querySelector("nav.navbar");
    const body = document.querySelector("body");
    console.log(latest);

    if (latest >= 100) {
      navbar?.classList.add("navbar-active");
      body?.classList.add("md:mt-[88px]");
    } else {
      navbar?.classList.remove("navbar-active");
      body?.classList.remove("md:mt-[88px]");
    }
  });

  return (
    <nav className="navbar container py-6 flex items-center justify-between rounded-b-3xl backdrop-blur z-[99999]">
      <Link
        href="/"
        className="flex items-center justify-center font-semibold text-lg"
      >
        {/* <Image src={"/logo.png"} alt="logo" width={500} height={600} className="duration-200 h-8 w-auto" /> */}
        Hadith<span className="text-primary">Tech</span>
      </Link>
      <div className="hidden md:flex gap-1 items-center justify-center">
        <Link
          href="/"
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          About
        </Link>
        <Link
          href="/episodes"
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          Episodes
        </Link>
        <Link
          href="/contact"
          className="opacity-75 hover:opacity-100 hover:bg-accent px-4 rounded-3xl py-2 duration-500 active:rounded-xl"
        >
          Contact
        </Link>
      </div>
      <Link
        className={cn(buttonVariants(), "hidden md:flex")}
        href="/subscribe"
      >
        Subscribe
      </Link>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-primary p-2 rounded-3xl text-background md:hidden hover:rounded-2xl duration-300">
          <Menu />
        </DialogTrigger>
        <DialogContent className="max-w-[250px] rounded-3xl shadow-none">
          <DialogHeader>
            <DialogTitle className="text-start">Pages & Links</DialogTitle>
            <DialogDescription className="pt-2 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                About
              </Link>
              <Link
                href="/episodes"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                Episodes
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full flex items-center justify-center"
                )}
              >
                Contact
              </Link>
              <Link
                href="/subscribe"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full flex items-center justify-center"
                )}
              >
                Subscribe
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
