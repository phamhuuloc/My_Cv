import React from "react";
const WorkCard = ({ img, title, url }) => {
  return (
    <div className="bg-[hsl(219,32%,12%)] p-[1rem] rounded-[1rem]">
      <div>
        <img
          src={img}
          alt=""
          className="w-full object-cover rounded-[1rem]  mb-[20px]"
        />
      </div>
      <h3 className="text-left mb-[0.25rem] font-medium text-[0.983rem] text-[hsl(219,15%,95%)]">
        {title}
      </h3>
      <a
        href={url}
        className="text-left block text-[0.813rem] text-[hsl(174,63%,40%)] flex items-center cursor-pointer"
      >
        <span>Sản Phẩm</span>
        <i class="bx bx-right-arrow-alt text-[16px] ml-[4px]"></i>
      </a>
    </div>
  );
};
export default WorkCard;
