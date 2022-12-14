import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const objects = [
  {
    id: 1,
    title: "Insert Task",
    src: "asstes/Forward.svg",
    link: "/insert-task",
  },
  {
    id: 2,
    title: "To Do",
    src: "asstes/Forward.svg",
    link: "/to-do",
  },
  {
    id: 3,
    title: "Done",
    src: "asstes/Forward.svg",
    link: "/done",
  },
];
const SideBar = () => {
  return (
    <div className='relative w-2/4 sm:w-full lg:w-full'>
      <div
        className='h-full fixed w-[27%] bg-[#262338] py-12 sm:relative sm:w-full lg:w-[40%]'
        id='main-class'
      >
        {objects.map((elements, index) => (
          <NavLink key={elements.id} to={elements.link} className='block mx-14'>
            <div className='flex justify-between items-center py-4'>
              <div className='flex'>
                <img src='/assets/circle.svg' alt='circle' className='pr-4' />
                <h1 className='text-white text-base'>{elements.title}</h1>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
