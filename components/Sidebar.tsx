"use client";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:block px-2 animate-in slide-in-from-left-72 delay-300 duration-700">
      <div className="flex h-full max-h-screen flex-col gap-2 fixed">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/logo/logo.png" width={24} height={24} alt="logo" />
            <span className="">ComSec360 Admin</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium gap-4 mt-6">
            {navItems.map((navItem) => (
              <Link
                key={navItem.title}
                href={navItem.href}
                className={cn({
                  "flex items-center gap-3 rounded-md px-4 py-3 hover:bg-secondary text-muted-foreground transition-all hover:text-primary":
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
