import {
  LayoutDashboard, BookOpen, Dumbbell, Swords, Trophy,
  ScrollText, User, Settings, Sparkles,
} from "lucide-react";

export const appNavItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/practice", label: "Practice", icon: Dumbbell },
  { to: "/boss-exams", label: "Boss Exams", icon: Swords },
  { to: "/achievements", label: "Achievements", icon: Trophy },
  { to: "/portfolio", label: "Portfolio", icon: ScrollText },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export const mobileBottomNav = [
  { to: "/dashboard", label: "Home", icon: LayoutDashboard },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/practice", label: "Practice", icon: Dumbbell },
  { to: "/boss-exams", label: "Boss", icon: Swords },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export const publicNavItems = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
] as const;

export const brand = { name: "Englify", tagline: "Level up your English", icon: Sparkles };
