"use client";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { buttonVariants } from "./ui/button";

const Sidebar = () => {
  const currentPath = usePathname();
  const [home, setHome] = useState(false);
  const [incorporation, setIncorporation] = useState(false);
  const [annualReturn, setAnnualReturn] = useState(false);
  return (
    <div className="hidden border-r bg-muted/40 md:block px-2 animate-in slide-in-from-left-72 delay-300 duration-700">
      <div className="flex h-full max-h-screen flex-col gap-2 fixed">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo/logo.png"
              width={24}
              height={24}
              alt="logo"
              loading="eager"
            />
            <span className="">ComSec360 Admin</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium gap-4 mt-6">
            {navItems.map((item) => (
              <Collapsible
                key={item.title}
                open={
                  item.title === "Home"
                    ? home
                    : item.title === "Incorporation"
                    ? incorporation
                    : annualReturn
                }
                onOpenChange={
                  item.title === "Home"
                    ? setHome
                    : item.title === "Incorporation"
                    ? setIncorporation
                    : setAnnualReturn
                }
              >
                <CollapsibleTrigger
                  className={buttonVariants({
                    variant: "ghost",
                    className: "flex gap-3 mb-2",
                  })}
                >
                  {item.icon} {item.title}
                </CollapsibleTrigger>
                <CollapsibleContent className="CollapsibleContent">
                  <div className="px-4 flex flex-col space-y-3">
                    {item.items.map((sub_item) => (
                      <Link
                        key={sub_item.href}
                        href={sub_item.href}
                        className={cn({
                          "flex items-center gap-3 rounded-md px-4 py-3 hover:bg-secondary text-muted-foreground transition-all hover:text-primary animate-in slide-in-from-left duration-500":
                            true,
                          "bg-muted text-primary":
                            sub_item.href === currentPath,
                        })}
                      >
                        {sub_item.icon} {sub_item.title}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
