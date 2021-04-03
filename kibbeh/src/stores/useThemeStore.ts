import create from "zustand";
import { combine } from "zustand/middleware";
import { isServer } from "../lib/isServer";

const getDefaultValues = () => {
  if (!isServer) {
    try {
      return {
        theme: localStorage.getItem("theme") || "dark",
      };
    } catch {}
  }

  return {
    theme: "dark",
  };
};

export const useThemeStore = create(
  combine(getDefaultValues(), (set) => ({
    setTheme: (theme: string) => {
      try {
        localStorage.setItem("theme", theme);
      } catch {}

      set({ theme });
    },
  }))
);
