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
 * Format an ISO date string or Date object to `dd/mm/yyyy`.
 * Example: `2025-11-21T14:30:30.772Z` -> `21/11/2025`
 * @param input - ISO date string or Date instance
 * @returns Formatted date string or empty string for invalid input
 */
export function formatDate(input?: string | Date | null): string {
  if (!input) return ""

  const date = typeof input === "string" ? new Date(input) : input
  if (Number.isNaN(date.getTime())) return ""

  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()

  return `${day}-${month}-${year}`
}
