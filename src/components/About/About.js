import React from "react";
import user from "../../img/user.jpg";
import { Button } from "../Button/Button";
import { aboutItems } from "./aboutItems";
const About = () => {
  return (
    <div className="text-center mb-[90px] pt-[4rem]" id="about">
      <p className="text-[hsl(219,8%,75%)] text-[14px]">Giới thiệu</p>
      <h2 className="text-xl text-[#59d9cc] font-medium">Tôi</h2>
      <div className="grid gap-y-[1.25rem] ">
        <img
          className="w-[220px] h-[220px] justify-self-center object-cover"
          src={user}
          alt=""
        />
        <div className="grid gap-[0.5rem]  grid-cols-2 p-[10px]">
          {aboutItems.map((item, index) => {
            return (
              <div
                className="text-center bg-[hsl(219,32%,12%)] rounded-[8px] p-[0.75rem]"
                key={index}
              >
                <i className={`${item.icon} text-[#59d9cc] text-xl`}></i>
                <h3 className="text-[hsl(219,15%,95%)] text-[14px]">
                  {item.title}
                </h3>
                <span className="text-[12px] text-[hsl(219,8%,75%)]">
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>
        <p className="p-[10px] text-[hsl(219,8%,75%)] text-center mb-[20px]">
          Tôi thực sự tin rằng mình là ứng cử viên tốt nhất cho vị trí quý công
          ty đang tuyển dụng, bởi ngoài khả năng đáp ứng công việc như những ứng
          viên khác, tôi còn có điểm mạnh, đó là thái độ làm việc nghiêm túc, và
          nhiệt tình trong công việc.
        </p>
        <div>
          <Button>Liên Lạc</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
