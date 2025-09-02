export interface NavigationLink {
  href: string;
  label: string;
}

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/hotels", label: "Hotel" },
  { href: "/trips", label: "Trip" },
  { href: "/rent-a-cars", label: "Rent a car" },
  { href: "/contact", label: "Contact" },
];
