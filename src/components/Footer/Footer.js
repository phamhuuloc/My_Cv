import React from "react";
const Footer = () => {
  return (
    <div className="grid text-center bg-[hsl(174,63%,40%)] pt-[2rem] pb-[6rem]">
      <h3 className="font-semibold text-[24px] mb-[2rem]">Loc pham</h3>
      <ul className="flex items-center justify-center gap-x-[10px] mb-[2rem] ">
        <li>Trang Chủ</li>
        <li>Giới Thiệu</li>
        <li>Sản Phẩm</li>
      </ul>
      <ul className="flex items-center justify-center gap-[24px] mb-[4rem] text-[16px]">
        <li>
          <a className="p-[0.25rem] bg-[hsl(219,48%,8%)]  rounded-[0.25rem] flex items-center ">
            <i class="bx bxl-facebook text-[hsl(174,63%,40%)] "></i>
          </a>
        </li>
        <li>
          <a className="p-[0.25rem] bg-[hsl(219,48%,8%)]  rounded-[0.25rem] flex items-center ">
            <i class="bx bxl-github  text-[hsl(174,63%,40%)]"></i>
          </a>
        </li>
        <a className="p-[0.25rem] bg-[hsl(219,48%,8%)]  rounded-[0.25rem] flex items-center ">
          <i class="bx bxl-youtube  text-[hsl(174,63%,40%)]"></i>
        </a>
        <li></li>
      </ul>
      <span className="text-[14px]">Pham Huu Loc. All right reserved</span>
    </div>
  );
};
export default Footer;
