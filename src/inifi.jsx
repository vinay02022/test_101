import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = () => {
    const [res, setRes] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null); // 1. Ref for the sentinel

    // Fetch data whenever 'page' changes
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://picsum.photos{page}&limit=10`
                );
                // Append new data to previous data
                setRes(prev => [...prev, ...response.data]);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]); // 2. Dependency on 'page'

    // Intersection Observer logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            // 3. If the bottom div is visible and we aren't already loading...
            if (target.isIntersecting && !loading) {
                setPage(prev => prev + 1); // Trigger next page
            }
        }, { threshold: 1.0 });

        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => observer.disconnect(); // Cleanup
    }, [loading]); // Re-run if loading state changes

    return (
        <div className="h-screen flex flex-col">
            <div className="h-[90vh] overflow-hidden">
                <ul className="h-full overflow-y-auto flex flex-col items-center p-4">
                    {res.map((item) => (
                        <li key={`${item.id}-${Math.random()}`} className="w-1/2">
                            <img src={item.download_url} className="w-full h-auto mb-4 rounded shadow" alt="picsum" />
                        </li>
                    ))}
                    
                    {/* 4. The Sentinel: When this is visible, load more */}
                    <div ref={loaderRef} className="h-10 w-full flex justify-center items-center">
                        {loading && <p>Loading more...</p>}
                    </div>
                </ul>
            </div>

            <div className="h-[10vh] bg-blue-500 flex items-center justify-center text-white">
                Footer (World)
            </div>
        </div>
    );
};

export default InfiniteScroll;
