import React, { useState, useEffect } from "react";
import { menuItems } from "./menuItems";
const Navbar = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <nav
        className={
          offset >= 50
            ? "flex justify-between items-center h-[56px] p-[10px] shadow-3xl fixed w-screen bg-[hsl(219,48%,8%)  ] "
            : "flex justify-between items-center h-[56px] p-[10px] fixed w-screen bg-[hsl(219,48%,8%)] "
        }
      >
        <a className=" text-[16px] text-[#59d9cc]">Trang chủ</a>
        <ul className="fixed flex justify-between items-center bottom-[1rem] px-[1rem] py-[1.2rem] bg-[hsl(219,32%,16%,0.8)] w-[90%] left-0 right-0 mx-auto rounded-[100px]">
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className="p-[0.4rem] ">
                  <i
                    onClick={() => handleOnClick(index)}
                    className={
                      activeIndex === index
                        ? `${item.icon} text-xl text-[#59d9cc] `
                        : `${item.icon} text-xl text-[hsl(219,8%,75%)] `
                    }
                  ></i>
                </a>
              </li>
            );
          })}
        </ul>
        <i className="bx bx-moon  text-xl text-[hsl(219,8%,75%)] cursor-pointer "></i>
      </nav>
    </>
  );
};
export default Navbar;
