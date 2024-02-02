import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartItem } from "../models/CartItem";

export const useShoppingCart = (
  key: string,
  defaultValue = [],
): [CartItem[], Dispatch<SetStateAction<CartItem[]>>] => {
  const [value, setValue] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [key, value]);
  return [value, setValue];
};
