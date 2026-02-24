import { useState, useEffect } from "react";

export default function InfiScroll_testExp() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  // Fetch images when page changes
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=20`
        );
        const data = await res.json();

        setImages((prev) => [...prev, ...data]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, [page]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {images.map((img) => (
        <img
          key={img.id}
          src={`https://picsum.photos/id/${img.id}/400/300`}
          alt={img.author}
          style={{
            width: "100%",
            maxWidth: "400px",
            display: "block",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        />
      ))}
    </div>
  );
}

// import { useState,useEffect } from "react";

// export default function InfiScroll_testExp() {
//   const [count, setCount] = useState(50);

//   useEffect(() => {
//     const onScroll = () => {
//       if (
//         window.innerHeight + window.scrollY >=
//         document.body.offsetHeight - 30
//       ) {
//         // ✅ Use functional update to avoid stale state
//         setCount(prev => prev + 50);
//       }
//     };

//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, []); // ✅ Empty dependency array (important)

//   const elements = [];
//   for (let i = 0; i < count; i++) {
//     elements.push(<div key={i}>{i + 1}</div>);
//   }

//   return <main>{elements}</main>;
// };