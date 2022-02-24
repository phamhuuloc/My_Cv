import React from "react";
import { menuSkills } from "./menuSkill";
const Skill = () => {
  return (
    <div className="text-center p-[20px] pt-[4rem] " id="skill">
      <p className="text-[hsl(219,8%,75%)] mb-[10px] text-[12px]">Kỹ Năng</p>
      <h3 className=" text-2xl font-medium text-[#59d9cc] mb-[20px]">
        Kinh Nghiệm Của Tôi
      </h3>
      <div className="p-[24px] bg-[hsl(219,32%,12%)] rounded-[8px] flex-col justify-center items-center">
        {menuSkills.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="text-[#59d9cc] mb-[30px] text-[18px]">
                {item.heading}
              </h4>
              <div className="flex justify-end">
                <div className="grid gap-y-[1rem] grid-cols-2 gap-x-[2rem]">
                  {item.arraySkill.map((skill) => {
                    return (
                      <div className="flex">
                        <i class="bx bx-check-circle text-[#59d9cc]"></i>
                        <div>
                          <h4 className="text-[14px] text-[hsl(219,15%,95%)] font-medium">
                            {skill.name}
                          </h4>
                          <p className="text-[12px] text-[hsl(219,8%,75%)]">
                            {skill.rating}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skill;
