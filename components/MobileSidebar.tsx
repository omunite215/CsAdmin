"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const MobileSidebar = () => {
  const currentPath = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          {navItems.map((navItem) => (
            <Link
              key={navItem.title}
              href={navItem.href}
              className={cn({
                "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary text-muted-foreground transition-all hover:text-primary":
                  true,
                "bg-muted text-primary": navItem.href === currentPath,
                " text-destructive hover:text-primary hover:bg-destructive/90":
                  navItem.title === "Logout",
              })}
            >
              {navItem.icon}
              {navItem.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
