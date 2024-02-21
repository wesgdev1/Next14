import Image from "next/image";
import {
  IoLogoReact,
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeadsetOutline,
} from "react-icons/io5";
import { SideBarMenuItem } from "./SideBarMenuItem";

const menuItem = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualizacion",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador cliente Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generacion estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeadsetOutline size={40} />,
    title: "Favoritos",
    subTitle: "Global state",
  },
];
export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll"
      style={{ width: "400px" }}
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className=" mr-2 text-blue-500" />
          <span>Dash</span>
          <span className="text-blue-500">9</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src="https://res.cloudinary.com/dppqkypts/image/upload/v1700670708/imagesBlog/67a338c20c709fe4ce9974ca49fadd25.jpg"
              alt="Profile"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Welinton Suarez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItem.map((item) => (
          <SideBarMenuItem
            key={item.path}
            path={item.path}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}

        {/* <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Counter
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Estado Local
            </span>
          </div>
        </a> */}
      </div>
    </div>
  );
};
