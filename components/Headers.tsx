import React from "react";
import SVGComponent from "./SvgComponent";
import {
  ChartArea,
  LayoutDashboard,
  MenuIcon,
  MessageSquare,
  Settings2,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Button } from "./ui/button";
import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const routes = [
  {
    id: 1,
    label: "Dashboard",
    route: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: 2,
    label: "Response",
    route: "/response",
    icon: <MessageSquare />,
  },
  {
    id: 3,
    label: "Analytics",
    route: "/analytics",
    icon: <ChartArea />,
  },
  {
    id: 4,
    label: "Upgrade",
    route: "/upgrade",
    icon: <Shield />,
  },
  {
    id: 5,
    label: "Settings",
    route: "/settings",
    icon: <Settings2 />,
  },
];

const clerk = [
    {
        id: 1,
        name: "Nikhil",
        designation: "Full stack developer",
        image: "/purpleImage.png"
    }
]

const inter = Poppins({ subsets: ["latin-ext"], weight: "700" });

const Headers = () => {
  return (
    <div className="w-full flex items-center justify-between h-auto p-3 px-6 md:px-12">
      <div className="flex items-center justify-center">
        <div className="animate-spin-slow w-8 mr-2 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
          <SVGComponent />
        </div>
        <span className={cn("font-bold text-xl md:text-2xl", inter.className)}>OUTBREAK</span>
      </div>
      <div className="flex items-center justify-evenly">
        <div>
          <div className="hidden lg:block">
            {routes.map((item) => (
              <Link
                href={item.route}
                key={item.id}
                className="mx-2 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="block lg:hidden">
            <Button variant="ghost">
            <MenuIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <AnimatedTooltip items={clerk} />
      </div>
    </div>
  );
};

export default Headers;
