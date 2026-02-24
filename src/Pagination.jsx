import axios from "axios";
import { useEffect, useState } from "react";

export default function Pagination() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(data =>{ 
//         //   console.log("data-",data);
//          setUsers(data.data)
//         });
//   }, []);
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/users?page=${page}`)
    .then(res => res.json())
    .then(data => setUsers(data));
}, [page]);

  const start = (page - 1) * perPage;
  const current = users.slice(start, start + perPage); //Current page data
  const totalPages = Math.ceil(users.length / perPage);//Total number of pages

  return (
    <div>
      <h2>Users</h2>

      {current.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <span> {page} </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
