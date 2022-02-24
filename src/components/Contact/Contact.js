import React from "react";
import { Button } from "../Button/Button";
const Contact = () => {
  return (
    <div className="text-center mt-[80px] mb-[2rem] pt-[4rem]" id="contact">
      <p className="text-[0.75rem] text-[hsl(219,4%,55%)]">Liên Lạc</p>
      <h2 className="text-[1.25rem] text-[hsl(174,63%,40%)] font-medium mb-[2rem]">
        Contact me
      </h2>
      <h3 className="text-[hsl(219,15%,95%)] font-medium mb-[1.5rem]">
        Kết Nối Với Tôi
      </h3>
      <div className="grid gap-[1.25rem] mx-[1rem]">
        <div className="grid p-[1rem] bg-[hsl(219,32%,12%)] rounded-[0.75rem]">
          <i className="bx bx-mail-send text-[hsl(219,25%,95%)] text-[2rem] mb-[0.2rem]"></i>
          <h3 className="text-[hsl(219,25%,95%)] font-medium mb-[0.6rem]">
            Email
          </h3>
          <span className="text-[14px] text-[hsl(219,4%,55%)]  mb-[0.75rem]">
            loc281202@gmail.com
          </span>
          <a className="flex items-center justify-center text-[hsl(174,63%,40%)] cursor-pointer">
            <span className="text-[14px]">Kết Nối</span>
            <i class="bx bx-right-arrow-alt ml-[4px]"></i>
          </a>
        </div>
        <div className="grid p-[1rem] bg-[hsl(219,32%,12%)] rounded-[0.75rem]">
          <i className="bx bxs-phone-call text-[hsl(219,25%,95%)] text-[2rem] mb-[0.2rem]"></i>
          <h3 className="text-[hsl(219,25%,95%)] font-medium mb-[0.6rem]">
            phone
          </h3>
          <span className="text-[14px] text-[hsl(219,4%,55%)]  mb-[0.75rem]">
            0353339425
          </span>
          <a className="flex items-center justify-center text-[hsl(174,63%,40%)] cursor-pointer">
            <span className="text-[14px]">Kết Nối</span>
            <i class="bx bx-right-arrow-alt ml-[4px]"></i>
          </a>
        </div>
        <div className="grid p-[1rem] bg-[hsl(219,32%,12%)] rounded-[0.75rem]">
          <i className="bx bxl-messenger text-[hsl(219,25%,95%)] text-[2rem] mb-[0.2rem]"></i>
          <h3 className="text-[hsl(219,25%,95%)] font-medium mb-[0.6rem]">
            Messenger
          </h3>
          <span className="text-[14px] text-[hsl(219,4%,55%)]  mb-[0.75rem]">
            Loc Pham
          </span>
          <a className="flex items-center justify-center text-[hsl(174,63%,40%)] cursor-pointer">
            <span className="text-[14px]">Kết Nối</span>
            <i class="bx bx-right-arrow-alt ml-[4px]"></i>
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-[hsl(219,15%,95%)]">
            Để Lại Lời Nhắn
          </h3>
          <form>
            <div className="relative mb-[1.7rem] h-[6rem]">
              <label className="absolute top-[0.9rem] left-[0.8rem] z-[100] bg-[hsl(219,48%,8%)] text-[hsl(219,8%,75%)] text-[14px] font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="h-[4rem] bg-transparent w-full outline-none rounded-[0.5rem] border-2 border-[hsl(219,4%,55%)] absolute top-[25px] left-0  p-[1.5rem] text-[219,8%,75%] text-[hsl(219,8%,75%)]"
              />
            </div>
            <div className="relative mb-[1.7rem] h-[6rem]">
              <label className="absolute top-[0.9rem] left-[0.8rem] z-[100] bg-[hsl(219,48%,8%)] text-[hsl(219,8%,75%)] text-[14px] font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="h-[4rem] bg-transparent w-full outline-none rounded-[0.5rem] border-2 border-[hsl(219,4%,55%)] absolute top-[25px] left-0  p-[1.5rem] text-[219,8%,75%] text-[hsl(219,8%,75%)]"
              />
            </div>
            <div className="relative mb-[1.7rem] h-[15rem]">
              <label className="absolute top-[0.9rem] left-[0.8rem] z-[100] bg-[hsl(219,48%,8%)] text-[hsl(219,8%,75%)] text-[14px] font-medium">
                Message
              </label>
              <textarea
                type="text"
                placeholder="Please Enter your Message"
                cols="30"
                rows="10"
                className="h-[4rem] bg-transparent w-full outline-none rounded-[0.5rem] border-2 border-[hsl(219,4%,55%)] absolute top-[25px] left-0  p-[1.5rem] text-[219,8%,75%] text-[hsl(219,8%,75%)] h-[12.4rem] text-[14px]"
              ></textarea>
            </div>
            <div className="text-left">
              <Button
                buttonStyles="btn--primary"
                className="absolute bottom-[1rem]"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
