import { useEffect, useState } from "react";

export const useFetchApartments = () => {
    const url = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApartments = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    headers: {
                        apikey: apiKey,
                        Authorization: `Bearer ${apiKey}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setApartments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApartments();
    }, [url, apiKey]);

    return { apartments, loading, error };
};
