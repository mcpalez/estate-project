import { useEffect, useState } from "react";

export const useFetchApartments = (url) => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setApartments(data.data);
            } catch (err) {
                console.log(err.message);
            } finally {
                console.log("Loaded");
            }
        };

        fetchApartments();
    }, [url]);

    return { apartments };
};
