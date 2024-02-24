import { WidgetsGrid } from "@/app/components";

export default function MainPage() {
  return (
    <div className="p-2 text-black">
      <h1 className="text-3xl mt-2">Dashboard</h1>
      <span className="text-xl ">Informacion General</span>
      <WidgetsGrid />
    </div>
  );
}
