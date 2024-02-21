"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  resetCounter,
  substractOne,
} from "@/store/counter/counterSlice";
import { use, useEffect } from "react";

interface Props {
  value: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-4">
        <button
          className="flex items-center justify-center p-2 rounded-md bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-md bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
