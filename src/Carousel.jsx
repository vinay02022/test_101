import { useEffect, useState, useRef, use } from "react";
// import data from "./data.json";
import axios from "axios";
import "./Carousel.css";

export default function Carousel() {
    const [data, setData] = useState([]);
    
  const [index, setIndex] = useState(0);
  const ref = useRef(null); 

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list?page=1&limit=20").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  // useRef is used to store the interval ID so we can clear it later.
  // We use ref instead of state because updating ref does NOT cause re-render.

  const handleNext = () => {
    setIndex((prevIndex) => {
      // We use functional update form to ensure we always get the latest state value.
      // This avoids stale state issues inside setInterval.

      if (prevIndex === data.length - 1) {
        return 0; 
        // If we reach the last image, reset to first image (circular behavior).
      }

      return prevIndex + 1; 
      // Otherwise move to next image.
    });
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(data.length - 1);
      // If we are at first image and go backward,
      // jump to last image (circular behavior).
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    // Start automatic sliding every 1 second.
    // We store interval ID inside ref so we can clear it later.

    return () => {
      clearInterval(ref.current);
      // Cleanup function runs when component unmounts.
      // This prevents memory leaks and unwanted background intervals.
    };
  }, []);
  // Empty dependency array means this runs only once when component mounts.

  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      // Pause auto sliding when user hovers over carousel.

      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 1000);
        // Resume auto sliding when mouse leaves.
      }}
      className="container"
    >
      <div onClick={handlePrev} className="left-btn">
        {"<"}
      </div>

      <img src={data[index]?.download_url} alt="" />
      {/* Displays current image based on index */}

      <div onClick={handleNext} className="right-btn">
        {">"}
      </div>
    </div>
  );
}