import React, { useState } from "react";

function Child_3() {
  const [value, setValue] = useState("profile");

  return (
    <div className="w-full max-w-md rounded-2xl ">
      {/* Tab Buttons */}
      <div className="flex border-amber-600 border-4 bg-black mt-10">
        <button
          onClick={() => setValue("profile")}
          className={`px-4 py-2 ${
            value === "profile"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setValue("settings")}
          className={`px-4 py-2 ${
            value === "settings"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Settings
        </button>

        <button
          onClick={() => setValue("account")}
          className={`px-4 py-2 ${
            value === "account"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Account
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {value === "profile" && <div className="flex items-center justify-center h-32 bg-gray-100">Profile content...</div>}
        {value === "settings" && <div className="flex items-center justify-center h-32 bg-gray-100">Settings content...</div>}
        {value === "account" && <div className="flex items-center justify-center h-32 bg-gray-100">Account content...</div>}
      </div>
    </div>
  );
}

export default Child_3;
