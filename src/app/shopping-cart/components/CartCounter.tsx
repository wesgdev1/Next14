"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  resetCounter,
  substractOne,
} from "@/store/counter/counterSlice";
import { get } from "http";
import { use, useEffect } from "react";

interface Props {
  value: number;
}

interface CounterResponse {
  method: string;
  count: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then((data) => {
      dispatch(initCounterState(data.count));
    });
  }, []);

  const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch("/api/counter").then((res) => res.json());
    console.log(data);
    return data;
  };
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
