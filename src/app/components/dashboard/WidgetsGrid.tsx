"use client";

import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget
        title={`${isCart}`}
        subtitle="Productos agregados"
        label="Contador"
        icon={<IoCafeOutline size={50} />}
        href="/dashboard/counter"
      />
      {/* <SimpleWidget />
      <SimpleWidget /> */}
    </div>
  );
};
