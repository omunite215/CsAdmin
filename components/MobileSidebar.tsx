"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const MobileSidebar = () => {
  const currentPath = usePathname();
  const [home, setHome] = useState(false);
  const [incorporation, setIncorporation] = useState(false);
  const [annualReturn, setAnnualReturn] = useState(false);
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
