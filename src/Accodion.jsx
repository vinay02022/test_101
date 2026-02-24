import React, { useState } from "react";

function Accordion() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (value) => {
    console.log("vale",value);
    

    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-2">
      
      {/* Item 1 */}
      <div className="border rounded-lg">
        <button
          onClick={() => toggleItem("item-1")}
          className="w-full px-4 py-3 text-left font-medium flex justify-between items-center"
        >
          Section 1
          <span>{openItem === "item-1" ? "-" : "+"}</span>
        </button>

        {openItem === "item-1" && (
          <div className="px-4 pb-4 text-gray-600">
            Content 1...
          </div>
        )}
      </div>

      {/* Item 2 */}
      <div className="border rounded-lg">
        <button
          onClick={() => toggleItem("item-2")}
          className="w-full px-4 py-3 text-left font-medium flex justify-between items-center"
        >
          Section 2
          <span>{openItem === "item-2" ? "-" : "+"}</span>
        </button>

        {openItem === "item-2" && (
          <div className="px-4 pb-4 text-gray-600">
            Content 2...
          </div>
        )}
      </div>

    </div>
  );
}

export default Accordion;
