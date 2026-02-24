import axios from 'axios';
import React, { useState, useEffect } from 'react'

const InfiniteScroll = () => {
    const [res, setRes] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 5;
    const [limit, setLimit] = useState(10);


    useEffect(() => {
        const fetchData = () => {
            console.log("fetching data...");
            // Simulate fetching data and appending to the list
            axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
                .then(response => {
                    console.log("data", response.data);
                    // Here you would typically update your state with the new data
                    setRes(prev => [...prev, ...response.data]);
                })

        }
        fetchData();
    }, []);


    return (
        <div>
            <div className="flex justify-center h-[90vh] items-center ">
                <ul className='h-full overflow-y-auto flex flex-col items-center'>
                    {res.map((item) => (
                        <li key={item.id}>
                            <img src={item.download_url} className="w-full max-h-64 object-cover mb-4" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-[10vh] bg-blue-500">
                world
            </div>

        </div>

    )
}

export default InfiniteScroll