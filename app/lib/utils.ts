import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const useScreenWidth = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);

    window.addEventListener("resize", update);
    update();

    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
};

/**
 * Format date to "Month Day, Year" format
 * @param dateString - ISO date string (e.g., "2025-11-21T14:30:30.772Z")
 * @returns Formatted date string (e.g., "November 21, 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
