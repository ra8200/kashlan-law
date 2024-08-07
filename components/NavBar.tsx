"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, MenuIcon, PhoneIcon, ScaleIcon } from "@/components/icons";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname() || "/";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false);
  };

  useEffect(() => {
    handleDropdownClose();
    handleSheetClose();
  }, [pathname]);

  return (
    <header className="w-full bg-white border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/Logo1.png"
            alt="Kashlan Law Logo" 
            width={48}
            height={48} 
            className="w-12 h-10"
          />
          <span className="text-lg font-bold">Kashlan Law</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            About Us
          </Link>
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
              Practice Areas
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onSelect={handleDropdownClose}>
                <Link href="/criminal" prefetch={false}>
                  Criminal Law
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleDropdownClose}>
                <Link href="/personal" prefetch={false}>
                  Personal Injury
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Contact
          </Link>
          <Button
            onClick={() => window.location.href = 'tel:+14044968178'}
            className="inline-flex items-center gap-2 h-9 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <PhoneIcon className="w-4 h-4" />
            +1 (404) 496-8178
          </Button>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <div className="grid gap-4 p-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground" prefetch={false} onClick={handleSheetClose}>
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground" prefetch={false} onClick={handleSheetClose}>
                About Us
              </Link>
              <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Practice Areas
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onSelect={handleDropdownClose}>
                    <Link href="/criminal" prefetch={false} onClick={handleSheetClose}>
                      Criminal Law
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={handleDropdownClose}>
                    <Link href="/personal" prefetch={false} onClick={handleSheetClose}>
                      Personal Injury
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground" prefetch={false} onClick={handleSheetClose}>
                Contact
              </Link>
            </div>
            <div className="mt-auto">
              <Link
                href="tel:+14044968178"
                className="inline-flex w-full items-center gap-2 h-9 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <PhoneIcon className="w-4 h-4" />
                (404)496-8179
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}