"use client";
import { useState } from "react";

interface Props {
  value: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-4">
        <button
          className="flex items-center justify-center p-2 rounded-md bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-md bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
};
