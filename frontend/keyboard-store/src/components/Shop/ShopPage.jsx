import React, { useState } from "react";

import ProductGrid from "../Product/ProductGrid";

function Filter({ onSelectType }) {
  return (

      <div className="flex flex-row gap-2 text-lg font-semibold uppercase  justify-center bg-[#262626] p-2 rounded-xl">
        <p className="cursor-pointer border-r border-gray-400 px-5" glitch="ALL" onClick={() => onSelectType("")}>
          All
        </p>
        <p className="cursor-pointer border-r border-gray-400 px-5" glitch="LINEAR" onClick={() => onSelectType("Linear")}>
          Linear
        </p>
        <p className="cursor-pointer border-r border-gray-400 px-5" glitch="TACTILE" onClick={() => onSelectType("Tactile")}>
          Tactile
        </p>
        <p className="cursor-pointer px-5" glitch="CLICKY" onClick={() => onSelectType("Clicky")}>
          Clicky
        </p>
      </div>
  );
}

function ShopPage() {
  const [selectedType, setSelectedType] = useState("");

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#141414] p-5 text-green">
      <h1 className="text-center uppercase font-bold text-5xl px-5 pt-20 mb-5">
        {selectedType === "" ? "All" : selectedType}
      </h1>
      <div className="flex flex-col ">
        <div className="self-center">
          <Filter onSelectType={handleSelectType} />
        </div>
        <div className="px-5">
          <ProductGrid selectedType={selectedType} size="w-96" />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
