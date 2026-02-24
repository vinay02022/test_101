import { useEffect, useState } from "react";
import Posts from "./Posts";

export default function InfiniteScrollFinal() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => setData((oldData) => [...oldData, ...arr]));
  }, [pageNo]);

  return (<Posts data={data} setPageNo={setPageNo} />);
}
