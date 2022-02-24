import React from "react";
import { Button } from "../Button/Button";
const Home = () => {
  return (
    <div
      className="pt-[4rem] text-center  mt-[2rem] z-[-100] mb-[150px]"
      id="home"
    >
      <p className="text-sm  text-white mb-[4px]">Tôi là</p>
      <h1 className="text-[hsl(219,15%,95%)] text-[1.75rem] font-medium mb-[5px]">
        Phạm Hữu Lộc
      </h1>
      <p className="text-sm text-[hsl(219,8%,75%)] mb-[20px]">
        Frontend Developer
      </p>
      <div className="mb-[20px] ">
        <Button>Xem cv</Button>
      </div>
      <div className="mb-[200px]">
        <Button buttonStyles="btn--primary">Giới thiệu</Button>
      </div>
      <div className=" relative  p-[10px]">
        <ul>
          <li className="p-[0.25rem] w-max flex  bg-[hsl(219,32%,12%)] text-[#59d9cc] rounded-[4px] mb-[10px] cursor-pointer">
            <i class="bx bxl-facebook"></i>
          </li>
          <li className="p-[0.25rem] w-max flex bg-[hsl(219,32%,12%)] text-[#59d9cc] rounded-[4px] mb-[10px]">
            <a href="https://github.com/phamhuuloc">
              <i class="bx bxl-github"></i>
            </a>
          </li>
          <li className="p-[0.25rem] w-max flex bg-[hsl(219,32%,12%)] text-[#59d9cc] rounded-[4px] mb-[10px]  ">
            <i class="bx bxl-youtube"></i>
          </li>
        </ul>
        <div className=" absolute top-[-50%] left-0 right-0 mx-auto flex items-end justify-center justify-self-center w-[150px] h-[250px] bg-gradient-to-b from-sky-400 to-sky-200 rounded-t-[10rem]">
          <img
            className="max-w-[90%]"
            src="https://zocytus.github.io/myweb/assets/img/perfil.png"
            alt=""
          />
        </div>
        <a
          className=" absolute top-[80px] right-[-1.5rem] text-[#59d9cc] flex   rotate-90  items-start "
          href="#about"
        >
          <i class="bx bx-mouse mr-[10px]"></i>
          <span className="text-[12px]">Trượt xuống</span>
        </a>
      </div>
    </div>
  );
};
export default Home;
