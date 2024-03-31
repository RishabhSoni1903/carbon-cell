import React from "react";

function CryptoCard({ data }) {
  return (
    <div className="min-w-56 h-56 rounded p-4 bg-[#1A1E1C]">
      <div className="flex items-center gap-2">
        <div
          className="text-xl rounded-full bg-[#2AB42A] h-8 w-8 text-center"
          dangerouslySetInnerHTML={{ __html: data?.symbol }}
        ></div>
        <span>{data?.code}</span>
      </div>
      <div className="my-8">
        <div>
          {data?.rate}
          <span dangerouslySetInnerHTML={{ __html: data?.symbol }}></span>
        </div>
        <div>&#40;{data?.description}&#41;</div>
      </div>
      <div>
        <button className="px-4 py-2 rounded bg-[#2AB42A]">Trade</button>
      </div>
    </div>
  );
}

export default CryptoCard;
