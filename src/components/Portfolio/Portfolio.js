import React, { useState, useEffect } from "react";
import { menuFillter } from "./menuFillter";
import WorkCard from "../WorkCard/WorkCard";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_PRODUCTS_WITH_CATEGORY } from "../../actions/listCard";
const Portfolio = () => {
  const listCards = useSelector((state) => state.cards);
  const [works, setWorks] = useState(listCards.products);

  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (item, index) => {
    console.log(item);
    setActiveIndex(index);
    const action = FILTER_PRODUCTS_WITH_CATEGORY(item);
    dispatch(action);
  };
  useEffect(() => {
    console.log("run...");
    setWorks(listCards.filteredProducts);
  }, [activeIndex]);
  return (
    <div className="text-center mt-[80px]  pt-[4rem] " id="portfolio">
      <h3 className="text-[0.75rem] text-[hsl(219,4%,55%)]">My Portfolio</h3>
      <h2 className="font-medium text-[hsl(219,4%,55%)] text-[0.9rem] ">
        Sản Phẩm Nổi Bật
      </h2>
      <div className="flex items-center justify-center mt-[8px]">
        {menuFillter.map((item, index) => {
          return (
            <span
              className={`cursor-pointer rounded-[0.5rem] text-[hsl(219,15%,95%)] px-[0.75rem] py-[0.25rem] text-[0.813rem] ${
                activeIndex === index
                  ? "bg-[hsl(174,63%,40%)] text-[hsl(219,48%,8%)]"
                  : ""
              }`}
              key={index}
              onClick={() => handleOnClick(item, index)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="grid gap-[1.25rem] pt-[1rem] mx-[1rem]">
        {works.map((item, index) => {
          return <WorkCard img={item.img} title={item.title} url={item.url} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
