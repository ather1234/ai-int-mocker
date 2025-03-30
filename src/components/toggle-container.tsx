import { Menu } from "lucide-react";
import { NavigationRoutes } from "./navigation-routes";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const ToggleContainer = () => {
  const { userId } = useAuth();
  console.log("User ID:", userId);
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>
        <nav className="gap-6 flex flex-col items-start">
          <NavigationRoutes isMobile />
          {userId && (
            <NavLink
              to={"/generate"}
              className={({ isActive }) =>
                cn(
                  "text-base text-neutral-600 ",
                  isActive && "text-neutral-900 font-semibold"
                )
              }
            >
              Take an Interview
            </NavLink>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
