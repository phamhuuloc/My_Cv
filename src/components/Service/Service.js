import React from "react";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";
const Service = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="text-center mt-[40px] flex flex-col items-center">
      <p className="text-[hsl(219,8%,75%)] text-[12px]">Dịch Vụ</p>
      <h3 className="text-[18px] text-[#59d9cc] mb-[20px] font-medium">
        Cung Cấp Các Dịch Vụ
      </h3>
      <div className=" p-[24px] bg-[hsl(219,32%,12%)] rounded-[8px] w-[145px] text-left">
        <h3 className="text-[hsl(219,15%,95%)] mb-[40px] font-medium">
          Thiết Kế Web
        </h3>
        <div
          className="flex items-center justify-center text-[14px] text-[#59d9cc] font-medium  cursor-pointer  "
          onClick={toggle}
        >
          <span>Xem Thêm</span>
          <i class="bx bx-right-arrow-alt ml-[4px]"></i>
          <Modal isShowing={isShowing} hide={toggle} />
        </div>
      </div>
    </div>
  );
};
export default Service;
