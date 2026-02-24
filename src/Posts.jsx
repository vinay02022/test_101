
import { useEffect } from "react";
const style = { width: "80%", maxWidth: "400px", display: "block", marginBottom: "20px", borderRadius: "8px" ,padding:"20px",margin:"20px"};
const newStyle={padding:"20px"}
export default function Posts({ data, setPageNo }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        console.log("param", param);
        if (param[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.5 }
    );

    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);
  return (
    <div className="container" style={style}>
      {data.map((item, index) => {
        return (
          <img className="image-post" style={newStyle} key={item.id} src={item.download_url} />
        );
      })}
    </div>
  );
}
