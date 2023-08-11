import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const maskPhone = (value: string, areaCode = "+7", maxChars = 11) => {
  // Only allow digits to be entered
  const regex = /\d/g;
  const digitsOnly = value.match(regex)?.join("") || "";

  // Format the phone number
  let phone = "";
  for (let i = 0; i < digitsOnly.length && i < maxChars; i++) {
    switch (i) {
      case 0:
        phone += areaCode;
        break;
      case 1:
        phone += ` (${digitsOnly[i]}`;
        break;
      case 4:
        phone += `) ${digitsOnly[i]}`;
        break;
      case 7:
      case 9:
        phone += `-${digitsOnly[i]}`;
        break;
      default:
        phone += digitsOnly[i];
    }
  }
  return phone;
};
