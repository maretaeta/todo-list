import { useState } from "react";
import logo from "../assets/binar.png";
import control from "../assets/control.png";
import Chart_fill from "../assets/home.png"
import Plus from "../assets/plus.png"
import calendar from "../assets/filter.png"
import Chart from "../assets/todo.png"


const Home = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { id: 1, title: "Dashboard", src: Chart_fill },
    { id: 2, title: "Add New Todo", src: Plus},
    { id: 3, title: "Filter ", src: calendar, gap: true },
    { id: 4, title: "Analytics", src: Chart },
  ];

  return (
    <div className="flex h-[180vh] bg-[#F3F4FB]">
      <div
        className={` ${
          open ? "w-52 h-full" : "w-20 lg:w-24 h-full "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 w-36 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              
              <img className="w-4" src={`${Menu.src}`} />
              <span className={`${!open && "hidden"} origin-left duration-200 text-black`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;
