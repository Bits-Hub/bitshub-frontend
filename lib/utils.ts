import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateInitials(fullName: string): string {
  if (!fullName) return '';

  const nameParts = fullName.trim().split(' ');
  const initials = nameParts
    .map((part) => part[0].toUpperCase())
    .slice(0, 2) // Optionally, limit initials to 2 letters
    .join('');

  return initials;
}

export function calculateVAT(subtotal: number, vatRate: number): number {
  return (subtotal * vatRate) / 100;
}