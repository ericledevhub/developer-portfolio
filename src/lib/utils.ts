import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// scroll to element
export function scrollTo(element: Element | null, alignment: "start" | "center") {
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: alignment,
    inline: "center", // Adjust as needed
  });
}
