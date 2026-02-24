import axios from "axios";
import React, { useState, useEffect } from "react";

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [res, setRes] = useState([]);

  // ✅ useEffect runs whenever searchTerm changes
  useEffect(() => {

    // If input is empty, clear results and stop
    if (!searchTerm.trim()) {
      setRes([]);
      return;
    }

    // ✅ Set debounce timer (300ms delay)
    const timer = setTimeout(async () => {
      try {
        // API call
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = response.data;

        // Filter users based on search term (case insensitive)
        const filterData = data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Update state with filtered results
        setRes(filterData);

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }, 300); // 300 milliseconds debounce delay

    // ✅ Cleanup function
    // Clears previous timer if user types again before 300ms
    return () => clearTimeout(timer);

  }, [searchTerm]); // Dependency array

  return (
    <div>
      <input
        className="search-input w-1/2 h-9 border border-black rounded-md p-2"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // No more onKeyDown
        placeholder="Start typing..."
      />

      <div>
        {res.map((i) => (
          <p key={i.id}>{i.name}</p>  /* ✅ Added key for React list rendering */
        ))}
      </div>
    </div>
  );
};

export default DebouncedSearch;