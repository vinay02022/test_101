import React, { useEffect, useState } from "react";

// const slides = [
//   {className: "h-64 w-full bg-red-500" },
//   {className: "h-64 w-full bg-blue-500" },
//   {className: "h-64 w-full bg-green-500" },
//   {className: "h-64 w-full bg-yellow-500" },
//   {className: "h-64 w-full bg-purple-500" },
// ];
const slides = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
  "https://picsum.photos/id/1020/1000/600/",
];

const Slider = () => {
  // 1) store index, not boolean
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currIdx) => (currIdx + 1) % slides.length);
    }, 2000);  
    console.log("interval",interval);
     
    return () => clearInterval(interval);
    
  }, []);

  const handleNext = () => {
    // 2) move forward + wrap to 0 when reaches end
    setCurrentIndex((currIdx) => (currIdx + 1) % slides.length);
    
  };

  const handlePrev = () => {
    // 3) move backward + wrap to last when goes below 0
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* 4) show ONLY active slide */}
      <div className="container w-full overflow-hidden">
        {/* <div className={slides[currentIndex].className}></div> */}
        <img src={slides[currentIndex]} />
      </div>

      <div className="space-x-4 flex justify-between mt-4">
        <button className="prev-btn w-1/5 hover:cursor-pointer" onClick={handlePrev}>
          ⬅️
        </button>

        <button className="next-btn w-1/5 hover:cursor-pointer" onClick={handleNext}>
          ➡️
        </button>
      </div>
    </div>
  );
};

export default Slider;