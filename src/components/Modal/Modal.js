import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
      <>
        <div
          className={`fixed inset-0   py-[2rem] px-[1rem] bg-[hsla(219,28%,16%,0.7)] z-[1000] flex items-center transition-all duration-500 ease-linear ${
              isShowing ? "visible opacity-1" : ""
            }`}
        >
          <div className="text center bg-[hsl(219,48%,8%)] rounded-[1.5rem] pt-[2.5rem] px-[1.5rem] pb-[2rem] relative cursor-pointer transition duration-1000 ease-in-out ">
            <i className="bx bx-x absolute top-[1.5rem] right-[1.5rem] text-[#59d9cc] text-[30px] font-medium"></i>
            <h2 className="text-[#59d9cc] text-center text-[16px] font-medium mt-[40px]">
              Thiết Kế Giao Diện Website
            </h2>
            <p className="text-[13px] text-[hsl(219,8%,75%)] mt-[10px] text-center mb-[2rem]">
              Với kinh nghiệm 2 năm trong lĩnh vực phát triển website tôi có
              thể.
            </p>
            <div className="flex justify-center mb-[10px]">
              <i class="bx bx-check text-[20px] font-medium mr-[5px] text-[#59d9cc]"></i>
              <span className="text-[13px] text-[hsl(219,8%,75%)]">
                Thiết kế giao diên theo yêu cầu của khách hàng
              </span>
            </div>
            <div className="flex justify-center">
              <i class="bx bx-check text-[20px] font-medium mr-[5px] text-[#59d9cc]"></i>
              <span className="text-[13px] text-[hsl(219,8%,75%)]">
                Thiết kế giao diên trực quan dễ nhìn
              </span>
            </div>
          </div>
        </div>
      </>,
      document.body
    )
    : null;

export default Modal;
