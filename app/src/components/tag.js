import React from "react";

const Tag = ({ type }) => {
  return <div className="text-[11px] text-[#212325] font-semibold flex flex-wrap justify-center bg-blue-100 rounded-md px-2 py-1 items-center">{type}</div>;
};

export default Tag;
